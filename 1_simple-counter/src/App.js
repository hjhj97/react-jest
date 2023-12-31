import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button data-testid="minus-button" onClick={() => setCounter((prev) => prev - 1)} disabled={isDisabled}>
          -
        </button>
        <button data-testid="plus-button" onClick={() => setCounter((prev) => prev + 1)} disabled={isDisabled}>
          +
        </button>
        <h3 data-testid="counter">{counter}</h3>
        <button
          data-testid="on/off-button"
          style={{ backgroundColor: "blue" }}
          onClick={() => setIsDisabled((prev) => !prev)}
        ></button>
      </header>
    </div>
  );
}

export default App;
