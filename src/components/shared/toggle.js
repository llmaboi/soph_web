import React from "react";
import { ThemeContext } from "./themeContext";

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <div className="mx-0 my-auto" style={{ height: "35px" }}>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="darkToggle"
          className="block toggle-checkbox absolute w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        ></input>
        <label
          htmlFor="darkToggle"
          className="block toggle-label overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <label htmlFor="darkToggle" className="text-xs text-gray-700">
        Dark Mode
      </label>
    </div>
  );
};
