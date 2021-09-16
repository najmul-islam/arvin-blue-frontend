import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../theme/Theme";
import { FaSun, FaRegSun, FaMoon, FaRegMoon } from "react-icons/fa";

const ThemeButton = () => {
  const [theme, toggleTheme] = useTheme();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div onClick={toggleTheme} onMouseEnter={onHover} onMouseLeave={onLeave}>
        {theme === "light" ? (
          <span>{hover ? <Moon /> : <RegMoon />} </span>
        ) : (
          <span>{hover ? <Sun /> : <RegSun />}</span>
        )}
      </div>
    </>
  );
};

export default ThemeButton;

const Sun = styled(FaSun)`
  transition: all 0.5s linear;
  cursor: pointer;
  font-size: 22px;
`;
const RegSun = styled(FaRegSun)`
  transition: all 0.5s linear;
  cursor: pointer;
  font-size: 22px;
`;

const Moon = styled(FaMoon)`
  transition: all 0.5s linear;
  cursor: pointer;
  font-size: 22px;
`;

const RegMoon = styled(FaRegMoon)`
  transition: all 0.5s linear;
  cursor: pointer;
  font-size: 22px;
`;
