import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>{isOn ? "On" : "Off"}</p>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Toggle;
