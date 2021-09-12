import React from "react";
import useDarkMode from "../../hook/useDarkMode";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
      <div onClick={() => setTheme(colorTheme)} className="">
        {colorTheme === "light" ? (
          <FaSun className="fs-4 mx-md-4 mx-0 my-md-0 my-4 d-md-inline-block d-block cursor-pointer text-white" />
        ) : (
          <FaMoon className="fs-4 mx-md-4 mx-0 my-md-0 my-4 d-md-inline-block d-block cursor-pointer" />
        )}
      </div>
    </>
  );
};

export default ThemeButton;
