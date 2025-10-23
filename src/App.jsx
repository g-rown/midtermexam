import React, { useState } from "react";
import "./App.css";

// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [displayValue, setDisplayValue] = useState("10 Things That Require Zero Talent");

  const handleClick = (value) => {
    setDisplayValue(value);
  };

return (
  <div className="container">
    <div className="calculator">
      <h1 className="header">RONIAN GULLES - IT3A</h1>

      <Display value={displayValue} />

      <div className="buttons">

        <Button label="7" onClick={() => handleClick("Being Coachable")} />
        <Button label="8" onClick={() => handleClick("Doing A Little Extra")} />
        <Button label="9" onClick={() => handleClick("Being Prepared")} />

        <Button label="4" onClick={() => handleClick("Having A Positive Attitude")} />
        <Button label="5" onClick={() => handleClick("Being Passionate")} />
        <Button label="6" onClick={() => handleClick("Using Good Body Language")} />

        <Button label="1" onClick={() => handleClick("Being On Time")} />
        <Button label="2" onClick={() => handleClick("Making An Effort")} />
        <Button label="3" onClick={() => handleClick("Being High Energy")} />

        <Button label="NAME" onClick={() => handleClick("RONIAN GULLES")} />
        <Button label="0" onClick={() => handleClick("Having A Strong Work Ethic")} />
        <Button label="SUBJ" onClick={() => handleClick("C-PCIT9")} />
      </div>
    </div>
  </div>
);
}