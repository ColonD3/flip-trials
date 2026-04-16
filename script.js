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
  { id: "barani", name: "Barani", aliases: ["Front Half"], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "medium" },
  { id: "arabian", name: "Arabian", aliases: ["Half-In"], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "medium" },
  { id: "back-full", name: "Back Full", aliases: ["Full", "A Full"], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "front-full", name: "Front Full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "medium" },
  { id: "gainer", name: "Gainer", aliases: ["Cheat Gainer", "Slant Gainer"], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "medium" },
  { id: "btwist", name: "B-Twist", aliases: ["Butterfly Twist"], modes: ["ground"], categories: ["twisting", "creative"], difficulty: "medium" },
  { id: "raiz", name: "Raiz", aliases: [], modes: ["ground"], categories: ["creative"], difficulty: "medium" },
  { id: "scoot-full", name: "Scoot Full", aliases: [], modes: ["ground"], categories: ["twisting", "creative"], difficulty: "medium" },
  { id: "cart-full", name: "Cart Full", aliases: ["Aerial Full"], modes: ["ground"], categories: ["twisting", "creative"], difficulty: "medium" },
  { id: "cody", name: "Cody", aliases: ["Cody Out"], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "seat-drop-back", name: "Seat Drop Backflip", aliases: ["Seat Drop Back Out"], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "front-drop-back", name: "Front Drop Back Out", aliases: ["Stomach Drop Back Out"], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "back-drop-back", name: "Back Drop Back Out", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "crash-dive", name: "Crash Dive", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "medium" },
  { id: "rudy", name: "Rudy", aliases: ["Front 1½"], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "double-full", name: "Double Full", aliases: ["Back Double Full"], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "gainer-flash", name: "Gainer Flash", aliases: ["Flash Kick"], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "gainer-full", name: "Gainer Full", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "cork", name: "Cork", aliases: ["Corkscrew"], modes: ["ground", "gtramp"], categories: ["twisting"], difficulty: "hard" },
  { id: "td-raiz", name: "Touchdown Raiz", aliases: ["TD Raiz"], modes: ["ground"], categories: ["creative"], difficulty: "hard" },
  { id: "palm-flip", name: "Palm Flip", aliases: [], modes: ["ground"], categories: ["creative"], difficulty: "hard" },
  { id: "cheat-720", name: "Cheat 720", aliases: ["Cheat 7"], modes: ["ground"], categories: ["creative", "twisting"], difficulty: "hard" },
  { id: "wrap-full", name: "Wrap Full", aliases: ["Tak Full"], modes: ["ground"], categories: ["twisting", "creative"], difficulty: "hard" },
  { id: "kaboom", name: "Kaboom", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "ball-out", name: "Ball Out", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "seat-drop-front", name: "Seat Drop Frontflip", aliases: ["Seat Drop Front Out"], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "double-back", name: "Double Back", aliases: [], modes: ["ground", "gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "double-front", name: "Double Front", aliases: [], modes: ["gtramp"], categories: ["flipping"], difficulty: "hard" },
  { id: "full-in", name: "Full-In", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "hard" },
  { id: "full-out", name: "Full-Out", aliases: [], modes: ["ground", "gtramp"], categories: ["twisting", "flipping"], difficulty: "hard" },
  { id: "back-xout", name: "Back X-Out", aliases: [], modes: ["ground", "gtramp"], categories: ["creative", "flipping"], difficulty: "hard" },
  { id: "trip-back-x2", name: "trip back x2", aliases: [], modes: ["gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "full-in-dub", name: "full in dub", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "trip-cody", name: "trip cody", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "front-dub-full-x-randy", name: "front dub full x randy", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "quad-back", name: "quad back", aliases: [], modes: ["gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "quad-kaboom", name: "quad kaboom", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "1234-in-fulls", name: "1234 in fulls", aliases: [], modes: ["gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "half-full-x-full-full", name: "half full x full full", aliases: [], modes: ["gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "quint-full", name: "quint full", aliases: [], modes: ["gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "sextuple-cat-twist", name: "sextuple cat twist", aliases: [], modes: ["gtramp"], categories: ["twisting", "creative"], difficulty: "master" },
  { id: "double-benny", name: "double benny", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "trip-ballout", name: "trip ballout", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "222-in-ballouts", name: "222 in ballouts", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "fliffus-in", name: "fliffus in", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "cork-in", name: "cork in", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "randy-in", name: "randy in", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "dub-back-x-full-in-x-dub-full-in", name: "dub back x full in x dub full in", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "trip-full-in", name: "trip full in", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "quad-front", name: "quad front", aliases: [], modes: ["gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "half-in-dub", name: "half in dub", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "standing-dub-back-x-quad-full", name: "standing dub back x quad full", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "kaboom-dub-flatspin-in", name: "kaboom- dub flatspin in", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "fradolf", name: "fradolf", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "full-full-full", name: "full full full", aliases: [], modes: ["gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "double-alien-full-down", name: "double alien full down", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "full-down-in", name: "full down in", aliases: [], modes: ["gtramp"], categories: ["twisting", "flipping"], difficulty: "master" },
  { id: "triple-snapu", name: "triple snapu", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "cork-0", name: "cork 0", aliases: [], modes: ["gtramp"], categories: ["twisting"], difficulty: "master" },
  { id: "tramp-kong-gainer-full", name: "tramp kong gainer full", aliases: [], modes: ["gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "cody-full-in", name: "cody full in", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "triple-webster", name: "triple webster", aliases: [], modes: ["gtramp"], categories: ["flipping"], difficulty: "master" },
  { id: "coca-cola-in", name: "coca cola in", aliases: [], modes: ["gtramp"], categories: ["creative", "flipping"], difficulty: "master" },
  { id: "123-in-flips", name: "123 in flips", aliases: [], modes: ["gtramp"], categories: ["flipping"], difficulty: "master" }
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
