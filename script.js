const difficultyOrder = ["beginner", "medium", "hard", "master"];
const difficultyLabels = {
  beginner: "Beginner",
  medium: "Medium",
  hard: "Hard",
  master: "Master"
};

const categoryLabels = {
  all: "All",
  twisting: "Twisting",
  flipping: "Flipping",
  creative: "Creative"
};

const modeLabels = {
  gtramp: "G-Tramp",
  ground: "On Ground"
};

const progressionLabels = {
  fixed: "Stay On Selected Rank",
  cycle: "Cycle Beginner → Master"
};

const trickLibrary = [
  { id: "back-flip", name: "Back Flip", aliases: ["Back Tuck"], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "beginner" },
  { id: "front-flip", name: "Front Flip", aliases: ["Front Tuck"], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "beginner" },
  { id: "side-flip", name: "Side Flip", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "beginner" },
  { id: "aerial", name: "Aerial", aliases: ["Cartwheel Aerial"], modes: ["ground"], categories: ["flipping", "creative"], difficulty: "beginner" },
  { id: "webster", name: "Webster", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "beginner" },
  { id: "pop-360", name: "Pop 360", aliases: [], modes: ["ground"], categories: ["creative"], difficulty: "beginner" },
  { id: "rudy-x-dub-full", name: "rudy x dub full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "medium" },
  { id: "trip-full", name: "trip full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "dub-fullx2", name: "dub fullx2", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "brenna", name: "brenna", aliases: [], modes: ["ground", "gtramp"], categories: ["creative"], difficulty: "medium" },
  { id: "dub-ballout", name: "dub ballout", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "dub-back", name: "dub back", aliases: ["Double Back"], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "dub-front", name: "dub front", aliases: ["Double Front"], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "fliffus", name: "fliffus", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "randy", name: "randy", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "dub-kaboom", name: "dub kaboom", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "cody-fullx2", name: "cody fullx2", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "trip-cat-twist", name: "trip cat twist", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "creative"], difficulty: "medium" },
  { id: "benny", name: "benny", aliases: [], modes: ["ground", "gtramp"], categories: ["creative"], difficulty: "medium" },
  { id: "side-in", name: "side in", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "cody-x-4", name: "cody x 4", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "dub-lay", name: "dub lay", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "snapu", name: "snapu", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "full-down", name: "full down", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "medium" },
  { id: "side-full-down", name: "side full down", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "front-full", name: "front full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "front-full-down", name: "front full down", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "nike-dub-back", name: "nike dub back", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "dub-side", name: "dub side", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "dub-flat-spin", name: "dub flat spin", aliases: ["Dub Flatspin"], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "cork-x-cody-full", name: "cork x cody full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "creative"], difficulty: "medium" },
  { id: "dub-cody", name: "dub cody", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "standing-dub-back", name: "standing dub back", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "standing-dub-full", name: "standing dub full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "quint-full-in-dub", name: "quint full in dub", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "knee-dub-front", name: "knee dub front", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "dub-pull-over", name: "dub pull over", aliases: [], modes: ["ground", "gtramp"], categories: ["creative"], difficulty: "medium" },
  { id: "ballout-side-in-x-cody", name: "ballout side in x cody", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "1-2-in-back-flips", name: "1-2 in back flips", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "360-ballout", name: "360 ballout", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "double-log-roll", name: "double log roll", aliases: [], modes: ["ground", "gtramp"], categories: ["creative"], difficulty: "medium" },
  { id: "23-in-flips", name: "23 in flips", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "quint-cat-twist", name: "quint cat twist", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "creative"], difficulty: "hard" },
  { id: "333-in-fulls", name: "333 in fulls", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "dub-cork", name: "dub cork", aliases: ["Double Cork", "Dub Cork"], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "randy-quad-full", name: "randy quad full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "sanding-22-in-codies", name: "sanding 22 in codies", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "ballout-half-in-dub", name: "ballout half in dub", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "44-in-cat-twists", name: "44 in cat twists", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "creative"], difficulty: "hard" },
  { id: "rudy-in", name: "rudy in", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "hard" },
  { id: "dub-full-in", name: "dub full in", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "hard" },
  { id: "full-full-landed", name: "full full landed", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "trip-front-landed", name: "trip front landed", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "half-full", name: "half full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "trip-side", name: "trip side", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "j-step-dub-gainer", name: "j step dub gainer", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "dub-frisbee", name: "dub frisbee", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "knee-trip-front", name: "knee trip front", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "quad-full", name: "quad full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "tramp-kong-gainer", name: "tramp kong gainer", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "a-twist-in", name: "a twist in", aliases: [], modes: ["ground"], categories: ["twisting"], difficulty: "hard" },
  { id: "123-in-kabooms", name: "123 in kabooms", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "fliffus-x-dub-back", name: "fliffus x dub back", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "dub-10", name: "dub 10", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "full-1-5-x-dub-front-x-ballout-half-in-x-cody-full", name: "full 1.5 x dub front x ballout half in x cody full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "hard" },
  { id: "back-flip-x-front-flip-x-full-x-dub-back-x-trip-full", name: "back flip x front flip  x full x dub back x trip full", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "dub-back-x-quad-full", name: "dub back x quad full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "hard" },
  { id: "trip-back-x-dub-cody", name: "trip back x dub cody", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "dub-lay-x-full-in-x-trip-full", name: "dub lay x full in x trip full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "hard" },
  { id: "brenna-plus", name: "brenna+", aliases: ["brenna plus"], modes: ["ground", "gtramp"], categories: ["creative"], difficulty: "hard" },
  { id: "dub-snapu", name: "dub snapu", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "trip-back-x2", name: "trip back x2", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "full-in-dub", name: "full in dub", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "trip-cody", name: "trip cody", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "front-dub-full-x-randy", name: "front dub full x randy", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "quad-back", name: "quad back", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "quad-kaboom", name: "quad kaboom", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "1234-in-fulls", name: "1234 in fulls", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "half-full-x-full-full", name: "half full x full full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "quint-full", name: "quint full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "sextuple-cat-twist", name: "sextuple cat twist", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "creative"], difficulty: "master" },
  { id: "double-benny", name: "double benny", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "trip-ballout", name: "trip ballout", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "222-in-ballouts", name: "222 in ballouts", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "fliffus-in", name: "fliffus in", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "cork-in", name: "cork in", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "randy-in", name: "randy in", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "dub-back-x-full-in-x-dub-full-in", name: "dub back x full in x dub full in", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "trip-full-in", name: "trip full in", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "quad-front", name: "quad front", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "half-in-dub", name: "half in dub", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "standing-dub-back-x-quad-full", name: "standing dub back x quad full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "kaboom-dub-flatspin-in", name: "kaboom- dub flatspin in", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "fradolf", name: "fradolf", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "full-full-full", name: "full full full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "double-alien-full-down", name: "double alien full down", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "full-down-in", name: "full down in", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "triple-snapu", name: "triple snapu", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "cork-0", name: "cork 0", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "tramp-kong-gainer-full", name: "tramp kong gainer full", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "cody-full-in", name: "cody full in", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "triple-webster", name: "triple webster", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "coca-cola-in", name: "coca cola in", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "123-in-flips", name: "123 in flips", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "master" }
];

const state = {
  started: false,
  round: 1,
  difficultyIndex: 0,
  failCount: 0,
  currentTrick: null,
  done: false,
  mode: "gtramp",
  category: "all",
  progression: "fixed",
  startDifficultyIndex: 0,
  recentIds: []
};

const failWord = "FAIL";
const recentWindowSize = 10;

const roundValue = document.querySelector("#roundValue");
const rankValue = document.querySelector("#rankValue");
const modeValue = document.querySelector("#modeValue");
const failValue = document.querySelector("#failValue");
const trickName = document.querySelector("#trickName");
const trickMeta = document.querySelector("#trickMeta");
const trickAliases = document.querySelector("#trickAliases");
const feed = document.querySelector("#feed");
const modeHint = document.querySelector("#modeHint");

const modeSelect = document.querySelector("#modeSelect");
const categorySelect = document.querySelector("#categorySelect");
const rankSelect = document.querySelector("#rankSelect");
const progressionSelect = document.querySelector("#progressionSelect");

const startBtn = document.querySelector("#startBtn");
const successBtn = document.querySelector("#successBtn");
const failBtn = document.querySelector("#failBtn");
const setupBtn = document.querySelector("#setupBtn");
const rerollBtn = document.querySelector("#rerollBtn");

startBtn.addEventListener("click", startRun);
successBtn.addEventListener("click", () => resolveAttempt(true));
failBtn.addEventListener("click", () => resolveAttempt(false));
setupBtn.addEventListener("click", useSetupReroll);
rerollBtn.addEventListener("click", freeReroll);
modeSelect.addEventListener("change", handleModeChange);
categorySelect.addEventListener("change", updatePreviewMeta);
rankSelect.addEventListener("change", updatePreviewMeta);
progressionSelect.addEventListener("change", updatePreviewMeta);

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function addFeed(message) {
  const row = document.createElement("p");
  row.textContent = message;
  feed.prepend(row);
}

function setButtonsForRun(active) {
  successBtn.disabled = !active;
  failBtn.disabled = !active;
  setupBtn.disabled = !active;
  rerollBtn.disabled = !active;
}

function updateFailMeter() {
  const filled = failWord.slice(0, state.failCount).split("").join(" ");
  const empty = "_ ".repeat(Math.max(0, 4 - state.failCount)).trim();
  failValue.textContent = (filled + " " + empty).trim();
}

function updateStatusCards() {
  roundValue.textContent = state.round;
  rankValue.textContent = difficultyLabels[difficultyOrder[state.difficultyIndex]];
  modeValue.textContent = modeLabels[state.mode];
  updateFailMeter();
}

function animateTrickPanel() {
  trickName.classList.remove("flash");
  trickMeta.classList.remove("flash");
  trickAliases.classList.remove("flash");
  void trickName.offsetWidth;
  trickName.classList.add("flash");
  trickMeta.classList.add("flash");
  trickAliases.classList.add("flash");
}

function getSelectedConfig() {
  const mode = modeSelect.value;
  const category = mode === "ground" ? categorySelect.value : "all";
  const difficulty = rankSelect.value;
  const progression = progressionSelect.value;
  return { mode, category, difficulty, progression };
}

function handleModeChange() {
  const isGround = modeSelect.value === "ground";
  categorySelect.disabled = !isGround;
  if (!isGround) {
    categorySelect.value = "all";
  }
  updateModeHint();
  updatePreviewMeta();
}

function updateModeHint() {
  const progressionText = progressionSelect.value === "cycle"
    ? "Right now it will climb through the ranks."
    : "Right now it will stay locked to the rank you picked.";

  if (modeSelect.value === "gtramp") {
    modeHint.textContent = `G-Tramp mode pulls from the whole trampoline pool. ${progressionText}`;
    return;
  }

  modeHint.textContent = `On Ground mode unlocks Twisting / Flipping / Creative filtering. ${progressionText}`;
}

function getPool(mode, category, difficulty) {
  return trickLibrary.filter((trick) => {
    const modeOk = trick.modes.includes(mode);
    const difficultyOk = trick.difficulty === difficulty;
    const categoryOk = category === "all" || trick.categories.includes(category);
    return modeOk && difficultyOk && categoryOk;
  });
}

function updatePreviewMeta() {
  const { mode, category, difficulty, progression } = getSelectedConfig();
  const pool = getPool(mode, category, difficulty);
  const modeLabel = modeLabels[mode];
  const categoryLabel = mode === "ground" ? categoryLabels[category] : "Mixed";
  const difficultyLabel = difficultyLabels[difficulty];

  updateModeHint();

  if (state.started) {
    return;
  }

  trickName.textContent = "Press Start Run";
  trickMeta.textContent = `${modeLabel} • ${categoryLabel} • ${difficultyLabel} • ${progressionLabels[progression]} • ${pool.length} tricks in pool`;
  trickAliases.textContent = "Names + aliases will show here.";
}

function pickNextTrick() {
  const difficulty = difficultyOrder[state.difficultyIndex];
  const pool = getPool(state.mode, state.category, difficulty);

  if (!pool.length) {
    state.currentTrick = null;
    trickName.textContent = "No Tricks In Pool";
    trickMeta.textContent = "Try a different category or rank.";
    trickAliases.textContent = "This filter combo is empty right now.";
    return;
  }

  let candidatePool = pool.filter(
    (trick) => trick.id !== state.currentTrick?.id && !state.recentIds.includes(trick.id)
  );

  if (!candidatePool.length) {
    candidatePool = pool.filter((trick) => trick.id !== state.currentTrick?.id);
  }

  if (!candidatePool.length) {
    candidatePool = pool;
  }

  state.currentTrick = randomFrom(candidatePool);
  state.recentIds.unshift(state.currentTrick.id);
  state.recentIds = state.recentIds.slice(0, recentWindowSize);

  const categorySummary = state.currentTrick.categories.map((item) => categoryLabels[item]).join(" / ");
  const progressionSummary = progressionLabels[state.progression];
  trickName.textContent = state.currentTrick.name;
  trickMeta.textContent = `${modeLabels[state.mode]} • ${difficultyLabels[difficulty]} • ${categorySummary} • ${progressionSummary} • ${pool.length} tricks in pool`;
  trickAliases.textContent = state.currentTrick.aliases.length
    ? `Aliases: ${state.currentTrick.aliases.join(" • ")}`
    : "No common alias listed.";
  animateTrickPanel();
}

function startRun() {
  const config = getSelectedConfig();
  state.started = true;
  state.done = false;
  state.round = 1;
  state.failCount = 0;
  state.mode = config.mode;
  state.category = config.category;
  state.progression = config.progression;
  state.difficultyIndex = difficultyOrder.indexOf(config.difficulty);
  state.startDifficultyIndex = state.difficultyIndex;
  state.currentTrick = null;
  state.recentIds = [];

  updateStatusCards();
  setButtonsForRun(true);
  startBtn.textContent = "Restart Run";
  pickNextTrick();
  addFeed(
    `${modeLabels[state.mode]} run started at ${difficultyLabels[difficultyOrder[state.difficultyIndex]]} • ${progressionLabels[state.progression]}${state.mode === "ground" ? ` • ${categoryLabels[state.category]}` : ""}.`
  );
}

function advanceDifficulty() {
  if (state.progression === "fixed") {
    state.round += 1;
    addFeed(`Round ${state.round - 1} complete. Staying on ${difficultyLabels[difficultyOrder[state.difficultyIndex]]}.`);
    updateStatusCards();
    pickNextTrick();
    return;
  }

  state.difficultyIndex += 1;
  if (state.difficultyIndex >= difficultyOrder.length) {
    state.difficultyIndex = 0;
    state.round += 1;
    addFeed(`Round ${state.round - 1} complete. Cycling back to Beginner for round ${state.round}.`);
  }
  updateStatusCards();
  pickNextTrick();
}

function resolveAttempt(success) {
  if (!state.started || state.done || !state.currentTrick) {
    return;
  }

  if (success) {
    addFeed(`Success on ${state.currentTrick.name}. No letter earned.`);
    advanceDifficulty();
    return;
  }

  state.failCount += 1;
  updateFailMeter();
  const letter = failWord[state.failCount - 1];
  addFeed(`Fail on ${state.currentTrick.name}. You earned "${letter}".`);

  if (state.failCount >= failWord.length) {
    state.done = true;
    setButtonsForRun(false);
    trickName.textContent = "Run Over";
    trickMeta.textContent = `You spelled FAIL in round ${state.round}.`;
    trickAliases.textContent = "Press Restart Run to go again.";
    addFeed(`Game over in ${modeLabels[state.mode]} mode.`);
    return;
  }

  advanceDifficulty();
}

function useSetupReroll() {
  if (!state.started || state.done || !state.currentTrick) {
    return;
  }

  const previous = state.currentTrick.name;
  pickNextTrick();
  if (!state.currentTrick) {
    return;
  }
  addFeed(`No setup here for ${previous}. Swapped to ${state.currentTrick.name} with no penalty.`);
}

function freeReroll() {
  if (!state.started || state.done || !state.currentTrick) {
    return;
  }

  const previous = state.currentTrick.name;
  pickNextTrick();
  if (!state.currentTrick) {
    return;
  }
  addFeed(`Rerolled ${previous} → ${state.currentTrick.name}.`);
}

handleModeChange();
updateStatusCards();
addFeed("Press Start Run to generate your first trick.");
