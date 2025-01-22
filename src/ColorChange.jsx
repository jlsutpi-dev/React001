// import React, { useEffect, useState } from "react";

// const ColorChange = () => {
//   const [color, setColor] = useState("red");
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleChange = () => {
//       window.addEventListener("resize", setWindowWidth(window.innerWidth));
//     };

//     const debouncedResize = () => {
//       let timeoutId;
//       return () => {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(handleChange, 500);
//       };
//     };
//     const debouncedHandleResize = debouncedResize();
//     if (windowWidth > 200) {
//       setColor("blue");
//     } else if (windowWidth <= 400) {
//       setColor("green");
//     }
//     window.addEventListener("resize", debouncedHandleResize);
//     return () => {
//       window.removeEventListener("resize", debouncedHandleResize);
//     };
//   }, []);
//   return (
//     <div>
//       <h1>
//         {" "}
//         Window inner witdth = {windowWidth},,,{color}
//       </h1>
//     </div>
//   );
// };

// export default ColorChange;

import { useEffect, useState } from "react";

export const ExampleComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const debouncedResize = (() => {
      let timeoutId;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => handleResize(), 500);
      };
    })();

    window.addEventListener("resize", debouncedResize);

    // Set the initial color based on the current window width
    if (windowWidth > 200) {
      setColor("blue");
    } else if (windowWidth <= 400) {
      setColor("green");
    }

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [windowWidth]);

  return (
    <div style={{ backgroundColor: color }}>Window Width: {windowWidth}</div>
  );
};
