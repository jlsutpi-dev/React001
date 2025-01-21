import React from "react";
import UserCounter from "./userCounter";

const CustomCounter = () => {
  const [count, increment] = UserCounter();
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={increment}>click</button>
    </div>
  );
};

export default CustomCounter;
