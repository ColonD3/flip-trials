const tiers = [
  {
    name: "Beginner",
    tricks: [
      "Front Flip",
      "Back Flip",
      "Side Flip",
      "Cartwheel Aerial",
      "Dive Roll"
    ]
  },
  {
    name: "Medium",
    tricks: [
      "Front Half",
      "Back Full",
      "Arabian",
      "Cork Prep",
      "Side Flip 180"
    ]
  },
  {
    name: "Hard",
    tricks: [
      "Cork",
      "Gainer Full",
      "Back Double",
      "Full-In",
      "Arabian Double"
    ]
  },
  {
    name: "Master",
    tricks: [
      "trip back x2",
      "full in dub",
      "trip cody",
      "front dub full x randy",
      "quad back",
      "quad kaboom",
      "1234 in fulls",
      "half full x full full",
      "quint full",
      "sextuple cat twist",
      "double benny",
      "trip ballout",
      "222 in ballouts",
      "fliffus in",
      "cork in",
      "randy in",
      "dub back x full in x dub full in",
      "trip full in",
      "quad front",
      "half in dub",
      "standing dub back x quad full",
      "kaboom- dub flatspin in",
      "fradolf",
      "miller",
      "full full full",
      "double alien full down",
      "full down in",
      "triple snapu",
      "cork 0",
      "tramp kong gainer full",
      "cody full in",
      "triple webster",
      "coca cola in",
      "123 in flips"
    ]
  }
];

const state = {
  started: false,
  round: 1,
  tierIndex: 0,
  failCount: 0,
  trick: null,
  done: false
};

const failWord = "FAIL";

const roundValue = document.querySelector("#roundValue");
const tierValue = document.querySelector("#tierValue");
const failValue = document.querySelector("#failValue");
const trickName = document.querySelector("#trickName");
const trickMeta = document.querySelector("#trickMeta");
const feed = document.querySelector("#feed");

const startBtn = document.querySelector("#startBtn");
const successBtn = document.querySelector("#successBtn");
const failBtn = document.querySelector("#failBtn");
const rerollBtn = document.querySelector("#rerollBtn");

startBtn.addEventListener("click", startRun);
successBtn.addEventListener("click", () => resolveAttempt(true));
failBtn.addEventListener("click", () => resolveAttempt(false));
rerollBtn.addEventListener("click", rerollTrick);

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function setButtonsForRun(active) {
  successBtn.disabled = !active;
  failBtn.disabled = !active;
  rerollBtn.disabled = !active;
}

function updateFailMeter() {
  const filled = failWord.slice(0, state.failCount).split("").join(" ");
  const empty = "_ ".repeat(Math.max(0, 4 - state.failCount)).trim();
  failValue.textContent = (filled + " " + empty).trim();
}

function addFeed(message) {
  const row = document.createElement("p");
  row.textContent = message;
  feed.prepend(row);
}

function animateTrickPanel() {
  trickName.classList.remove("flash");
  trickMeta.classList.remove("flash");
  void trickName.offsetWidth;
  trickName.classList.add("flash");
  trickMeta.classList.add("flash");
}

function assignTrick() {
  const tier = tiers[state.tierIndex];
  state.trick = randomFrom(tier.tricks);
  tierValue.textContent = tier.name;
  trickName.textContent = state.trick;
  trickMeta.textContent = `Tier ${state.tierIndex + 1} of ${tiers.length}`;
  animateTrickPanel();
}

function startRun() {
  state.started = true;
  state.done = false;
  state.round = 1;
  state.tierIndex = 0;
  state.failCount = 0;
  roundValue.textContent = state.round;
  updateFailMeter();
  assignTrick();
  setButtonsForRun(true);
  startBtn.textContent = "Restart Run";
  addFeed("Run started. Hit every tier and avoid spelling FAIL.");
}

function advanceTier() {
  state.tierIndex += 1;

  if (state.tierIndex >= tiers.length) {
    state.round += 1;
    state.tierIndex = 0;
    roundValue.textContent = state.round;
    addFeed(`Round ${state.round - 1} complete. Entering round ${state.round}.`);
  }

  assignTrick();
}

function resolveAttempt(success) {
  if (!state.started || state.done) {
    return;
  }

  if (success) {
    addFeed(`Success on ${state.trick}. No letter earned.`);
  } else {
    state.failCount += 1;
    updateFailMeter();
    const letter = failWord[state.failCount - 1];
    addFeed(`Fail on ${state.trick}. You earned "${letter}".`);

    if (state.failCount >= failWord.length) {
      state.done = true;
      setButtonsForRun(false);
      trickName.textContent = "Run Over";
      trickMeta.textContent = "You spelled FAIL. Press Restart Run to go again.";
      addFeed(`Game over at round ${state.round}, ${tiers[state.tierIndex].name}.`);
      return;
    }
  }

  advanceTier();
}

function rerollTrick() {
  if (!state.started || state.done) {
    return;
  }

  const tier = tiers[state.tierIndex];
  const previous = state.trick;

  if (tier.tricks.length < 2) {
    return;
  }

  while (state.trick === previous) {
    state.trick = randomFrom(tier.tricks);
  }

  trickName.textContent = state.trick;
  trickMeta.textContent = `${tier.name} reroll`;
  animateTrickPanel();
  addFeed(`Rerolled: ${previous} -> ${state.trick}`);
}

updateFailMeter();
addFeed("Press Start Run to generate your first trick.");
