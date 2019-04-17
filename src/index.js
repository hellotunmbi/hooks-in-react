import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [steps, setSteps] = useState(1);

  const handleClick = () => {
    setCount(Number(count) + Number(steps));
    setTime(new Date());
  };

  const handleChange = e => {
    setSteps(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hooks in React</h1>

      <input
        type="text"
        name="steps"
        placeholder="Enter Steps"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Click Me</button>

      <h3>Number of counts: {count}</h3>
      <h3>Number of steps: {steps}</h3>
      <h3>
        Last clicked on: {time.getHours()}:{time.getMinutes()}:
        {time.getSeconds()}
      </h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
