import React, { createContext } from "react";

const themeContext = createContext({
  dark: {
    background: "#121212",
    color: '"#E8B20E"',
  },
  light: {
    background: "#FFF",
    color: "#000",
  },
});

export default themeContext;
