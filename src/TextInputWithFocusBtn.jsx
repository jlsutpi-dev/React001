import React, { useRef } from "react";

const TextInputWithFocusBtn = () => {
  const inputElement = useRef(null);

  const onButtonClick = () => {
    inputElement.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button
        onClick={() => {
          onButtonClick();
        }}
      >
        click
      </button>
    </div>
  );
};

export default TextInputWithFocusBtn;
