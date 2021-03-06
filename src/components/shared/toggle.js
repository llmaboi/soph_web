import React from "react";
import { ThemeContext } from "./themeContext";

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <div className="mx-0 my-auto">
      <div className="toggle-under relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="darkToggle"
          className="toggle-circle block toggle-checkbox absolute rounded-full bg-gray-200 border-4 appearance-none cursor-pointer"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        ></input>
        <label
          htmlFor="darkToggle"
          className="toggle-under block toggle-label overflow-hidden rounded-full bg-gray-500 cursor-pointer"
        ></label>
      </div>
      <label htmlFor="darkToggle" className="text-sm text-gray-700">
        Dark Mode
      </label>
    </div>
  );
};
