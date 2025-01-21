import { useState } from "react";

const UserCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1);
    console.log(initialValue);
  };
  return [count, increment];
};

export default UserCounter;
