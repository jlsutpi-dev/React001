import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <p>the current theme is {theme}</p>
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          click
        </button>
      </div>
    </div>
  );
};

export default ThemeComponent;
