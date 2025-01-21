import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <div></div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
};

export default TextInput;
