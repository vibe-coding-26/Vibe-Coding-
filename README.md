# Transit (Vibe Coding)

> **"The Interface That Feels Your Vibe."**

A **Generative UI** experiment where the entire dashboard—layout, colors, fonts, and components—restructures itself in real-time based on the user's intent and emotional state, powered by a Local LLM (Llama 3 via Ollama).

---

## 🚀 Concept & Problem Statement

**The Challenge:** Modern dashboards are static. Whether you are stressed, hyper-productive, or brainstorming, the UI remains the same.
**The Solution:** A "Chameleon" interface that adapts.
- **User says:** *"I am stressed."* -> **App becomes:** A calming Zen garden with breathing widgets.
- **User says:** *"Show me the money!"* -> **App becomes:** A high-contrast financial terminal.

---

## ✨ Key Features

### 1. Intent-Based Rendering
The app doesn't just change colors (themes); it changes **functionality**.
- **Zen Mode:** Hides data, shows quotes, breathing exercises, and soft colors.
- **Beast Mode:** Shows dense data tables, stock tickers, and system metrics in neon green.
- **Creative Mode:** Shows sketchpads, color palettes, and inspiration images.

### 2. Five Distinct "Vibes" (Modes)
| Vibe | Trigger Keywords | Visual Style |
| :--- | :--- | :--- |
| **🧘 ZEN** | `stress`, `calm`, `relax`, `breathe`, `yoga` | Soft Purple, Round UI, Breathing Widget |
| **🚀 BEAST** | `work`, `code`, `data`, `money`, `stocks` | Dark Mode, Neon Green, Terminal Font |
| **🎨 CREATIVE** | `idea`, `art`, `design`, `write`, `draw` | Paper Texture, Sketchy Font, Palette |
| **🔮 CYBER** | `hack`, `cyber`, `future`, `neon` | Deep Blue/Pink, Glitch Borders |
| **🌿 NATURE** | `forest`, `plants`, `green`, `nature` | Organic Green, Leaf Texture |

### 3. Local Privacy (Zero Cloud)
- Powered by **Ollama** running locally.
- No API keys required.
- No data leaves your machine.
- Extremely fast latency.

---

## 🛠️ Architecture & How It Works

### The Workflow Loop
1.  **Input:** User types a sentence (e.g., *"I need to focus on coding"*).
2.  **Analysis (The Brain):** JavaScript sends this text to the Local LLM.
    *   *Endpoint:* `http://127.0.0.1:11434/api/generate`
    *   *Model:* `llama3`
3.  **Decision:** The AI classifies the intent into one keyword: `ZEN`, `BEAST`, `CREATIVE`, etc.
4.  **Mapping:** The app looks up the **Configuration Object** for that keyword.
5.  **Rendering:**
    *   **CSS:** The `<body>` class is swapped (e.g., `.vibe-zen`), instantly changing CSS Variables (colors, fonts).
    *   **HTML:** The `innerHTML` is wiped and replaced with the specific components for that vibe.

### The AI Prompt Strategy
We use a **Classification Prompt** rather than asking the AI to write code. This ensures 100% reliability and speed.

**The Prompt Used:**
```text
Classify intent: "{USER_INPUT}".
Options:
- ZEN (calm, stress, yoga)
- BEAST (work, code, data)
- CREATIVE (art, idea, write)
- CYBER (hack, future, neon, tech)
- NATURE (forest, plants, outside, green)

Output ONLY the word.
```

---

## 📦 Installation & Setup

### Prerequisites
1.  **Ollama** installed on your machine. ([Download Here](https://ollama.com))
2.  **Llama 3** model pulled:
    ```bash
    ollama pull llama3
    ```

### Running the App
1.  **Configure CORS (Important):**
    By default, browsers block access to local AI. Run this in PowerShell to allow it:
    ```powershell
    [System.Environment]::SetEnvironmentVariable('OLLAMA_ORIGINS', '*', 'User')
    ```
    *Restart Ollama after running this command.*

2.  **Launch:**
    Simply open `index.html` in your browser. No `npm install` or server required!

---

## 📂 Project Structure

```
chameleon-dashboard/
├── index.html      # The skeleton structure
├── style.css       # The "Skin" (CSS Variables for all vibes)
├── app.js          # The "Brain" (AI connection, Logic, Component Library)
└── README.md       # Documentation
```

---

## 🔮 Future Improvements
- **Voice Input:** Speak your vibe instead of typing.
- **Music Integration:** Auto-play Spotify playlists (Lo-Fi for Zen, Phonk for Beast).
- **Smart Home:** Connect "Zen Mode" to dim your actual room lights (via Philips Hue API).

---

*Built with ❤️ by Aadii using Vanilla JS & Llama 3.*
