#  Transit Dashboard (Vibe Coding)

<p align="center">
  <img src="logo/logo.png" alt="Transit Logo" width="150">
</p>

> **"Sync Your Interface with Your Vibe."**

**Vibers** is a Generative UI experiment where the entire dashboard—layout, colors, fonts, and components—restructures itself in real-time based on the user's intent and emotional state, powered by a Local LLM (Llama 3 via Ollama).

---

## 🚀 Concept & Problem Statement

**The Challenge:** Modern dashboards are static. Whether you are stressed, hyper-productive, or brainstorming, the UI remains the same.
**The Solution:** **Vibers** allows your interface to shift into different states automatically based on how you feel.
- **User says:** *"I am stressed."* -> **App becomes:** A calming Zen garden.
- **User says:** *"Show me the money!"* -> **App becomes:** A high-contrast financial terminal.

---

## ✨ Key Features

### 1. Intent-Based Rendering
The app doesn't just change colors; it switches between different **functional worlds**.
- **Zen Mode:** Hides data, shows quotes, and soft colors.
- **Beast Mode:** Shows dense data tables and system metrics.
- **Creative Mode:** Shows sketchpads and color palettes.

### 2. Five Distinct "Transit" (Modes)
| Vibe | Trigger Keywords | Visual Style |
| :--- | :--- | :--- |
| **🧘 ZEN** | `stress`, `calm`, `relax`, `breathe`, `yoga` | Soft Purple, Round UI |
| **🚀 BEAST** | `work`, `code`, `data`, `money`, `stocks` | Dark Mode, Neon Green |
| **🎨 CREATIVE** | `idea`, `art`, `design`, `write`, `draw` | Paper Texture, Sketch Font |
| **🔮 CYBER** | `hack`, `cyber`, `future`, `neon` | Deep Blue/Pink, Glitch Borders |
| **🌿 NATURE** | `forest`, `plants`, `green`, `nature` | Organic Green, Leaf Texture |

---

## 🛠️ Architecture & How It Works

### The Workflow Loop
1.  **Input:** User types a sentence (e.g., *"I need to focus on coding"*).
2.  **Analysis:** JavaScript sends this text to the Local LLM (Ollama).
3.  **Decision:** The AI classifies the intent into one keyword: `ZEN`, `BEAST`, etc.
4.  **Transformation:**
    *   **CSS:** The `<body>` class is swapped, instantly changing CSS Variables.
    *   **HTML:** The dashboard switches to a new set of components.

---

## 🤖 AI System Prompt

The application uses the following prompt to guide the Local LLM's decision-making process:

```text
Classify this intent: "{user_input}". Options: ZEN, BEAST, CREATIVE, CYBER, NATURE. Output ONLY the one word.
```

---

*Built with ❤️ by Vibers using Vanilla JS & Llama 3.*