import React, { useEffect, useState } from "react";

const DebouncedInput = () => {
  const [text, setText] = useState("");
  const [debouncedText, setDebounced] = useState(text);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(text);
    }, 5000);
    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  useEffect(() => {
    if (debouncedText) {
      console.log("Making API call with ", debouncedText);
    }
  }, [debouncedText]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default DebouncedInput;
