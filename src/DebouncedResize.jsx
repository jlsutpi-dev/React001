import React, { useEffect, useState } from "react";
const DebouncedResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [color, setColor] = useState("red");
  useEffect(() => {
    const handleResize = () => {
      if (windowWidth < 200) {
        setColor("blue");
      } else {
        setColor("green");
      }
      setWindowWidth(window.innerWidth);
    };
    const debouncedResize = () => {
      let timeoutId;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleResize, 500);
      };
    };
    const debouncedHandleResize = debouncedResize();

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Window With :{windowWidth}</h1>
    </div>
  );
};

export default DebouncedResize;
