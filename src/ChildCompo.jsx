import React, { useEffect, useState } from "react";

const ChildCompo = ({ increment }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <div>
      <h1>value form child compo {value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click child compo
      </button>
      <button onClick={increment}>click</button>
    </div>
  );
};

export default ChildCompo;
