#  Vi-Notes

A simple React + TypeScript note-taking app that tracks typing behavior and detects whether content is typed or pasted.

---

##  Features

- Track keystrokes, backspaces, and typing time  
- Detect pasted content  
- Calculate authenticity score  
- Show character & word count  
- Copy, paste, and clear text  
- Dark / Light mode toggle  

---

##  Authenticity Score

Score is calculated based on:
- Paste usage  
- Typing speed  
- Backspace usage  
- Total key presses  

**Result:**
- High score → Likely human  
- Low score → Likely pasted/AI  

---

##  Tech Stack

- React  
- TypeScript  
- Hooks  

---

##  Setup

```bash
git clone https://github.com/your-username/vi-notes.git
cd vi-notes
npm install
npm run dev
