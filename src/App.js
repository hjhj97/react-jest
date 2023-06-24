import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <button data-testid="minus-button" onClick={() => setCounter((prev) => prev - 1)}>
          -
        </button>
        <button data-testid="plus-button" onClick={() => setCounter((prev) => prev + 1)}>
          +
        </button>
        <h3 data-testid="counter">{counter}</h3>
      </header>
    </div>
  );
}

export default App;
