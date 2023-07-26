import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputData, setInputData] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        onChange={(event) => setInputData(event.target.value)}
      />
      <ul>
        <List inputData={inputData} />
      </ul>
    </div>
  );
}

export default App;
