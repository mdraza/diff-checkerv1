import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="text-white">
      <button className="" onClick={handleThemeSwitch}>
        {theme === "dark" ? (
          <MdOutlineDarkMode className="text-2xl md:text-3xl" />
        ) : (
          <MdOutlineLightMode className="text-2xl md:text-3xl" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
