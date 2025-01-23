import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  //   const countRef = useRef(count);
  const increment = () => {
    // setCount(count + 1);
    // countRef.current += 1;
    // setCount(countRef.current);
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("from useEffect");
  }, []);
  return (
    <div>
      <p>count :{count} and</p>
      <button
        onClick={() => {
          increment();
        }}
      >
        click
      </button>
    </div>
  );
};

export default Timer;
