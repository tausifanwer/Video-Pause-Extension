# 🎬 Video Pause Extension

A lightweight Chrome Extension that automatically **pauses** and **mutes** YouTube videos when you switch tabs and **resumes playback (muted)** when you return. Designed to work seamlessly with YouTube's Single Page Application (SPA) behavior.

---

## ✨ Features

- 🔄 Detects route changes in YouTube's SPA (no reload required)
- ▶️ Auto-plays video when the tab becomes visible (muted)
- ⏸️ Pauses video when the tab becomes hidden
- 🎯 Works only on YouTube's `/watch` pages
- 🧠 Prevents duplicate event listeners

---

## 🛠 How It Works

The extension uses a `MutationObserver` to monitor YouTube’s dynamic routing. When the video page (`/watch`) is detected:

- A `setInterval` checks for the presence of the video player.
- Once found, a `visibilitychange` event listener is attached to pause/resume the video accordingly.

---

## 🧩 Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top-right corner).
4. Click **Load unpacked** and select the project folder.
5. Navigate to a YouTube video to see the extension in action.

---

🧑‍💻 Author
Tausif Anwer
💻 FullStack Developer | 💡 Tech Enthusiast | 🎓 CSE Graduate

---

📄 License
This project is open-source under the MIT License.
