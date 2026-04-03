import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

function App() {
  const [text, setText] = useState<string>("");
  const [keyCount, setKeyCount] = useState<number>(0);
  const [backspaceCount, setBackspaceCount] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const [isPasted, setIsPasted] = useState<boolean>(false);
  const [pasteCount, setPasteCount] = useState<number>(0);

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const hasStarted = useRef<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!hasStarted.current) {
      setStartTime(Date.now());
      hasStarted.current = true;
    }

    setKeyCount((prev) => prev + 1);

    if (e.key === "Backspace") {
      setBackspaceCount((prev) => prev + 1);
    }
  };

  const handlePaste = () => {
    setIsPasted(true);
    setPasteCount((prev) => prev + 1);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const getTimeElapsed = () => {
    if (!startTime) return 0;
    return Math.floor((Date.now() - startTime) / 1000);
  };

  const calculateScore = () => {
    let score = 100;
    const time = getTimeElapsed();

    if (pasteCount > 0) score -= 40;
    if (backspaceCount === 0 && text.length > 20) score -= 15;

    const speed = time > 0 ? text.length / (time / 60) : 0;
    if (speed > 200) score -= 15;

    if (keyCount < text.length) score -= 10;
    if (time < 5 && text.length > 50) score -= 10;

    if (score < 0) score = 0;

    return score;
  };

  const score = calculateScore();

  const getMessage = () => {
    if (score > 80) return "✅ Likely Human Written";
    if (score > 50) return "⚠️ Some Suspicious Activity";
    return "❌ Likely AI / Pasted Content";
  };

  // 🎨 Dynamic Styles
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial",
    backgroundColor: darkMode ? "#121212" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
  };

  const textareaStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  };

  return (
    <div style={containerStyle}>
      <h1>Vi-Notes</h1>

      <button onClick={toggleTheme} style={{ marginBottom: "10px" }}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <textarea
        rows={15}
        placeholder="Start typing your notes..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        style={textareaStyle}
      />

      <div style={{ marginTop: "15px" }}>
        <p><strong>Characters:</strong> {text.length}</p>
        <p>
          <strong>Words:</strong>{" "}
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
        </p>
        <p><strong>Total Keys Pressed:</strong> {keyCount}</p>
        <p><strong>Backspaces:</strong> {backspaceCount}</p>
        <p><strong>Paste Count:</strong> {pasteCount}</p>
        <p><strong>Time (seconds):</strong> {getTimeElapsed()}</p>

        {isPasted && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            ⚠️ Pasted content detected!
          </p>
        )}

        <hr />

        <h2>Authenticity Score: {score}%</h2>
        <p><strong>{getMessage()}</strong></p>
      </div>
    </div>
  );
}

export default App;