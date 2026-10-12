/**
 * Tarazu - The Traditional Indian Balance Scale Game (Classes 1-3)
 * Bilingual (EN, HI, MR) with Web Speech API audio narration,
 * Web Audio API procedural sound effects, SVG + Spring physics,
 * and tablet/phone touch drag-and-drop.
 */

// -------------------------------------------------------------
// 1. LOCALIZATION & TRANSLATIONS
// -------------------------------------------------------------
const I18N = {
  en: {
    menu: "Menu",
    level: "Level",
    sandbox: "Free Play",
    levels_mode: "Levels",
    reset: "Reset",
    tray_title: "Pick & Drag Weights:",
    tray_hint: "(Tap or drag weights to pans)",
    win_title: "Shabaash! Perfect Balance!",
    win_desc: "Both sides are equal!",
    replay: "Again",
    next: "Next Level",
    choose_level: "Choose a Level",
    stage_1: "Basic (1-5 kg)",
    stage_2: "Bazaar Produce",
    stage_3: "Mystery Box ❓",
    stage_4: "Two Ways 🌟",
    way_1: "Way 1",
    way_2: "Way 2",
    way_1_done: "Great! Now find another way to balance it!",
    level_hint_default: "Add weights to balance both pans!",
    tilted_left: "Left side is heavier! Add more to the right.",
    tilted_right: "Right side is heavier! Left side is lighter.",
    balanced_msg: "Wah! Both sides are equal!",
    mystery_revealed: "Mystery weight discovered: {val} kg!",
    welcome_speech: "Welcome to Tarazu! Drag weights to make the scale level.",
    tts_lang: "en-IN"
  },
  hi: {
    menu: "मेन्यू",
    level: "स्तर",
    sandbox: "मुक्त खेल",
    levels_mode: "लेवल",
    reset: "रीसेट",
    tray_title: "बाट चुनो और रखो:",
    tray_hint: "(पलड़े पर खींचें या छुएं)",
    win_title: "शाबाश! बिल्कुल बराबर!",
    win_desc: "दोनों पलड़े एक समान हैं!",
    replay: "फिर से",
    next: "अगला स्तर",
    choose_level: "स्तर चुनें",
    stage_1: "सरल (1-5 किग्रा)",
    stage_2: "बाज़ार की सब्ज़ी",
    stage_3: "जादुई डिब्बा ❓",
    stage_4: "दो तरीके 🌟",
    way_1: "तरीका 1",
    way_2: "तरीका 2",
    way_1_done: "वाह! अब दूसरा तरीका ढूँढो!",
    level_hint_default: "तराजू को बराबर करने के लिए बाट रखो!",
    tilted_left: "बायां पलड़ा भारी है! दाएं पलड़े में और वजन रखो।",
    tilted_right: "दायां पलड़ा भारी है! वजन कम करो।",
    balanced_msg: "वाह! दोनों तरफ बिल्कुल बराबर है!",
    mystery_revealed: "जादुई डिब्बे का वजन मिला: {val} किग्रा!",
    welcome_speech: "तराजू के खेल में स्वागत है! दोनों पलड़ों को बराबर करो।",
    tts_lang: "hi-IN"
  },
  mr: {
    menu: "मेनू",
    level: "पातळी",
    sandbox: "मुक्त खेळ",
    levels_mode: "पातळ्या",
    reset: "रीसेट",
    tray_title: "वजने निवडा आणि ठेवा:",
    tray_hint: "(पारड्यात ओढा किंवा टॅप करा)",
    win_title: "शाब्बास! अगदी बरोबर!",
    win_desc: "दोन्ही बाजू समान झाल्या!",
    replay: "पुन्हा करा",
    next: "पुढील पातळी",
    choose_level: "पातळी निवडा",
    stage_1: "सोपे (1-5 किलो)",
    stage_2: "बाजारातील भाजी",
    stage_3: "गूढ डबा ❓",
    stage_4: "दोन पद्धती 🌟",
    way_1: "पद्धत 1",
    way_2: "पद्धत 2",
    way_1_done: "छान! आता दुसरी पद्धत शोधून दाखवा!",
    level_hint_default: "तराजू संतुलित करण्यासाठी वजने ठेवा!",
    tilted_left: "डावे पारडे जड आहे! उजवीकडे वजन वाढवा.",
    tilted_right: "उजवे पारडे जड आहे! डावे पारडे हलके आहे.",
    balanced_msg: "छान! दोन्ही पारडी अगदी समसमान झाली!",
    mystery_revealed: "गूढ डब्याचे वजन सापडले: {val} किलो!",
    welcome_speech: "तराजूच्या खेळात स्वागत आहे! दोन्ही पारडी समान करा.",
    tts_lang: "mr-IN"
  }
};

let currentLang = 'en';

// -------------------------------------------------------------
// 2. AUDIO SYNTHESIS (Web Audio API procedural sound)
// -------------------------------------------------------------
class AudioController {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClink() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, t);
    osc.frequency.exponentialRampToValueAtTime(700, t + 0.12);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.15);
  }

  playWobble() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(240, t);
    osc.frequency.linearRampToValueAtTime(210, t + 0.15);
    osc.frequency.linearRampToValueAtTime(250, t + 0.3);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.35);
  }

  playWin() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    // Cheerful Indian pentatonic / bell sequence: Sa Re Ga Pa Dha Sa
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const t = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.12);

      gain.gain.setValueAtTime(0, t + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.3, t + idx * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.12 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * 0.12);
      osc.stop(t + idx * 0.12 + 0.35);
    });
  }

  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.08);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.09);
  }
}

const audio = new AudioController();

// -------------------------------------------------------------
// 3. VOICE ENGINE (Web Speech API)
// -------------------------------------------------------------
class SpeechController {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voiceMap = {};
    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    this.voiceMap = {
      'en': voices.find(v => v.lang.startsWith('en-IN')) || voices.find(v => v.lang.startsWith('en')),
      'hi': voices.find(v => v.lang.startsWith('hi')) || voices.find(v => v.lang.includes('India')),
      'mr': voices.find(v => v.lang.startsWith('mr')) || voices.find(v => v.lang.startsWith('hi'))
    };
  }

  speak(text) {
    if (!this.synth || !audio.soundEnabled) return;
    try {
      this.synth.cancel(); // stop previous speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // gentle and clear for children
      utterance.pitch = 1.1; // friendly tone

      const selectedVoice = this.voiceMap[currentLang];
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      utterance.lang = I18N[currentLang].tts_lang;

      // Animate mascot while speaking
      const mascot = document.getElementById('mascot-avatar');
      if (mascot) {
        mascot.style.transform = 'scale(1.2) rotate(-5deg)';
        utterance.onend = () => {
          mascot.style.transform = '';
        };
      }

      this.synth.speak(utterance);
    } catch (e) {
      console.log('Speech error fallback:', e);
    }
  }
}

const voice = new SpeechController();

// -------------------------------------------------------------
// 4. LEVEL DEFINITIONS
// -------------------------------------------------------------
const LEVELS = [
  // Stage 1: Basic Balance (1-5 kg)
  {
    id: 1,
    stage: 1,
    title: "1 vs 1 Matching",
    promptEn: "Make the scale level! Put 2 kg on the right.",
    promptHi: "तराजू बराबर करो! दाएं पलड़े पर 2 किग्रा रखो।",
    promptMr: "तराजू समान करा! उजव्या बाजूला 2 किलो ठेवा.",
    leftItems: [{ type: 'batta', weight: 2, label: '2 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' }
    ],
    targetWeight: 2,
    mode: 'single'
  },
  {
    id: 2,
    stage: 1,
    title: "Adding up to 3 kg",
    promptEn: "Left has 3 kg. Combine 1 kg and 2 kg on the right!",
    promptHi: "बाएं 3 किग्रा है। दाएं 1 और 2 किग्रा जोड़ो!",
    promptMr: "डावीकडे 3 किलो आहे. उजवीकडे 1 आणि 2 किलो ठेवा!",
    leftItems: [{ type: 'batta', weight: 3, label: '3 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 2, label: '2 kg' }
    ],
    targetWeight: 3,
    mode: 'single'
  },
  {
    id: 3,
    stage: 1,
    title: "Make 4 kg",
    promptEn: "Balance 4 kg using any combination!",
    promptHi: "4 किग्रा का संतुलन बनाओ!",
    promptMr: "4 किलो वजनाचे संतुलन करा!",
    leftItems: [{ type: 'batta', weight: 4, label: '4 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' }
    ],
    targetWeight: 4,
    mode: 'single'
  },
  {
    id: 4,
    stage: 1,
    title: "Balance 5 kg",
    promptEn: "Left has 5 kg. Drag weights to balance!",
    promptHi: "बाएं 5 किग्रा है। पलड़े को बराबर करो!",
    promptMr: "डावीकडे 5 किलो आहे. उजवीकडे योग्य वजने ठेवा!",
    leftItems: [{ type: 'batta', weight: 5, label: '5 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' }
    ],
    targetWeight: 5,
    mode: 'single'
  },

  // Stage 2: Bazaar Items (Produce & Vegetables)
  {
    id: 5,
    stage: 2,
    title: "Fresh Coconut (2 kg)",
    promptEn: "Weigh the coconut! It is 2 kg.",
    promptHi: "नारियल को तोलो! यह 2 किग्रा का है।",
    promptMr: "नारळाचे वजन करा! तो 2 किलोचा आहे.",
    leftItems: [{ type: 'produce', weight: 2, emoji: '🥥', label: '2 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' }
    ],
    targetWeight: 2,
    mode: 'single'
  },
  {
    id: 6,
    stage: 2,
    title: "Sweet Mango Basket (3 kg)",
    promptEn: "Weigh the sweet mangoes! Balance with weights.",
    promptHi: "मीठे आम की टोकरी तोलो! 3 किग्रा बराबर करो।",
    promptMr: "आंब्यांची टोपली तोकडा! 3 किलो वजन बरोबर करा.",
    leftItems: [{ type: 'produce', weight: 3, emoji: '🥭', label: '3 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' }
    ],
    targetWeight: 3,
    mode: 'single'
  },
  {
    id: 7,
    stage: 2,
    title: "Big Pumpkin (4 kg)",
    promptEn: "Big Pumpkin on scale! Find the right weights.",
    promptHi: "बड़ा कद्दू! सही बाट रखकर बराबर करो।",
    promptMr: "मोठा भोपळा! योग्य वजने ठेवून समसमान करा.",
    leftItems: [{ type: 'produce', weight: 4, emoji: '🎃', label: '4 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' }
    ],
    targetWeight: 4,
    mode: 'single'
  },
  {
    id: 8,
    stage: 2,
    title: "Juicy Watermelon (5 kg)",
    promptEn: "Watermelon is 5 kg! Balance with weights.",
    promptHi: "तरबूज 5 किग्रा का है! बाट से तोलो।",
    promptMr: "कलिंगड 5 किलोचे आहे! वजने लावून तोकडा.",
    leftItems: [{ type: 'produce', weight: 5, emoji: '🍉', label: '5 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' }
    ],
    targetWeight: 5,
    mode: 'single'
  },

  // Stage 3: Mystery Box (Missing-weight puzzle / Early Algebra)
  {
    id: 9,
    stage: 3,
    title: "Mystery Box 1",
    promptEn: "What is inside the Mystery Box? Right has 3 kg!",
    promptHi: "जादुई डिब्बे में कितना वजन है? दाएं 3 किग्रा है!",
    promptMr: "गूढ डब्यात किती वजन आहे? उजवीकडे 3 किलो आहे!",
    leftItems: [{ type: 'mystery', weight: 3, label: '?' }],
    rightItems: [{ type: 'batta', weight: 3, label: '3 kg' }],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' }
    ],
    targetWeight: 3,
    mysteryWeight: 3,
    mode: 'mystery_discovery'
  },
  {
    id: 10,
    stage: 3,
    title: "Mystery Box + 1 kg = 4 kg",
    promptEn: "Mystery Box + 1 kg = 4 kg. How heavy is the Box?",
    promptHi: "जादुई डिब्बा + 1 किग्रा = 4 किग्रा। डिब्बा कितने का है?",
    promptMr: "गूढ डबा + 1 किलो = 4 किलो. डब्याचे वजन किती?",
    leftItems: [
      { type: 'mystery', weight: 3, label: '?' },
      { type: 'batta', weight: 1, label: '1 kg' }
    ],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' }
    ],
    targetWeight: 4,
    mysteryWeight: 3,
    mode: 'single'
  },
  {
    id: 11,
    stage: 3,
    title: "Mystery Pot + 2 kg = 6 kg",
    promptEn: "Mystery Gift + 2 kg balances with 6 kg!",
    promptHi: "जादुई उपहार + 2 किग्रा, 6 किग्रा के बराबर है!",
    promptMr: "गूढ भेट + 2 किलो, 6 किलो बरोबर संतुलित करा!",
    leftItems: [
      { type: 'mystery', weight: 4, label: '?' },
      { type: 'batta', weight: 2, label: '2 kg' }
    ],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' },
      { type: 'batta', weight: 6, label: '6 kg' }
    ],
    targetWeight: 6,
    mysteryWeight: 4,
    mode: 'single'
  },

  // Stage 4: Two Different Ways to Balance Challenge
  {
    id: 12,
    stage: 4,
    title: "Two Ways to Make 5 kg",
    promptEn: "Find TWO DIFFERENT WAYS to balance 5 kg!",
    promptHi: "5 किग्रा को संतुलित करने के 2 अलग तरीके खोजो!",
    promptMr: "5 किलो संतुलित करण्याचे 2 वेगळे मार्ग शोधा!",
    leftItems: [{ type: 'batta', weight: 5, label: '5 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' }
    ],
    targetWeight: 5,
    mode: 'two_ways'
  },
  {
    id: 13,
    stage: 4,
    title: "Two Ways to Make 6 kg",
    promptEn: "Balance 6 kg in two different ways!",
    promptHi: "6 किग्रा को संतुलित करने के 2 अलग तरीके खोजो!",
    promptMr: "6 किलो संतुलित करण्याचे 2 वेगळे मार्ग शोधा!",
    leftItems: [{ type: 'batta', weight: 6, label: '6 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' },
      { type: 'batta', weight: 5, label: '5 kg' }
    ],
    targetWeight: 6,
    mode: 'two_ways'
  }
];

// -------------------------------------------------------------
// 5. GAME STATE
// -------------------------------------------------------------
const state = {
  currentLevelIndex: 0,
  isSandbox: false,
  completedLevels: {}, // { levelId: stars }
  leftPan: [],
  rightPan: [],
  tray: [],
  twoWaysHistory: [], // stores sets of weights used for multi-way puzzle
  currentAngle: 0,
  targetAngle: 0,
  isSettled: true,
  checkTimeout: null
};

// -------------------------------------------------------------
// 6. DOM ELEMENTS
// -------------------------------------------------------------
const dom = {
  levelNumber: document.getElementById('level-number'),
  speechText: document.getElementById('speech-text'),
  btnSpeak: document.getElementById('btn-speak'),
  btnHome: document.getElementById('btn-home'),
  btnSound: document.getElementById('btn-sound'),
  soundIcon: document.getElementById('sound-icon'),
  btnReset: document.getElementById('btn-reset'),
  btnModeToggle: document.getElementById('btn-mode-toggle'),
  modeText: document.getElementById('mode-text'),
  challengeStatus: document.getElementById('challenge-status'),
  way1Badge: document.getElementById('way-1-badge'),
  way2Badge: document.getElementById('way-2-badge'),
  hintText: document.getElementById('hint-text'),
  needleHintIcon: document.getElementById('needle-hint-icon'),
  beamGroup: document.getElementById('beam-group'),
  leftPanGroup: document.getElementById('left-pan-group'),
  rightPanGroup: document.getElementById('right-pan-group'),
  leftPanOverlay: document.getElementById('pan-overlay-left'),
  rightPanOverlay: document.getElementById('pan-overlay-right'),
  leftPanItems: document.getElementById('left-pan-items'),
  rightPanItems: document.getElementById('right-pan-items'),
  leftWeightBadge: document.getElementById('left-weight-badge'),
  rightWeightBadge: document.getElementById('right-weight-badge'),
  weightsTray: document.getElementById('weights-tray'),
  balanceGlowIndicator: document.getElementById('balance-glow-indicator'),
  balanceEmoji: document.getElementById('balance-emoji'),
  modalCelebration: document.getElementById('modal-celebration'),
  modalLevels: document.getElementById('modal-levels'),
  btnCloseLevels: document.getElementById('btn-close-levels'),
  levelsGrid: document.getElementById('levels-grid'),
  btnReplayLevel: document.getElementById('btn-replay-level'),
  btnNextLevel: document.getElementById('btn-next-level'),
  winEquation: document.getElementById('win-equation'),
  confettiContainer: document.getElementById('confetti-container')
};

// -------------------------------------------------------------
// 7. INITIALIZATION & EVENT LISTENERS
// -------------------------------------------------------------
function initGame() {
  loadProgress();
  setupLanguageButtons();
  setupHeaderEvents();
  setupModalEvents();
  setupPanDropZones();
  setupPointerTouchDrag();

  // Start with Level 1
  loadLevel(0);

  // Start smooth physics rendering loop
  requestAnimationFrame(physicsLoop);

  // Initial welcome greeting
  setTimeout(() => {
    updateMascotSpeech(I18N[currentLang].welcome_speech);
  }, 400);
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('tarazu_progress');
    if (saved) {
      state.completedLevels = JSON.parse(saved);
    }
  } catch (e) {
    state.completedLevels = {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem('tarazu_progress', JSON.stringify(state.completedLevels));
  } catch (e) {}
}

// -------------------------------------------------------------
// 8. LANGUAGE & LOCALIZATION
// -------------------------------------------------------------
function setupLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.dataset.lang;
      applyLanguage();
    });
  });
}

function applyLanguage() {
  const dict = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Refresh current level texts
  if (state.isSandbox) {
    updateMascotSpeech(dict.sandbox);
  } else {
    const level = LEVELS[state.currentLevelIndex];
    const prompt = currentLang === 'hi' ? level.promptHi : (currentLang === 'mr' ? level.promptMr : level.promptEn);
    updateMascotSpeech(prompt);
  }

  renderLevelsGrid();
}

function updateMascotSpeech(text, autoSpeak = true) {
  dom.speechText.textContent = text;
  if (autoSpeak) {
    voice.speak(text);
  }
}

// -------------------------------------------------------------
// 9. HEADER & MODAL CONTROLS
// -------------------------------------------------------------
function setupHeaderEvents() {
  dom.btnSpeak.addEventListener('click', () => {
    audio.playPop();
    voice.speak(dom.speechText.textContent);
  });

  dom.btnSound.addEventListener('click', () => {
    audio.soundEnabled = !audio.soundEnabled;
    dom.soundIcon.textContent = audio.soundEnabled ? '🔔' : '🔕';
    audio.playPop();
  });

  dom.btnHome.addEventListener('click', () => {
    audio.playPop();
    openLevelsModal();
  });

  dom.btnModeToggle.addEventListener('click', () => {
    audio.playPop();
    toggleSandboxMode();
  });

  dom.btnReset.addEventListener('click', () => {
    audio.playPop();
    resetCurrentLevel();
  });
}

function setupModalEvents() {
  dom.btnCloseLevels.addEventListener('click', () => {
    audio.playPop();
    dom.modalLevels.classList.add('hidden');
  });

  dom.btnReplayLevel.addEventListener('click', () => {
    audio.playPop();
    dom.modalCelebration.classList.add('hidden');
    resetCurrentLevel();
  });

  dom.btnNextLevel.addEventListener('click', () => {
    audio.playPop();
    dom.modalCelebration.classList.add('hidden');
    if (state.currentLevelIndex < LEVELS.length - 1) {
      loadLevel(state.currentLevelIndex + 1);
    } else {
      toggleSandboxMode();
    }
  });

  // Stage tab buttons in levels modal
  document.querySelectorAll('.stage-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.stage-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderLevelsGrid(parseInt(tab.dataset.stage, 10));
    });
  });
}

function openLevelsModal() {
  renderLevelsGrid(1);
  dom.modalLevels.classList.remove('hidden');
}

function renderLevelsGrid(filterStage = 1) {
  dom.levelsGrid.innerHTML = '';
  LEVELS.forEach((lvl, idx) => {
    if (filterStage && lvl.stage !== filterStage) return;

    const btn = document.createElement('button');
    btn.className = 'level-select-btn';
    const stars = state.completedLevels[lvl.id] || 0;

    let starStr = '☆☆☆';
    if (stars === 3) starStr = '⭐⭐⭐';
    else if (stars === 2) starStr = '⭐⭐☆';
    else if (stars === 1) starStr = '⭐☆☆';

    btn.innerHTML = `
      <span class="level-btn-num">${lvl.id}</span>
      <span class="level-btn-stars">${starStr}</span>
    `;

    btn.addEventListener('click', () => {
      audio.playPop();
      dom.modalLevels.classList.add('hidden');
      state.isSandbox = false;
      loadLevel(idx);
    });

    dom.levelsGrid.appendChild(btn);
  });
}

function toggleSandboxMode() {
  state.isSandbox = !state.isSandbox;
  if (state.isSandbox) {
    dom.modeText.textContent = I18N[currentLang].levels_mode;
    dom.levelNumber.textContent = "∞";
    dom.challengeStatus.classList.add('hidden');
    updateMascotSpeech(currentLang === 'hi' ? "मुक्त खेल: अपनी मर्ज़ी से कोई भी बाट रखो!" : (currentLang === 'mr' ? "मुक्त खेळ: आपल्या आवडीनुसार वजने ठेवा!" : "Free Play: Place any weights to explore balance!"));

    // Sandbox starter items
    state.leftPan = [];
    state.rightPan = [];
    state.tray = [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' },
      { type: 'batta', weight: 5, label: '5 kg' },
      { type: 'produce', weight: 2, emoji: '🥥', label: '2 kg' },
      { type: 'produce', weight: 5, emoji: '🍉', label: '5 kg' }
    ];
    renderAllItems();
  } else {
    dom.modeText.textContent = I18N[currentLang].sandbox;
    loadLevel(state.currentLevelIndex);
  }
}

// -------------------------------------------------------------
// 10. LEVEL LOADING & RESET
// -------------------------------------------------------------
function loadLevel(index) {
  state.currentLevelIndex = index;
  state.isSandbox = false;
  state.twoWaysHistory = [];
  dom.modeText.textContent = I18N[currentLang].sandbox;

  const level = LEVELS[index];
  dom.levelNumber.textContent = level.id;

  // Deep clone level items
  state.leftPan = JSON.parse(JSON.stringify(level.leftItems));
  state.rightPan = JSON.parse(JSON.stringify(level.rightItems));
  state.tray = JSON.parse(JSON.stringify(level.trayItems));

  // Configure Challenge Badge for "Two Ways" mode
  if (level.mode === 'two_ways') {
    dom.challengeStatus.classList.remove('hidden');
    dom.way1Badge.className = 'challenge-badge active';
    dom.way1Badge.textContent = `${I18N[currentLang].way_1}: ⏳`;
    dom.way2Badge.className = 'challenge-badge';
    dom.way2Badge.textContent = `${I18N[currentLang].way_2}: ❓`;
  } else {
    dom.challengeStatus.classList.add('hidden');
  }

  const prompt = currentLang === 'hi' ? level.promptHi : (currentLang === 'mr' ? level.promptMr : level.promptEn);
  updateMascotSpeech(prompt);

  renderAllItems();
  recalculateBalance();
}

function resetCurrentLevel() {
  if (state.isSandbox) {
    state.leftPan = [];
    state.rightPan = [];
    renderAllItems();
    recalculateBalance();
    return;
  }
  const level = LEVELS[state.currentLevelIndex];
  state.leftPan = JSON.parse(JSON.stringify(level.leftItems));
  state.rightPan = JSON.parse(JSON.stringify(level.rightItems));
  state.tray = JSON.parse(JSON.stringify(level.trayItems));
  renderAllItems();
  recalculateBalance();
}

// -------------------------------------------------------------
// 11. ITEM RENDERING & CREATION
// -------------------------------------------------------------
function renderAllItems() {
  renderPan(dom.leftPanItems, state.leftPan, 'left');
  renderPan(dom.rightPanItems, state.rightPan, 'right');
  renderTray();
}

function renderPan(container, items, panSide) {
  container.innerHTML = '';
  items.forEach((item, index) => {
    const el = createItemElement(item, panSide, index);
    container.appendChild(el);
  });
}

function renderTray() {
  dom.weightsTray.innerHTML = '';
  state.tray.forEach((item, index) => {
    const el = createItemElement(item, 'tray', index);
    dom.weightsTray.appendChild(el);
  });
}

function createItemElement(item, location, index) {
  const el = document.createElement('div');
  el.className = `weight-token weight-${item.weight}kg`;
  el.dataset.location = location;
  el.dataset.index = index;
  el.dataset.weight = item.weight;

  if (item.type === 'batta') {
    el.classList.add('weight-batta');
    let dotsHtml = '';
    // Show counting dots for Class 1-2 kids
    if (item.weight <= 5) {
      dotsHtml = `<div class="dots-container">${Array(item.weight).fill('<span class="dot-counter"></span>').join('')}</div>`;
    }
    el.innerHTML = `
      <span class="weight-label">${item.label || item.weight + ' kg'}</span>
      ${dotsHtml}
    `;
  } else if (item.type === 'produce') {
    el.classList.add('produce-item');
    el.innerHTML = `
      <span class="produce-emoji">${item.emoji}</span>
      <span class="weight-label">${item.label || item.weight + ' kg'}</span>
    `;
  } else if (item.type === 'mystery') {
    el.classList.add('mystery-box');
    el.innerHTML = `
      <span class="mystery-q">?</span>
      <span class="weight-label">${item.revealed ? item.weight + ' kg' : 'Box'}</span>
    `;
  }

  // Tap-to-move feature for young kids
  el.addEventListener('click', (e) => {
    // If not dragging, handle tap to transfer
    if (!el.classList.contains('was-dragged')) {
      handleItemTap(location, index);
    }
    el.classList.remove('was-dragged');
  });

  return el;
}

function handleItemTap(location, index) {
  audio.playPop();
  if (location === 'tray') {
    // Tapping tray item: move to right pan (or left pan if right is full)
    const item = state.tray.splice(index, 1)[0];
    state.rightPan.push(item);
  } else if (location === 'left') {
    // Tapping left pan item: return to tray (only if allowed by level)
    const level = LEVELS[state.currentLevelIndex];
    if (!state.isSandbox && level && level.leftItems && level.leftItems[index] && level.leftItems.length > 0 && level.mode !== 'sandbox') {
      // Gentle wobble feedback if trying to remove locked puzzle weight
      triggerWobble();
      return;
    }
    const item = state.leftPan.splice(index, 1)[0];
    state.tray.push(item);
  } else if (location === 'right') {
    // Tapping right pan item: return to tray
    const item = state.rightPan.splice(index, 1)[0];
    state.tray.push(item);
  }

  audio.playClink();
  renderAllItems();
  recalculateBalance();
}

// -------------------------------------------------------------
// 12. DRAG AND DROP WITH POINTER EVENTS (Touch & Mouse)
// -------------------------------------------------------------
let activeDrag = null;

function setupPointerTouchDrag() {
  document.addEventListener('pointerdown', (e) => {
    const token = e.target.closest('.weight-token');
    if (!token) return;

    // Young kids dragging locked level items on left pan
    const loc = token.dataset.location;
    const idx = parseInt(token.dataset.index, 10);
    const level = LEVELS[state.currentLevelIndex];

    if (!state.isSandbox && loc === 'left' && level && level.leftItems && level.leftItems[idx]) {
      // Don't drag base level puzzle item
      return;
    }

    e.preventDefault();
    const rect = token.getBoundingClientRect();
    activeDrag = {
      element: token,
      location: loc,
      index: idx,
      weight: parseInt(token.dataset.weight, 10),
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      hasMoved: false,
      clone: null
    };

    token.setPointerCapture(e.pointerId);
  });

  document.addEventListener('pointermove', (e) => {
    if (!activeDrag) return;

    const dx = Math.abs(e.clientX - activeDrag.startX);
    const dy = Math.abs(e.clientY - activeDrag.startY);

    if (dx > 6 || dy > 6) {
      activeDrag.hasMoved = true;
      activeDrag.element.classList.add('was-dragged');

      // Create floating drag avatar if not already created
      if (!activeDrag.clone) {
        activeDrag.clone = activeDrag.element.cloneNode(true);
        activeDrag.clone.classList.add('dragging');
        activeDrag.clone.style.position = 'fixed';
        activeDrag.clone.style.pointerEvents = 'none';
        activeDrag.clone.style.zIndex = '9999';
        activeDrag.clone.style.width = `${activeDrag.element.offsetWidth}px`;
        activeDrag.clone.style.height = `${activeDrag.element.offsetHeight}px`;
        document.body.appendChild(activeDrag.clone);
        activeDrag.element.style.opacity = '0.3';
      }

      activeDrag.clone.style.left = `${e.clientX - activeDrag.offsetX}px`;
      activeDrag.clone.style.top = `${e.clientY - activeDrag.offsetY}px`;

      highlightPanUnderPointer(e.clientX, e.clientY);
    }
  });

  document.addEventListener('pointerup', (e) => {
    if (!activeDrag) return;

    if (activeDrag.clone) {
      activeDrag.clone.remove();
      activeDrag.element.style.opacity = '1';
    }

    if (activeDrag.hasMoved) {
      dropItemAtPosition(e.clientX, e.clientY, activeDrag);
    }

    clearPanHighlights();
    activeDrag = null;
  });

  document.addEventListener('pointercancel', () => {
    if (activeDrag && activeDrag.clone) {
      activeDrag.clone.remove();
      activeDrag.element.style.opacity = '1';
    }
    clearPanHighlights();
    activeDrag = null;
  });
}

function highlightPanUnderPointer(x, y) {
  const leftRect = dom.leftPanOverlay.getBoundingClientRect();
  const rightRect = dom.rightPanOverlay.getBoundingClientRect();

  dom.leftPanOverlay.classList.toggle('drop-hover', isInside(x, y, leftRect));
  dom.rightPanOverlay.classList.toggle('drop-hover', isInside(x, y, rightRect));
}

function clearPanHighlights() {
  dom.leftPanOverlay.classList.remove('drop-hover');
  dom.rightPanOverlay.classList.remove('drop-hover');
}

function isInside(x, y, rect, padding = 0) {
  return x >= (rect.left - padding) &&
         x <= (rect.right + padding) &&
         y >= (rect.top - padding) &&
         y <= (rect.bottom + padding);
}

function dropItemAtPosition(x, y, dragData) {
  const leftRect = dom.leftPanOverlay.getBoundingClientRect();
  const rightRect = dom.rightPanOverlay.getBoundingClientRect();
  const trayRect = dom.weightsTray.getBoundingClientRect();

  // Generous 35px padding so young kids on touch devices have an easy drop target
  let targetLocation = null;
  if (isInside(x, y, leftRect, 35)) targetLocation = 'left';
  else if (isInside(x, y, rightRect, 35)) targetLocation = 'right';
  else if (isInside(x, y, trayRect, 20)) targetLocation = 'tray';

  if (!targetLocation || targetLocation === dragData.location) {
    // Returned to original place
    renderAllItems();
    return;
  }

  // Remove from source collection
  let item = null;
  if (dragData.location === 'tray') {
    item = state.tray.splice(dragData.index, 1)[0];
  } else if (dragData.location === 'left') {
    item = state.leftPan.splice(dragData.index, 1)[0];
  } else if (dragData.location === 'right') {
    item = state.rightPan.splice(dragData.index, 1)[0];
  }

  if (!item) return;

  // Add to target collection
  if (targetLocation === 'left') {
    state.leftPan.push(item);
  } else if (targetLocation === 'right') {
    state.rightPan.push(item);
  } else if (targetLocation === 'tray') {
    state.tray.push(item);
  }

  audio.playClink();
  renderAllItems();
  recalculateBalance();
}

function setupPanDropZones() {
  // Desktop HTML5 drag fallback if ever triggered
  [dom.leftPanOverlay, dom.rightPanOverlay].forEach(overlay => {
    overlay.addEventListener('dragover', e => e.preventDefault());
  });
}

// -------------------------------------------------------------
// 13. PHYSICS & TILT DYNAMICS (Spring & Damped Harmonic)
// -------------------------------------------------------------
function recalculateBalance() {
  const leftTotal = state.leftPan.reduce((sum, it) => sum + it.weight, 0);
  const rightTotal = state.rightPan.reduce((sum, it) => sum + it.weight, 0);

  // Update badges
  dom.leftWeightBadge.querySelector('.weight-value').textContent = leftTotal;
  dom.rightWeightBadge.querySelector('.weight-value').textContent = rightTotal;

  const diff = leftTotal - rightTotal;

  // Max tilt angle is 14 degrees
  const MAX_ANGLE = 14;
  let target = diff * 2.8;
  if (target > MAX_ANGLE) target = MAX_ANGLE;
  if (target < -MAX_ANGLE) target = -MAX_ANGLE;

  state.targetAngle = -target; // Negative tilts left up / right down

  // Update status hint text
  if (diff === 0) {
    dom.hintText.textContent = I18N[currentLang].balanced_msg;
    dom.needleHintIcon.textContent = "✨";
    dom.balanceGlowIndicator.classList.add('balanced');
    dom.leftWeightBadge.classList.add('balanced');
    dom.rightWeightBadge.classList.add('balanced');
    dom.balanceEmoji.textContent = "⭐";
  } else if (diff > 0) {
    dom.hintText.textContent = I18N[currentLang].tilted_left;
    dom.needleHintIcon.textContent = "⬅️";
    dom.balanceGlowIndicator.classList.remove('balanced');
    dom.leftWeightBadge.classList.remove('balanced');
    dom.rightWeightBadge.classList.remove('balanced');
    dom.balanceEmoji.textContent = "⚖️";
  } else {
    dom.hintText.textContent = I18N[currentLang].tilted_right;
    dom.needleHintIcon.textContent = "➡️";
    dom.balanceGlowIndicator.classList.remove('balanced');
    dom.leftWeightBadge.classList.remove('balanced');
    dom.rightWeightBadge.classList.remove('balanced');
    dom.balanceEmoji.textContent = "⚖️";
  }

  // Schedule check for level complete when settled
  if (state.checkTimeout) clearTimeout(state.checkTimeout);
  state.checkTimeout = setTimeout(() => {
    checkWinCondition(leftTotal, rightTotal);
  }, 900);
}

function physicsLoop() {
  // Smooth damped spring interpolation
  const damping = 0.08;
  state.currentAngle += (state.targetAngle - state.currentAngle) * damping;

  // Apply beam rotation around fulcrum (450, 80)
  dom.beamGroup.setAttribute('transform', `rotate(${state.currentAngle}, 450, 80)`);

  // Calculate left and right hook coordinates
  const rad = (state.currentAngle * Math.PI) / 180;
  const beamRadius = 300;

  // Left hook: originally (150, 80) -> relative (-300, 0)
  const leftHookX = 450 - beamRadius * Math.cos(rad);
  const leftHookY = 80 - beamRadius * Math.sin(rad);

  // Right hook: originally (750, 80) -> relative (+300, 0)
  const rightHookX = 450 + beamRadius * Math.cos(rad);
  const rightHookY = 80 + beamRadius * Math.sin(rad);

  // Chains vertical drop delta
  const chainLength = 200;
  const leftPanX = leftHookX;
  const leftPanY = leftHookY + chainLength;

  const rightPanX = rightHookX;
  const rightPanY = rightHookY + chainLength;

  // Update left chain lines
  updateChainSVG('left-chain-1', leftHookX, leftHookY, leftPanX - 70, leftPanY - 5);
  updateChainSVG('left-chain-2', leftHookX, leftHookY, leftPanX, leftPanY - 2);
  updateChainSVG('left-chain-3', leftHookX, leftHookY, leftPanX + 70, leftPanY - 5);

  // Update left pan body
  const leftPanEl = dom.leftPanGroup.querySelectorAll('ellipse');
  leftPanEl.forEach(el => {
    el.setAttribute('cx', leftPanX);
    el.setAttribute('cy', leftPanY);
  });

  // Update right chain lines
  updateChainSVG('right-chain-1', rightHookX, rightHookY, rightPanX - 70, rightPanY - 5);
  updateChainSVG('right-chain-2', rightHookX, rightHookY, rightPanX, rightPanY - 2);
  updateChainSVG('right-chain-3', rightHookX, rightHookY, rightPanX + 70, rightPanY - 5);

  // Update right pan body
  const rightPanEl = dom.rightPanGroup.querySelectorAll('ellipse');
  rightPanEl.forEach(el => {
    el.setAttribute('cx', rightPanX);
    el.setAttribute('cy', rightPanY);
  });

  // Synchronize HTML overlay positions to match SVG coordinates
  syncOverlayPosition(dom.leftPanOverlay, leftPanX, leftPanY);
  syncOverlayPosition(dom.rightPanOverlay, rightPanX, rightPanY);

  requestAnimationFrame(physicsLoop);
}

function updateChainSVG(id, x1, y1, x2, y2) {
  const line = document.getElementById(id);
  if (line) {
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
  }
}

function syncOverlayPosition(overlay, svgX, svgY) {
  const stage = document.getElementById('scale-stage');
  const stageRect = stage.getBoundingClientRect();
  const svg = document.getElementById('scale-svg');
  const svgRect = svg.getBoundingClientRect();

  if (!svgRect.width || !svgRect.height) return;

  // SVG viewBox is 900 x 480 with preserveAspectRatio="xMidYMid meet"
  const vbWidth = 900;
  const vbHeight = 480;
  const aspect = vbWidth / vbHeight;
  const rectAspect = svgRect.width / svgRect.height;

  let scale, offsetX, offsetY;
  if (rectAspect > aspect) {
    // Stage is wider than SVG ratio: black/empty bars horizontally
    scale = svgRect.height / vbHeight;
    offsetX = (svgRect.width - vbWidth * scale) / 2;
    offsetY = 0;
  } else {
    // Stage is taller than SVG ratio: empty bars vertically
    scale = svgRect.width / vbWidth;
    offsetX = 0;
    offsetY = (svgRect.height - vbHeight * scale) / 2;
  }

  const pixelX = (svgRect.left - stageRect.left) + offsetX + svgX * scale;
  const pixelY = (svgRect.top - stageRect.top) + offsetY + svgY * scale;

  overlay.style.left = `${pixelX}px`;
  overlay.style.top = `${pixelY - 145}px`;
  overlay.style.transform = `translateX(-50%)`;
}

// -------------------------------------------------------------
// 14. WIN CONDITIONS, MULTI-WAY SOLVING & FRIENDLY FAILURE
// -------------------------------------------------------------
function checkWinCondition(leftTotal, rightTotal) {
  if (state.isSandbox) return;
  if (leftTotal === 0 && rightTotal === 0) return;

  const level = LEVELS[state.currentLevelIndex];

  // Friendly failure wobble if weights are unequal and user has tried placing weights
  if (leftTotal !== rightTotal) {
    if (rightTotal > 0) {
      triggerFriendlyWobble();
    }
    return;
  }

  // Both sides are equal!
  if (level.mode === 'two_ways') {
    handleTwoWaysSolve(leftTotal, rightTotal, level);
  } else {
    handleStandardSolve(leftTotal, rightTotal, level);
  }
}

function triggerFriendlyWobble() {
  audio.playWobble();
  dom.beamGroup.classList.add('wobbling');
  setTimeout(() => {
    dom.beamGroup.classList.remove('wobbling');
  }, 800);
}

function handleStandardSolve(leftTotal, rightTotal, level) {
  // If mystery box level, reveal mystery item!
  state.leftPan.forEach(item => {
    if (item.type === 'mystery') {
      item.revealed = true;
    }
  });
  renderAllItems();

  audio.playWin();
  state.completedLevels[level.id] = 3;
  saveProgress();

  showCelebration(leftTotal, rightTotal);
}

function handleTwoWaysSolve(leftTotal, rightTotal, level) {
  // Create fingerprint of weights on the right pan
  const currentComb = state.rightPan.map(i => i.weight).sort().join('+');

  if (state.twoWaysHistory.length === 0) {
    // Way 1 solved!
    state.twoWaysHistory.push(currentComb);
    dom.way1Badge.className = 'challenge-badge completed';
    dom.way1Badge.textContent = `${I18N[currentLang].way_1}: ✅ (${currentComb} kg)`;
    dom.way2Badge.className = 'challenge-badge active';
    dom.way2Badge.textContent = `${I18N[currentLang].way_2}: ⏳`;

    audio.playWin();
    updateMascotSpeech(I18N[currentLang].way_1_done);

    // Gently return right pan weights to tray so kid can build the second combination
    setTimeout(() => {
      while (state.rightPan.length > 0) {
        state.tray.push(state.rightPan.pop());
      }
      renderAllItems();
      recalculateBalance();
    }, 1200);

  } else if (state.twoWaysHistory.length === 1) {
    const prevComb = state.twoWaysHistory[0];
    if (currentComb === prevComb) {
      // Used the exact same combination again! Gentle voice reminder
      updateMascotSpeech(currentLang === 'hi' ? "यह तरीका पहले इस्तेमाल हो चुका है! कोई अलग बाट चुनो।" : (currentLang === 'mr' ? "ही पद्धत आधी वापरली आहे! वेगळी वजने निवडा." : "You already tried this combo! Find a different way!"));
      triggerFriendlyWobble();
    } else {
      // Way 2 solved! Both ways completed!
      dom.way2Badge.className = 'challenge-badge completed';
      dom.way2Badge.textContent = `${I18N[currentLang].way_2}: ✅ (${currentComb} kg)`;

      audio.playWin();
      state.completedLevels[level.id] = 3;
      saveProgress();

      showCelebration(leftTotal, rightTotal, `${prevComb} kg  &  ${currentComb} kg`);
    }
  }
}

function showCelebration(leftTotal, rightTotal, customEq = null) {
  const leftStr = state.leftPan.map(i => (i.type === 'produce' ? i.emoji : '') + (i.weight + ' kg')).join(' + ');
  const rightStr = state.rightPan.map(i => i.weight + ' kg').join(' + ');

  dom.winEquation.textContent = customEq ? `${leftTotal} kg = ${customEq}` : `${leftStr} = ${rightStr}`;
  dom.modalCelebration.classList.remove('hidden');

  spawnConfetti();
  updateMascotSpeech(I18N[currentLang].win_title);
}

function spawnConfetti() {
  dom.confettiContainer.innerHTML = '';
  const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    dom.confettiContainer.appendChild(piece);
  }
}

// -------------------------------------------------------------
// 15. BOOTSTRAP ON LOAD
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  initGame();
});
