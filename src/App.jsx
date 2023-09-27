import { useState } from "react";

import "./App.css";

function App() {
  const [bgCol, setBgCol] = useState("red");
  const [input, setInput] = useState("");
  return (
    <body style={{ backgroundColor: bgCol }}>
      <div className="input">
        <input type="color" onChange={(e) => setBgCol(e.target.value)} />
        <div className="searchCol">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={() => setBgCol(input)}>Change!</button>
        </div>
      </div>
      <div>
        <button onClick={() => setBgCol("red")}>Red</button>
        <button onClick={() => setBgCol("pink")}>Pink</button>
        <button onClick={() => setBgCol("green")}>Green</button>
        <button onClick={() => setBgCol("black")}>Black</button>
        <button onClick={() => setBgCol("blue")}>Blue</button>
      </div>
    </body>
  );
}

export default App;
