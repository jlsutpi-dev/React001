import React, { useState } from "react";

const InLineStyle = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const divStyle = {
    color: isHighlighted ? "blue" : "black",
    backgroundColor: isHighlighted ? "lightblue" : "white",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={divStyle}>
      <p>Hello I am in dynamic style</p>
      <button
        onClick={() => {
          setIsHighlighted(!isHighlighted);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default InLineStyle;
