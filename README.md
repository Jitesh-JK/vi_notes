# Vi-Notes

A simple React + TypeScript note-taking app that tracks typing behavior and detects whether content is typed or pasted. Now deployed on Vercel for live usage!

---

## Live Demo

🌐 [View Vi-Notes on Vercel](https://vi-notes-aj.vercel.app/)

---

## Features

- Track keystrokes, backspaces, and typing duration  
- Detect pasted content  
- Calculate authenticity score in real-time  
- Display character and word counts  
- Copy, paste, and clear text functionality  
- Dark / Light mode toggle  
- Save writing session data locally (JSON export)  

---

## Authenticity Score

The score is calculated based on:

- Paste usage  
- Typing speed  
- Backspace usage  
- Total key presses  

**Result interpretation:**

- **High score** → Likely human-written  
- **Low score** → Likely AI-generated or pasted content  

---

## Tech Stack

- React  
- TypeScript  
- React Hooks  

---

## Setup (Local Development)

```bash
# Clone the repository
git clone https://github.com/Jitesh-JK/Vi_Notes_Anmol_Jitesh.git
cd vi-notes

# Install dependencies
npm install

# Start the development server
npm run dev
