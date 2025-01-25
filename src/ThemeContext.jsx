import React, { createContext, useState } from "react";

// Declare ThemeContext outside of the component
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export ThemeContext and ThemeContextProvider
export { ThemeContext, ThemeContextProvider };
