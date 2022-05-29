import React, { useState } from "react";
import ReactDOM from "react-dom";

function Toggle() {
  const [isOn, setIsOn] = useState(true);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <button id="btn" onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
