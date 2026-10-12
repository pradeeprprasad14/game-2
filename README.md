# ⚖️ Tarazu: The Balance Scale Game (Classes 1-3)
### पारंपारिक भारतीय तराजू खेळ | पारंपरिक भारतीय तराजू का खेल

An interactive, responsive 2D drag-and-drop educational game that brings the traditional Indian balance scale (*tarazu* / वजन काटा) to life. Designed specifically for early primary school learners (Class 1–3) to develop number sense, addition, comparison, and foundational algebraic thinking through joyful play.

---

## 🎮 How to Play
1. **Open `index.html`** in any modern web browser (Google Chrome, Edge, Safari, Firefox) on tablet, phone, or laptop.
2. **Listen to Mithoo 🦜:** Tap the speaker 🔊 button anytime to hear audio instructions in **English, Hindi, or Marathi**.
3. **Drag or Tap Weights:**
   - Drag brass *batta* weights (1 kg, 2 kg, 3 kg, 4 kg, 5 kg) or market produce (🍉 Watermelon, 🥥 Coconut, 🎃 Pumpkin, 🥭 Mango) onto the pans.
   - **Tap-to-place:** Kids can also tap a weight from the tray to automatically place it on the scale.
4. **Watch the Scale Tilt:**
   - The beam tilts with smooth, realistic damped spring physics proportional to weight difference.
   - When both sides are equal, the beam settles level, the central jewel lights up green, and celebratory stars burst forth!

---

## 🧠 Educational Progression (Class 1 to 3 Curriculum)

- **Stage 1: Basic Balance (Class 1)**
  - Direct 1-to-1 matching and simple sums ($1 + 2 = 3$).
  - **Visual Counting Dots:** Weights include dot patterns matching the number so non-readers can count dots directly!
- **Stage 2: Indian Bazaar Produce (Class 2)**
  - Real-world market context: weighing fresh coconuts, pumpkins, mango baskets, and watermelons using standard brass batta weights.
- **Stage 3: Mystery Box ❓ (Early Algebra, Class 2–3)**
  - Unknown weight in a mystery box ($? + 1 = 4$).
  - When balanced, the box unlocks to reveal the mystery value!
- **Stage 4: "Two Different Ways" Challenge (Class 3)**
  - Find two distinct combinations to balance the same weight (e.g. balance 6 kg with $3 + 3$, then find another way: $4 + 2$).
- **Free Play / Sandbox Mode (⚖️):**
  - Open exploration where kids and teachers can test any combination freely.

---

## 🌟 Key Design Features

1. **Voice and Visuals First:**
   - Browser **Web Speech API** for spoken narration in Hindi (`hi-IN`), Marathi (`mr-IN`), and English (`en-IN`).
   - "Mithoo" the parrot speaks prompts and animates when talking.
   - Counting dots on weights for young kids who are still learning numerals.
2. **Bilingual / Trilingual Toggle:**
   - Instant language buttons for **English (EN)**, **हिन्दी (Hindi)**, and **मराठी (Marathi)**.
3. **Friendly Failure:**
   - No buzzers, no penalties, and no red cross marks!
   - Unequal scale attempts trigger a gentle cartoon wobble and friendly voice guidance ("Left side is heavier! Add more to the right").
4. **Procedural Web Audio:**
   - Zero external audio files required! Synthesizes authentic brass clinks, wobble tones, and Indian pentatonic celebration chimes directly via the Web Audio API.
5. **Big Touch Targets:**
   - Generous drop zones with dashed outlines on hover.
   - Touch drag & drop and pointer events tested for iPads, Android tablets, and smartphones.
