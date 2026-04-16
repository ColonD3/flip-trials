#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import ssl
import sys
import tempfile
import urllib.error
import urllib.request
import zipfile
from pathlib import Path


API_BASE = "https://api.netlify.com/api/v1"
DEFAULT_EXCLUDES = {".git", ".DS_Store", "__pycache__", "deploy_netlify.py"}


def api_request(method: str, path: str, token: str, data=None):
    url = f"{API_BASE}{path}"
    headers = {
        "Authorization": f"Bearer {token}",
        "User-Agent": "codex-netlify-deployer",
    }
    body = None
    if data is not None:
        body = json.dumps(data).encode("utf-8")
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, context=ssl._create_unverified_context()) as resp:
            payload = resp.read().decode("utf-8")
            return json.loads(payload) if payload else {}
    except urllib.error.HTTPError as exc:
        message = exc.read().decode("utf-8", errors="replace")
        raise SystemExit(f"Netlify API error {exc.code} on {path}:\n{message}") from exc


def iter_files(root: Path, excludes: set[str]):
    for path in sorted(root.rglob("*")):
        if any(part in excludes for part in path.parts):
            continue
        if path.is_file():
            yield path


def zip_folder(root: Path, excludes: set[str]) -> Path:
    tmp = tempfile.NamedTemporaryFile(suffix=".zip", delete=False)
    tmp.close()
    zip_path = Path(tmp.name)
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for file_path in iter_files(root, excludes):
            zf.write(file_path, arcname=str(file_path.relative_to(root)))
    return zip_path


def load_token(cli_token: str | None) -> str:
    token = cli_token or os.environ.get("NETLIFY_TOKEN", "").strip()
    if not token:
        raise SystemExit("Missing Netlify token. Pass --token or set NETLIFY_TOKEN.")
    return token


def pick_site(token: str, site_id: str | None, site_name: str | None) -> dict:
    if site_id:
        return api_request("GET", f"/sites/{site_id}", token)

    sites = api_request("GET", "/sites", token)
    if site_name:
        for site in sites:
            if site.get("name") == site_name:
                return site

    if not sites:
        raise SystemExit("No Netlify sites found on this account.")

    return sites[0]


def main():
    parser = argparse.ArgumentParser(description="Deploy a static folder to Netlify.")
    parser.add_argument("project_dir", nargs="?", default=".", help="Folder to deploy")
    parser.add_argument("--token", help="Netlify personal access token")
    parser.add_argument("--site-id", help="Existing Netlify site id")
    parser.add_argument("--site-name", help="Existing Netlify site name")
    parser.add_argument(
        "--exclude",
        action="append",
        default=[],
        help="Extra folder or file name to exclude from the zip",
    )
    args = parser.parse_args()

    root = Path(args.project_dir).expanduser().resolve()
    if not root.exists() or not root.is_dir():
        raise SystemExit(f"Project folder not found: {root}")

    token = load_token(args.token)
    site = pick_site(token, args.site_id or os.environ.get("NETLIFY_SITE_ID"), args.site_name or os.environ.get("NETLIFY_SITE_NAME"))
    site_id = site["id"]

    excludes = set(DEFAULT_EXCLUDES)
    excludes.update(arg.strip() for arg in args.exclude if arg.strip())

    zip_path = zip_folder(root, excludes)
    try:
        with zip_path.open("rb") as fh:
            req = urllib.request.Request(
                f"{API_BASE}/sites/{site_id}/deploys",
                data=fh.read(),
                headers={
                    "Authorization": f"Bearer {token}",
                    "User-Agent": "codex-netlify-deployer",
                    "Content-Type": "application/zip",
                },
                method="POST",
            )
            try:
                with urllib.request.urlopen(req, context=ssl._create_unverified_context()) as resp:
                    payload = json.loads(resp.read().decode("utf-8"))
            except urllib.error.HTTPError as exc:
                message = exc.read().decode("utf-8", errors="replace")
                raise SystemExit(f"Netlify API error {exc.code} on ZIP deploy:\n{message}") from exc

        site = api_request("GET", f"/sites/{site_id}", token)
        url = site.get("ssl_url") or site.get("url")
        print(f"Deploy created: {payload.get('id')}")
        print(f"Site URL: {url}")
    finally:
        try:
            zip_path.unlink(missing_ok=True)
        except TypeError:
            if zip_path.exists():
                zip_path.unlink()


if __name__ == "__main__":
    main()
