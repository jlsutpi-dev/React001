import React from "react";

const ChildCompo = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>click</button>
    </div>
  );
};

export default ChildCompo;
