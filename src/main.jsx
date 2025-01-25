import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
