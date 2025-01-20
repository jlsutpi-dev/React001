import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ margin: "0 300px" }}>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Counter Control</h1>
      </div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <hr />
    </div>
  );
};

export default Counter;
