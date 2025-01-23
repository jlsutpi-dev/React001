// import React, { useEffect } from "react";
// import "./Overlay.css";

// const Overlay = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const overlayRef = React.useRef(null);

//   // const handleClick = (e) => {
//   //   if (overlayRef.current && !overlayRef.current.contains(e.target)) {
//   //     setIsOpen(false);
//   //   }
//   // };
//   // useEffect(() => {
//   //   if (isOpen) {
//   //     document.addEventListener("mousedown", handleClick);
//   //   } else {
//   //     document.removeEventListener("mousedown", handleClick);
//   //   }
//   //   console.log(overlayRef.current);
//   //   return () => {
//   //     document.removeEventListener("mousedown", handleClick);
//   //   };
//   // }, [isOpen]);
//   useEffect(() => {
//     console.log(overlayRef.current, "form useeffect");
//   }, []);
//   console.log(overlayRef.current);
//   return (
//     // <div className="overlay">
//     //   <div className="overlay-content">
//     //     <h1> Overlay</h1>
//     //     <button
//     //       onClick={() => {
//     //         setIsOpen(true);
//     //       }}
//     //     >
//     //       click
//     //     </button>
//     //   </div>
//     // </div>
//     // <>
//     //   <button
//     //     onClick={() => {
//     //       setIsOpen(true);
//     //     }}
//     //   >
//     //     click
//     //   </button>
//     //   {isOpen && (
//     <div style={styles.overlay}>
//       <div ref={overlayRef} style={styles.content}>
//         <h2>overlay content</h2>
//         <button
//           onClick={() => {
//             setIsOpen(false);
//           }}
//         >
//           close
//         </button>
//       </div>
//     </div>
//     // )}
//     // </>
//   );
// };

// export default Overlay;

// const styles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   content: {
//     background: "white",
//     padding: 20,
//     borderRadius: 5,
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//   },
// };

import React, { useEffect } from "react";

const Overlay = () => {
  const [name, setName] = React.useState("");
  const prevName = React.useRef("");
  useEffect(() => {
    console.log("useEffect: Updating prevName.current to", name);
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>
        my name is {name} and it used to be {prevName.current}
      </p>
    </div>
  );
};

export default Overlay;
