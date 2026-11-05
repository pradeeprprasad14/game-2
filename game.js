/**
 * Tarazu - The Traditional Indian Balance Scale Game (Classes 1-3)
 * Features:
 * 1. Organic, non-square cutouts for real Indian bazaar objects (corn, coconut, bananas,
 *    mangoes, grapes, carrots, pumpkin, potato sacks, pineapples, watermelon, apple crates,
 *    wheat sacks, rice sacks, clay matkas, festival gifts).
 * 2. Distinctly shaped traditional Indian brass weights (Hexagonal 1kg, Octagonal 2kg,
 *    Conical Bell 3kg, Decagonal 4kg, Heavy Master Hexagon 5kg, Stepped Pillar 6kg).
 * 3. Natural Human-like Voice Selection (Neural/Natural browser TTS search).
 * 4. Damped Spring Physics & Web Audio procedural sounds.
 * 5. Trilingual (English, Hindi, Marathi) with instant toggle.
 */

// -------------------------------------------------------------
// 1. LOCALIZATION & TRANSLATIONS
// -------------------------------------------------------------
const I18N = {
  en: {
    menu: "Menu",
    level: "Level",
    reset: "Reset",
    left_pan: "Object to Weigh 🍎",
    right_pan: "Brass Weights ⚖️",
    tray_title: "Pick Brass Weights:",
    tray_hint: "(Drag or tap weights to balance the object)",
    win_title: "Wah! Shabaash! Perfect Balance!",
    win_desc: "The scale is completely level!",
    replay: "Weigh Again",
    next: "Next Object ▶️",
    choose_level: "Choose an Object to Weigh",
    stage_1: "Fruits & Veggies (1-3 kg)",
    stage_2: "Harvest & Sacks (4-5 kg)",
    stage_3: "Two Ways Challenge 🌟",
    way_1: "Way 1",
    way_2: "Way 2",
    way_1_done: "Brilliant! Now clear the right pan and balance it a DIFFERENT way!",
    level_hint_default: "Add brass weights to balance the object on the left!",
    tilted_left: "Left side is heavier! Add more weights to the right.",
    tilted_right: "Right side is heavier! Remove a weight or try a smaller one.",
    balanced_msg: "Wah! Both sides are equal!",
    welcome_greeting: "Namaste! Welcome to Tarazu Bazaar! Let's weigh delicious fruits, veggies, and grain sacks together!",
    app_sub: "The Balance Scale Game • तराजू का खेल",
    choose_lang: "Language / भाषा:",
    choose_buddy: "Choose Your Bazaar Mascot:",
    mascot_parrot: "Mithoo 🦜",
    mascot_monkey: "Chintu 🐒",
    mascot_elephant: "Gappu 🐘",
    start_play: "ENTER BAZAAR 🛒",
    how_to_play: "How to Play",
    how_to_play_title: "How to Weigh at the Bazaar ⚖️",
    tut_step1_title: "1. Look at the Object on the Left",
    tut_step1_desc: "See the fresh watermelon, banana bunch, or grain sack brought to the bazaar!",
    tut_step2_title: "2. Place Shaped Brass Weights on the Right",
    tut_step2_desc: "Drag or tap weights (hexagon 1kg, octagon 2kg, bell 3kg, etc.) onto the right pan.",
    tut_step3_title: "3. Make the Needle Point Up!",
    tut_step3_desc: "When weights match the object, the needle levels out and the jewel glows emerald green!",
    got_it: "Let's Weigh! 🚀",
    tts_lang: "en-IN"
  },
  hi: {
    menu: "मेन्यू",
    level: "वस्तु",
    reset: "रीसेट",
    left_pan: "तोलने की वस्तु 🍎",
    right_pan: "पीतल के बाट ⚖️",
    tray_title: "पीतल के बाट चुनो:",
    tray_hint: "(वस्तु तोलने के लिए सही बाट रखें)",
    win_title: "वाह! शाबाश! बिल्कुल सही वजन!",
    win_desc: "दोनों पलड़े बिल्कुल बराबर हैं!",
    replay: "फिर से तोलें",
    next: "अगली वस्तु ▶️",
    choose_level: "तोलने की वस्तु चुनें",
    stage_1: "फल और सब्ज़ी (1-3 किग्रा)",
    stage_2: "उपज और बोरियां (4-5 किग्रा)",
    stage_3: "दो तरीके 🌟",
    way_1: "तरीका 1",
    way_2: "तरीका 2",
    way_1_done: "बहुत बढ़िया! अब दूसरे अलग तरीके से तोलकर दिखाओ!",
    level_hint_default: "बाएं पलड़े की चीज़ तोलने के लिए दाएं में बाट रखो!",
    tilted_left: "बायां पलड़ा भारी है! दाएं पलड़े में और बाट रखो।",
    tilted_right: "दायां पलड़ा भारी है! कोई छोटा बाट लगाकर देखो।",
    balanced_msg: "वाह! दोनों तरफ बिल्कुल बराबर है!",
    welcome_greeting: "नमस्ते! तराजू बाज़ार में आपका स्वागत है! आओ ताज़े फल, सब्ज़ियाँ और बोरियाँ तोलें!",
    app_sub: "तराजू का खेल • वजन काटा खेळ",
    choose_lang: "भाषा चुनें:",
    choose_buddy: "अपना बाज़ार साथी चुनें:",
    mascot_parrot: "मीठू 🦜",
    mascot_monkey: "चिंटू 🐒",
    mascot_elephant: "गप्पू 🐘",
    start_play: "बाज़ार में चलें 🛒",
    how_to_play: "कैसे खेलें",
    how_to_play_title: "तराजू से कैसे तोलें ⚖️",
    tut_step1_title: "1. बाईं तरफ की चीज़ देखो",
    tut_step1_desc: "दुकानदार ताज़ा तरबूज, केले, मक्का या गेहूं की बोरी लाया है!",
    tut_step2_title: "2. दाईं तरफ अलग-अलग आकार के बाट रखो",
    tut_step2_desc: "षट्कोण 1 किग्रा, अष्टकोण 2 किग्रा, घंटाकार 3 किग्रा बाट खींचकर रखो।",
    tut_step3_title: "3. कांटा सीधा करो!",
    tut_step3_desc: "वजन बराबर होते ही लाल सुई सीधी होगी और हरी रोशनी चमकेगी!",
    got_it: "समझ गए! खेलें! 🚀",
    tts_lang: "hi-IN"
  },
  mr: {
    menu: "मेनू",
    level: "वस्तू",
    reset: "रीसेट",
    left_pan: "तोलण्याची वस्तू 🍎",
    right_pan: "पितळी वजने ⚖️",
    tray_title: "पितळी वजने निवडा:",
    tray_hint: "(वस्तू तोकण्यासाठी उजवीकडे वजने ठेवा)",
    win_title: "वाह! शाब्बास! अगदी बरोबर तोकले!",
    win_desc: "दोन्ही बाजू समसमान झाल्या!",
    replay: "पुन्हा तोका",
    next: "पुढील वस्तू ▶️",
    choose_level: "तोलण्यासाठी वस्तू निवडा",
    stage_1: "फळे व भाजी (1-3 किलो)",
    stage_2: "धान्य व गोणी (4-5 किलो)",
    stage_3: "दोन पद्धती 🌟",
    way_1: "पद्धत 1",
    way_2: "पद्धत 2",
    way_1_done: "छान! आता उजवीकडची वजने काढून वेगळ्या पद्धतीने तोका!",
    level_hint_default: "डावीकडची वस्तू तोकण्यासाठी उजवीकडे वजने ठेवा!",
    tilted_left: "डावे पारडे जड आहे! उजवीकडे आणखी वजन वाढवा.",
    tilted_right: "उजवे पारडे जड आहे! उजवीकडून थोडे वजन कमी करा.",
    balanced_msg: "छान! दोन्ही पारडी अगदी समसमान झाली!",
    welcome_greeting: "नमस्ते! तराजूच्या बाजारात आपले स्वागत आहे! चला ताजी फळे, भाजी आणि धान्याची गोणी तोकूया!",
    app_sub: "वजन काटा खेळ • तराजू का खेल",
    choose_lang: "भाषा निवडा:",
    choose_buddy: "आपला सोबती निवडा:",
    mascot_parrot: "मिठू 🦜",
    mascot_monkey: "चिंटू 🐒",
    mascot_elephant: "गप्पू 🐘",
    start_play: "बाजारात जाऊया 🛒",
    how_to_play: "कसे खेळायचे",
    how_to_play_title: "तराजूने कसे तोकायचे ⚖️",
    tut_step1_title: "1. डाव्या बाजूची वस्तू बघा",
    tut_step1_desc: "शेतकऱ्याने ताजे कलिंगड, केळी, मका किंवा गव्हाची गोणी आणली आहे!",
    tut_step2_title: "2. उजव्या पारड्यात विशिष्ट आकाराची वजने ठेवा",
    tut_step2_desc: "षट्कोणी 1 किलो, अष्टकोणी 2 किलो किंवा घंटाकार 3 किलो वजने ठेवा.",
    tut_step3_title: "3. काटा अगदी सरळ करा!",
    tut_step3_desc: "वजन जुळताच लाल काटा मधोमध येईल आणि हिरवा दिवा चमकेल!",
    got_it: "समजले! तोकूया! 🚀",
    tts_lang: "mr-IN"
  }
};

let currentLang = 'en';
let currentMascot = 'parrot';
const MASCOT_EMOJIS = {
  parrot: '🦜',
  monkey: '🐒',
  elephant: '🐘'
};

// -------------------------------------------------------------
// 2. AUDIO & HUMAN-LIKE VOCAL SYNTHESIS
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

  // Realistic brass clink when weight is dropped
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

  // Authentic brass temple bell with warm harmonics
  playTempleBell() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const freqs = [659.25, 1318.5, 1975.5, 2637.0];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      const initVol = 0.28 / (idx + 1);
      gain.gain.setValueAtTime(initVol, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 1.8);
    });
  }

  // Soft cartoon wobble tone
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

  // Celebratory joyful victory chimes + formant cheer
  playWin() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50];
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

    this.playVocalCheer();
  }

  // Formant vocal cheer synthesis (warm human "Wah!" vowel)
  playVocalCheer() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime + 0.15;
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(330, t + 0.35);

      const f1 = this.ctx.createBiquadFilter();
      f1.type = 'bandpass';
      f1.frequency.setValueAtTime(800, t);
      f1.Q.setValueAtTime(4, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

      osc.connect(f1);
      f1.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.45);
    } catch (e) {}
  }

  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, t);
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
// 3. HUMAN-LIKE VOICE ENGINE (Deep Neural/Natural Voice Search)
// -------------------------------------------------------------
class SpeechController {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voicesLoaded = false;
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
    if (voices && voices.length > 0) {
      this.voicesLoaded = true;
    }
  }

  getBestHumanVoice(langCode) {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    const qualityKeywords = [
      'natural', 'neural', 'online', 'google', 'female', 'premium',
      'neerja', 'swara', 'madhur', 'aarav', 'heera', 'ravi', 'zira', 'jenny', 'samantha'
    ];

    const langLower = langCode.toLowerCase();

    // 1. Exact match with neural/natural human voice
    let best = voices.find(v => {
      const vLang = v.lang.toLowerCase();
      const vName = v.name.toLowerCase();
      const isTargetLang = vLang.startsWith(langLower) || vLang.replace('_', '-').startsWith(langLower);
      return isTargetLang && qualityKeywords.some(k => vName.includes(k));
    });
    if (best) return best;

    // 2. Any exact match
    best = voices.find(v => {
      const vLang = v.lang.toLowerCase();
      return vLang.startsWith(langLower) || vLang.replace('_', '-').startsWith(langLower);
    });
    if (best) return best;

    // 3. Indian language fallback (Marathi to Hindi natural voice)
    if (langLower === 'mr' || langLower.startsWith('mr')) {
      best = voices.find(v => v.lang.toLowerCase().startsWith('hi') && qualityKeywords.some(k => v.name.toLowerCase().includes(k))) ||
             voices.find(v => v.lang.toLowerCase().startsWith('hi')) ||
             voices.find(v => v.lang.toLowerCase().includes('in'));
      if (best) return best;
    }

    // 4. English with natural quality
    if (langLower.startsWith('en')) {
      best = voices.find(v => v.lang.toLowerCase().includes('in') && v.lang.toLowerCase().startsWith('en')) ||
             voices.find(v => v.lang.toLowerCase().startsWith('en') && qualityKeywords.some(k => v.name.toLowerCase().includes(k)));
      if (best) return best;
    }

    return voices[0];
  }

  speak(text) {
    if (!this.synth || !audio.soundEnabled) return;
    try {
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const langCode = I18N[currentLang].tts_lang;
      utterance.lang = langCode;

      const v = this.getBestHumanVoice(currentLang === 'hi' ? 'hi' : (currentLang === 'mr' ? 'mr' : 'en'));
      if (v) {
        utterance.voice = v;
      }

      const mascot = document.getElementById('mascot-avatar');
      if (mascot) {
        mascot.style.transform = 'scale(1.18) rotate(-4deg)';
        utterance.onend = () => { mascot.style.transform = ''; };
        utterance.onerror = () => { mascot.style.transform = ''; };
      }

      this.synth.speak(utterance);
    } catch (e) {
      console.log('TTS error fallback:', e);
    }
  }
}

const voice = new SpeechController();

// -------------------------------------------------------------
// 4. EXPANSIVE CURRICULUM: 17 DIVERSE BAZAAR OBJECTS!
// -------------------------------------------------------------
// Real objects: free-standing organic graphics (no square cards!)
// Weights: distinct geometric shapes (Hexagon, Octagon, Bell, Decagon, Master Hexagon)
const LEVELS = [
  // Stage 1: Fresh Fruits & Veggies (1 - 3 kg)
  {
    id: 1,
    stage: 1,
    title: "Sweet Golden Corn (1 kg)",
    promptEn: "Weigh the sweet corn (1 kg)! Put a 1 kg hexagonal brass weight on the right pan.",
    promptHi: "मीठा भुट्टा (1 किग्रा) तोलो! दाएं पलड़े पर 1 किग्रा का षट्कोण बाट रखो।",
    promptMr: "गोड मका (1 किलो) तोकडा! उजव्या पारड्यात 1 किलोचे षट्कोणी वजन ठेवा.",
    leftItems: [{ type: 'produce', weight: 1, emoji: '🌽', nameEn: 'Sweet Corn', nameHi: 'भुट्टा', nameMr: 'मका', label: '1 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' }
    ],
    targetWeight: 1,
    mode: 'single'
  },
  {
    id: 2,
    stage: 1,
    title: "Tender Coconut (2 kg)",
    promptEn: "Weigh the fresh coconut (2 kg)! Put a 2 kg octagonal brass weight on the right.",
    promptHi: "ताज़ा नारियल (2 किग्रा) तोलो! दाएं पलड़े पर 2 किग्रा का अष्टकोण बाट रखो।",
    promptMr: "ताजा नारळ (2 किलो) तोकडा! उजव्या पारड्यात 2 किलोचे अष्टकोणी वजन ठेवा.",
    leftItems: [{ type: 'produce', weight: 2, emoji: '🥥', nameEn: 'Coconut', nameHi: 'नारियल', nameMr: 'नारळ', label: '2 kg' }],
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
    id: 3,
    stage: 1,
    title: "Banana Bunch (2 kg)",
    promptEn: "Weigh the fresh banana bunch (2 kg)! Balance with weights.",
    promptHi: "केले की घड़ी (2 किग्रा) तोलो! सही बाट रखकर तराजू बराबर करो।",
    promptMr: "केळ्यांचा घड (2 किलो) तोकडा! योग्य वजन ठेवून समसमान करा.",
    leftItems: [{ type: 'produce', weight: 2, emoji: '🍌', nameEn: 'Bananas', nameHi: 'केले', nameMr: 'केळी', label: '2 kg' }],
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
    id: 4,
    stage: 1,
    title: "Alphonso Mango Basket (3 kg)",
    promptEn: "Weigh the sweet mango basket (3 kg)! Combine 1 kg and 2 kg brass weights on the right.",
    promptHi: "मीठे आम की टोकरी (3 किग्रा) तोलो! दाएं पलड़े पर 1 और 2 किग्रा बाट जोड़ो।",
    promptMr: "गोड आंब्यांची टोपली (3 किलो) तोकडा! उजवीकडे 1 आणि 2 किलो वजने ठेवा.",
    leftItems: [{ type: 'produce', weight: 3, emoji: '🥭', nameEn: 'Mangoes', nameHi: 'आम की टोकरी', nameMr: 'आंब्यांची टोपली', label: '3 kg' }],
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
    id: 5,
    stage: 1,
    title: "Black Grapes Basket (3 kg)",
    promptEn: "Weigh the juicy black grapes (3 kg)! Place the 3 kg conical bell weight.",
    promptHi: "काले अंगूर की टोकरी (3 किग्रा) तोलो! 3 किग्रा का घंटाकार बाट रखो।",
    promptMr: "काळ्या द्राक्षांची टोपली (3 किलो) तोकडा! 3 किलोचे घंटाकार वजन ठेवा.",
    leftItems: [{ type: 'produce', weight: 3, emoji: '🍇', nameEn: 'Black Grapes', nameHi: 'अंगूर', nameMr: 'द्राक्षे', label: '3 kg' }],
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
    id: 6,
    stage: 1,
    title: "Crunchy Carrot Bundle (3 kg)",
    promptEn: "Weigh the fresh carrot bundle (3 kg)! Find the matching weights.",
    promptHi: "गाजर का बंडल (3 किग्रा) तोलो! सही बाट रखो।",
    promptMr: "गाजरांचा जुडगा (3 किलो) तोकडा! योग्य वजने ठेवा.",
    leftItems: [{ type: 'produce', weight: 3, emoji: '🥕', nameEn: 'Carrots', nameHi: 'गाजर बंडल', nameMr: 'गाजरे', label: '3 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' }
    ],
    targetWeight: 3,
    mode: 'single'
  },

  // Stage 2: Harvest & Sacks (4 - 5 kg)
  {
    id: 7,
    stage: 2,
    title: "Golden Autumn Pumpkin (4 kg)",
    promptEn: "Weigh the big golden pumpkin (4 kg)! Drag decagonal weights to balance.",
    promptHi: "बड़ा कद्दू (4 किग्रा) तोलो! सही बाट रखकर बराबर करो।",
    promptMr: "मोठा भोपळा (4 किलो) तोकडा! योग्य वजने ठेवून समसमान करा.",
    leftItems: [{ type: 'produce', weight: 4, emoji: '🎃', nameEn: 'Pumpkin', nameHi: 'कद्दू', nameMr: 'भोपळा', label: '4 kg' }],
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
    title: "Jute Potato Sack (4 kg)",
    promptEn: "Weigh the burlap potato sack (4 kg)! Place weights on the right pan.",
    promptHi: "आलू की बोरी (4 किग्रा) तोलो! दाएं पलड़े पर बाट रखो।",
    promptMr: "बटाट्याची गोणी (4 किलो) तोकडा! उजव्या पारड्यात वजने ठेवा.",
    leftItems: [{ type: 'produce', weight: 4, emoji: '🥔', customClass: 'obj-sack', nameEn: 'Potato Sack', nameHi: 'आलू की बोरी', nameMr: 'बटाट्याची गोणी', label: '4 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' }
    ],
    targetWeight: 4,
    mode: 'single'
  },
  {
    id: 9,
    stage: 2,
    title: "Pineapple Pair (4 kg)",
    promptEn: "Weigh the tropical pineapples (4 kg)! Balance with brass weights.",
    promptHi: "अनानास (4 किग्रा) तोलो! तराजू सीधा करो।",
    promptMr: "अननस (4 किलो) तोकडा! तराजू समान करा.",
    leftItems: [{ type: 'produce', weight: 4, emoji: '🍍', nameEn: 'Pineapples', nameHi: 'अनानास', nameMr: 'अननस', label: '4 kg' }],
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
    id: 10,
    stage: 2,
    title: "Giant Striped Watermelon (5 kg)",
    promptEn: "Weigh the giant watermelon (5 kg)! Balance with the heavy master weights on the right.",
    promptHi: "बड़ा तरबूज (5 किग्रा) तोलो! दाएं पलड़े पर भारी बाट रखकर तराजू बराबर करो।",
    promptMr: "मोठे कलिंगड (5 किलो) तोकडा! उजव्या पारड्यात वजने ठेवून संतुलित करा.",
    leftItems: [{ type: 'produce', weight: 5, emoji: '🍉', nameEn: 'Watermelon', nameHi: 'तरबूज', nameMr: 'कलिंगड', label: '5 kg' }],
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
  {
    id: 11,
    stage: 2,
    title: "Kashmiri Apple Crate (5 kg)",
    promptEn: "Weigh the Kashmiri apple crate (5 kg)! Make the scale level.",
    promptHi: "सेब की पेटी (5 किग्रा) तोलो! पलड़े को बराबर करो।",
    promptMr: "सफरचंदांची पेटी (5 किलो) तोकडा! दोन्ही पारडी समान करा.",
    leftItems: [{ type: 'produce', weight: 5, emoji: '🍎', nameEn: 'Apple Crate', nameHi: 'सेब की पेटी', nameMr: 'सफरचंदांची पेटी', label: '5 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 5, label: '5 kg' }
    ],
    targetWeight: 5,
    mode: 'single'
  },
  {
    id: 12,
    stage: 2,
    title: "Farmer's Wheat Sack (5 kg)",
    promptEn: "Weigh the burlap wheat sack (5 kg)! Balance with brass weights.",
    promptHi: "गेहूं की बोरी (5 किग्रा) तोलो! सही बाट रखो।",
    promptMr: "गव्हाची गोणी (5 किलो) तोकडा! योग्य वजने ठेवा.",
    leftItems: [{ type: 'produce', weight: 5, emoji: '🌾', customClass: 'obj-sack', nameEn: 'Wheat Sack', nameHi: 'गेहूं की बोरी', nameMr: 'गव्हाची गोणी', label: '5 kg' }],
    rightItems: [],
    trayItems: [
      { type: 'batta', weight: 1, label: '1 kg' },
      { type: 'batta', weight: 2, label: '2 kg' },
      { type: 'batta', weight: 3, label: '3 kg' },
      { type: 'batta', weight: 4, label: '4 kg' },
      { type: 'batta', weight: 5, label: '5 kg' }
    ],
    targetWeight: 5,
    mode: 'single'
  },

  // Stage 3: Two Different Ways to Balance Challenge
  {
    id: 13,
    stage: 3,
    title: "Two Ways: 5 kg Watermelon",
    promptEn: "Find TWO DIFFERENT WAYS to balance this 5 kg watermelon!",
    promptHi: "इस 5 किग्रा तरबूज को तोलने के 2 अलग-अलग तरीके खोजो!",
    promptMr: "हे 5 किलोचे कलिंगड तोकण्याचे 2 वेगळे मार्ग शोधा!",
    leftItems: [{ type: 'produce', weight: 5, emoji: '🍉', nameEn: 'Watermelon', nameHi: 'तरबूज', nameMr: 'कलिंगड', label: '5 kg' }],
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
    id: 14,
    stage: 3,
    title: "Two Ways: 6 kg Basmati Rice Sack",
    promptEn: "Balance this 6 kg Basmati Rice sack in TWO DIFFERENT WAYS!",
    promptHi: "इस 6 किग्रा बासमती चावल की बोरी को 2 अलग तरीकों से तोलो!",
    promptMr: "ह्या 6 किलो बासमती तांदळाच्या गोणीला 2 वेगळ्या पद्धतींनी तोकडा!",
    leftItems: [{ type: 'produce', weight: 6, emoji: '🍚', customClass: 'obj-sack', nameEn: 'Rice Sack', nameHi: 'चावल की बोरी', nameMr: 'तांदळाची गोणी', label: '6 kg' }],
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
  completedLevels: {},
  leftPan: [],
  rightPan: [],
  tray: [],
  twoWaysHistory: [],
  currentAngle: 0,
  targetAngle: 0,
  selectedTrayIndex: null,
  checkTimeout: null
};

// -------------------------------------------------------------
// 6. DOM ELEMENTS
// -------------------------------------------------------------
const dom = {
  screenWelcome: document.getElementById('screen-welcome'),
  welcomeSpeechText: document.getElementById('welcome-speech-text'),
  btnWelcomeSpeak: document.getElementById('btn-welcome-speak'),
  btnStartPlay: document.getElementById('btn-start-play'),
  btnWelcomeLevels: document.getElementById('btn-welcome-levels'),
  btnHowToPlay: document.getElementById('btn-how-to-play'),
  modalTutorial: document.getElementById('modal-tutorial'),
  btnCloseTutorial: document.getElementById('btn-close-tutorial'),
  btnGotIt: document.getElementById('btn-got-it'),
  levelNumber: document.getElementById('level-number'),
  speechText: document.getElementById('speech-text'),
  btnSpeak: document.getElementById('btn-speak'),
  btnHome: document.getElementById('btn-home'),
  btnOpenLevels: document.getElementById('btn-open-levels'),
  btnTempleBell: document.getElementById('btn-temple-bell'),
  btnSound: document.getElementById('btn-sound'),
  soundIcon: document.getElementById('sound-icon'),
  btnReset: document.getElementById('btn-reset'),
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
  centerJewel: document.getElementById('center-jewel'),
  mascotAvatar: document.getElementById('mascot-avatar'),
  welcomeMascotAvatar: document.getElementById('welcome-mascot-avatar'),
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
// 7. INITIALIZATION & SETUP
// -------------------------------------------------------------
function initGame() {
  loadProgress();
  setupLanguageButtons();
  setupMascotButtons();
  setupWelcomeScreenEvents();
  setupHeaderEvents();
  setupModalEvents();
  setupPanDropZones();
  setupPointerTouchDrag();

  loadLevel(0);
  requestAnimationFrame(physicsLoop);
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
// 8. WELCOME SCREEN & MASCOT SELECTION
// -------------------------------------------------------------
function setupWelcomeScreenEvents() {
  dom.btnStartPlay.addEventListener('click', () => {
    audio.init();
    audio.playTempleBell();
    dom.screenWelcome.classList.add('hidden');
    loadLevel(0);
  });

  dom.btnWelcomeLevels.addEventListener('click', () => {
    audio.init();
    audio.playPop();
    openLevelsModal();
  });

  dom.btnHowToPlay.addEventListener('click', () => {
    audio.init();
    audio.playPop();
    dom.modalTutorial.classList.remove('hidden');
  });

  dom.btnWelcomeSpeak.addEventListener('click', () => {
    audio.init();
    audio.playPop();
    voice.speak(dom.welcomeSpeechText.textContent);
  });
}

function setupMascotButtons() {
  document.querySelectorAll('.mascot-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      audio.init();
      audio.playPop();
      document.querySelectorAll('.mascot-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMascot = btn.dataset.mascot;

      const emoji = MASCOT_EMOJIS[currentMascot] || '🦜';
      dom.mascotAvatar.textContent = emoji;
      dom.welcomeMascotAvatar.textContent = emoji;
    });
  });
}

// -------------------------------------------------------------
// 9. LANGUAGE & LOCALIZATION
// -------------------------------------------------------------
function setupLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      audio.init();
      audio.playPop();
      const lang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));
      currentLang = lang;
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

  const level = LEVELS[state.currentLevelIndex];
  if (level) {
    const prompt = currentLang === 'hi' ? level.promptHi : (currentLang === 'mr' ? level.promptMr : level.promptEn);
    updateMascotSpeech(prompt, false);
  }

  renderAllItems();
  renderLevelsGrid();
}

function updateMascotSpeech(text, autoSpeak = true) {
  dom.speechText.textContent = text;
  if (autoSpeak) {
    voice.speak(text);
  }
}

// -------------------------------------------------------------
// 10. HEADER & MODAL CONTROLS
// -------------------------------------------------------------
function setupHeaderEvents() {
  dom.btnHome.addEventListener('click', () => {
    audio.playPop();
    dom.screenWelcome.classList.remove('hidden');
  });

  dom.btnOpenLevels.addEventListener('click', () => {
    audio.playPop();
    openLevelsModal();
  });

  dom.btnTempleBell.addEventListener('click', () => {
    audio.playTempleBell();
  });

  dom.btnSpeak.addEventListener('click', () => {
    audio.playPop();
    voice.speak(dom.speechText.textContent);
  });

  dom.btnSound.addEventListener('click', () => {
    audio.soundEnabled = !audio.soundEnabled;
    dom.soundIcon.textContent = audio.soundEnabled ? '🔊' : '🔇';
    audio.playPop();
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

  dom.btnCloseTutorial.addEventListener('click', () => {
    audio.playPop();
    dom.modalTutorial.classList.add('hidden');
  });

  dom.btnGotIt.addEventListener('click', () => {
    audio.playPop();
    dom.modalTutorial.classList.add('hidden');
    dom.screenWelcome.classList.add('hidden');
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
      openLevelsModal();
    }
  });

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

    const objEmoji = (lvl.leftItems && lvl.leftItems[0] && lvl.leftItems[0].emoji) ? lvl.leftItems[0].emoji : '⚖️';

    btn.innerHTML = `
      <span class="level-btn-emoji">${objEmoji}</span>
      <span class="level-btn-num">${lvl.id}</span>
      <span class="level-btn-stars">${starStr}</span>
    `;

    btn.addEventListener('click', () => {
      audio.playPop();
      dom.modalLevels.classList.add('hidden');
      dom.screenWelcome.classList.add('hidden');
      loadLevel(idx);
    });

    dom.levelsGrid.appendChild(btn);
  });
}

// -------------------------------------------------------------
// 11. LEVEL LOADING & RESET
// -------------------------------------------------------------
function loadLevel(index) {
  state.currentLevelIndex = index;
  state.twoWaysHistory = [];
  state.selectedTrayIndex = null;

  const level = LEVELS[index];
  dom.levelNumber.textContent = level.id;

  state.leftPan = JSON.parse(JSON.stringify(level.leftItems));
  state.rightPan = JSON.parse(JSON.stringify(level.rightItems));
  state.tray = JSON.parse(JSON.stringify(level.trayItems));

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
  state.selectedTrayIndex = null;
  const level = LEVELS[state.currentLevelIndex];
  state.leftPan = JSON.parse(JSON.stringify(level.leftItems));
  state.rightPan = JSON.parse(JSON.stringify(level.rightItems));
  state.tray = JSON.parse(JSON.stringify(level.trayItems));
  renderAllItems();
  recalculateBalance();
}

// -------------------------------------------------------------
// 12. ITEM RENDERING (ORGANIC REAL OBJECTS & SHAPED BRASS WEIGHTS)
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
    if (state.selectedTrayIndex === index) {
      el.classList.add('selected');
    }
    dom.weightsTray.appendChild(el);
  });
}

function getItemLocalizedName(item) {
  if (currentLang === 'hi' && item.nameHi) return item.nameHi;
  if (currentLang === 'mr' && item.nameMr) return item.nameMr;
  return item.nameEn || '';
}

function createItemElement(item, location, index) {
  const el = document.createElement('div');
  el.className = `weight-token weight-${item.weight}kg`;
  el.dataset.location = location;
  el.dataset.index = index;
  el.dataset.weight = item.weight;

  // 1. REAL BAZAAR OBJECT (Organic, Non-Square Cutout!)
  if (item.type === 'produce') {
    el.classList.add('object-token', `obj-${item.weight}kg`);
    if (item.customClass) el.classList.add(item.customClass);

    const objName = getItemLocalizedName(item);
    el.innerHTML = `
      <div class="object-visual-wrap">
        <span class="object-emoji">${item.emoji}</span>
        <div class="object-pan-shadow"></div>
      </div>
      <div class="market-tag">
        <span class="tag-pin">🏷️</span>
        <span class="tag-name">${objName}</span>
        <span class="tag-weight">${item.label || item.weight + ' kg'}</span>
      </div>
    `;
  }
  // 2. AUTHENTIC SHAPED BRASS BATTA WEIGHT (Different Geometric Shapes!)
  else if (item.type === 'batta') {
    el.classList.add('batta-token', `batta-${item.weight}kg`);
    let dotsHtml = '';
    if (item.weight <= 5) {
      dotsHtml = `<div class="dots-container">${Array(item.weight).fill('<span class="dot-counter"></span>').join('')}</div>`;
    }

    el.innerHTML = `
      <div class="batta-body">
        <div class="batta-knob"></div>
        <div class="batta-stamp">
          <span class="batta-weight-text">${item.label || item.weight + ' kg'}</span>
          ${dotsHtml}
        </div>
      </div>
    `;
  }

  // Tap-to-move feature
  el.addEventListener('click', () => {
    if (!el.classList.contains('was-dragged')) {
      handleItemTap(location, index);
    }
    el.classList.remove('was-dragged');
  });

  return el;
}

function handleItemTap(location, index) {
  audio.playPop();
  const level = LEVELS[state.currentLevelIndex];

  if (location === 'tray') {
    const item = state.tray.splice(index, 1)[0];
    state.rightPan.push(item);
  } else if (location === 'left') {
    if (level && level.leftItems && level.leftItems[index] && level.leftItems.length > 0) {
      triggerFriendlyWobble();
      const objName = getItemLocalizedName(level.leftItems[index]);
      updateMascotSpeech(
        currentLang === 'hi'
          ? `यह ${objName} तो तोलने के लिए रखी है! दाएं पलड़े पर बाट रखकर तोलो।`
          : (currentLang === 'mr'
             ? `हे ${objName} तोकण्यासाठी ठेवले आहे! उजव्या पारड्यात वजने ठेवा.`
             : `This ${objName} is what we need to weigh! Add brass weights to the right!`)
      );
      return;
    }
    const item = state.leftPan.splice(index, 1)[0];
    state.tray.push(item);
  } else if (location === 'right') {
    const item = state.rightPan.splice(index, 1)[0];
    state.tray.push(item);
  }

  audio.playClink();
  renderAllItems();
  recalculateBalance();
}

// -------------------------------------------------------------
// 13. DRAG AND DROP WITH POINTER EVENTS
// -------------------------------------------------------------
let activeDrag = null;

function setupPointerTouchDrag() {
  document.addEventListener('pointerdown', (e) => {
    const token = e.target.closest('.weight-token');
    if (!token) return;

    const loc = token.dataset.location;
    const idx = parseInt(token.dataset.index, 10);
    const level = LEVELS[state.currentLevelIndex];

    if (loc === 'left' && level && level.leftItems && level.leftItems[idx]) {
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

  dom.leftPanOverlay.classList.toggle('drop-hover', isInside(x, y, leftRect, 20));
  dom.rightPanOverlay.classList.toggle('drop-hover', isInside(x, y, rightRect, 20));
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

  let targetLocation = null;
  if (isInside(x, y, leftRect, 35)) targetLocation = 'left';
  else if (isInside(x, y, rightRect, 35)) targetLocation = 'right';
  else if (isInside(x, y, trayRect, 20)) targetLocation = 'tray';

  if (!targetLocation || targetLocation === dragData.location) {
    renderAllItems();
    return;
  }

  let item = null;
  if (dragData.location === 'tray') {
    item = state.tray.splice(dragData.index, 1)[0];
  } else if (dragData.location === 'left') {
    item = state.leftPan.splice(dragData.index, 1)[0];
  } else if (dragData.location === 'right') {
    item = state.rightPan.splice(dragData.index, 1)[0];
  }

  if (!item) return;

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
  [dom.leftPanOverlay, dom.rightPanOverlay].forEach(overlay => {
    overlay.addEventListener('dragover', e => e.preventDefault());
    overlay.addEventListener('click', () => {
      if (state.selectedTrayIndex !== null) {
        const item = state.tray.splice(state.selectedTrayIndex, 1)[0];
        const side = overlay.dataset.pan;
        if (side === 'left') state.leftPan.push(item);
        else state.rightPan.push(item);
        state.selectedTrayIndex = null;
        audio.playClink();
        renderAllItems();
        recalculateBalance();
      }
    });
  });
}

// -------------------------------------------------------------
// 14. DAMPED SPRING TILT DYNAMICS
// -------------------------------------------------------------
function recalculateBalance() {
  const leftTotal = state.leftPan.reduce((sum, it) => sum + it.weight, 0);
  const rightTotal = state.rightPan.reduce((sum, it) => sum + it.weight, 0);

  dom.leftWeightBadge.querySelector('.weight-value').textContent = leftTotal;
  dom.rightWeightBadge.querySelector('.weight-value').textContent = rightTotal;

  const diff = leftTotal - rightTotal;
  const MAX_ANGLE = 14;
  let target = diff * 2.8;
  if (target > MAX_ANGLE) target = MAX_ANGLE;
  if (target < -MAX_ANGLE) target = -MAX_ANGLE;

  state.targetAngle = -target;

  if (diff === 0 && (leftTotal > 0 || rightTotal > 0)) {
    dom.hintText.textContent = I18N[currentLang].balanced_msg;
    dom.needleHintIcon.textContent = "✨";
    dom.balanceGlowIndicator.classList.add('balanced');
    dom.leftWeightBadge.classList.add('balanced');
    dom.rightWeightBadge.classList.add('balanced');
    dom.centerJewel.classList.add('balanced');
    dom.balanceEmoji.textContent = "⭐";
    dom.mascotAvatar.classList.add('celebrating');
  } else {
    dom.balanceGlowIndicator.classList.remove('balanced');
    dom.leftWeightBadge.classList.remove('balanced');
    dom.rightWeightBadge.classList.remove('balanced');
    dom.centerJewel.classList.remove('balanced');
    dom.balanceEmoji.textContent = "⚖️";
    dom.mascotAvatar.classList.remove('celebrating');

    if (diff > 0) {
      dom.hintText.textContent = I18N[currentLang].tilted_left;
      dom.needleHintIcon.textContent = "⬅️";
    } else if (diff < 0) {
      dom.hintText.textContent = I18N[currentLang].tilted_right;
      dom.needleHintIcon.textContent = "➡️";
    } else {
      dom.hintText.textContent = I18N[currentLang].level_hint_default;
      dom.needleHintIcon.textContent = "⚖️";
    }
  }

  if (state.checkTimeout) clearTimeout(state.checkTimeout);
  state.checkTimeout = setTimeout(() => {
    checkWinCondition(leftTotal, rightTotal);
  }, 900);
}

function physicsLoop() {
  const damping = 0.08;
  state.currentAngle += (state.targetAngle - state.currentAngle) * damping;

  dom.beamGroup.setAttribute('transform', `rotate(${state.currentAngle}, 450, 80)`);

  const rad = (state.currentAngle * Math.PI) / 180;
  const beamRadius = 300;

  const leftHookX = 450 - beamRadius * Math.cos(rad);
  const leftHookY = 80 - beamRadius * Math.sin(rad);

  const rightHookX = 450 + beamRadius * Math.cos(rad);
  const rightHookY = 80 + beamRadius * Math.sin(rad);

  const chainLength = 200;
  const leftPanX = leftHookX;
  const leftPanY = leftHookY + chainLength;

  const rightPanX = rightHookX;
  const rightPanY = rightHookY + chainLength;

  updateChainSVG('left-chain-1', leftHookX, leftHookY, leftPanX - 70, leftPanY - 5);
  updateChainSVG('left-chain-2', leftHookX, leftHookY, leftPanX, leftPanY - 2);
  updateChainSVG('left-chain-3', leftHookX, leftHookY, leftPanX + 70, leftPanY - 5);

  dom.leftPanGroup.querySelectorAll('ellipse').forEach(el => {
    el.setAttribute('cx', leftPanX);
    el.setAttribute('cy', leftPanY);
  });

  updateChainSVG('right-chain-1', rightHookX, rightHookY, rightPanX - 70, rightPanY - 5);
  updateChainSVG('right-chain-2', rightHookX, rightHookY, rightPanX, rightPanY - 2);
  updateChainSVG('right-chain-3', rightHookX, rightHookY, rightPanX + 70, rightPanY - 5);

  dom.rightPanGroup.querySelectorAll('ellipse').forEach(el => {
    el.setAttribute('cx', rightPanX);
    el.setAttribute('cy', rightPanY);
  });

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

  const vbWidth = 900;
  const vbHeight = 480;
  const aspect = vbWidth / vbHeight;
  const rectAspect = svgRect.width / svgRect.height;

  let scale, offsetX, offsetY;
  if (rectAspect > aspect) {
    scale = svgRect.height / vbHeight;
    offsetX = (svgRect.width - vbWidth * scale) / 2;
    offsetY = 0;
  } else {
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
// 15. WIN CONDITIONS & SOLVING LOGIC
// -------------------------------------------------------------
function checkWinCondition(leftTotal, rightTotal) {
  if (leftTotal === 0 && rightTotal === 0) return;

  const level = LEVELS[state.currentLevelIndex];

  if (leftTotal !== rightTotal) {
    if (rightTotal > 0) {
      triggerFriendlyWobble();
    }
    return;
  }

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
  audio.playWin();
  state.completedLevels[level.id] = 3;
  saveProgress();

  const objName = (level.leftItems && level.leftItems[0]) ? getItemLocalizedName(level.leftItems[0]) : '';
  showCelebration(
    leftTotal,
    rightTotal,
    `${objName} (${leftTotal} kg) = ${rightTotal} kg`
  );
}

function handleTwoWaysSolve(leftTotal, rightTotal, level) {
  const currentComb = state.rightPan.map(i => i.weight).sort().join('+');

  if (state.twoWaysHistory.length === 0) {
    state.twoWaysHistory.push(currentComb);
    dom.way1Badge.className = 'challenge-badge completed';
    dom.way1Badge.textContent = `${I18N[currentLang].way_1}: ✅ (${currentComb} kg)`;
    dom.way2Badge.className = 'challenge-badge active';
    dom.way2Badge.textContent = `${I18N[currentLang].way_2}: ⏳`;

    audio.playWin();
    updateMascotSpeech(I18N[currentLang].way_1_done);

    setTimeout(() => {
      while (state.rightPan.length > 0) {
        state.tray.push(state.rightPan.pop());
      }
      renderAllItems();
      recalculateBalance();
    }, 1400);

  } else if (state.twoWaysHistory.length === 1) {
    const prevComb = state.twoWaysHistory[0];
    if (currentComb === prevComb) {
      updateMascotSpeech(
        currentLang === 'hi'
          ? "यह तरीका पहले इस्तेमाल हो चुका है! कोई अलग बाट चुनो।"
          : (currentLang === 'mr'
             ? "ही पद्धत आधी वापरली आहे! वेगळी वजने निवडा."
             : "You already tried this combo! Find a different way!")
      );
      triggerFriendlyWobble();
    } else {
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
  const leftStr = state.leftPan.map(i => (i.emoji || '') + ' ' + (getItemLocalizedName(i) || i.weight + ' kg')).join(' + ');
  const rightStr = state.rightPan.map(i => i.weight + ' kg').join(' + ');

  dom.winEquation.textContent = customEq || `${leftStr} = ${rightStr}`;
  dom.modalCelebration.classList.remove('hidden');

  spawnConfetti();
  updateMascotSpeech(I18N[currentLang].win_title);
}

function spawnConfetti() {
  dom.confettiContainer.innerHTML = '';
  const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    dom.confettiContainer.appendChild(piece);
  }
}

// -------------------------------------------------------------
// 16. BOOTSTRAP
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  initGame();
});
