import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import ThemeButton from "./ThemeButton";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import "./style/navbar.css";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-md bg-white dark:bg-black border-b border-black py-3">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand fs-2">
          <img src="images/logo1.png" alt="logo" className="navbar__logo" />
        </NavLink>
        <button
          className="navbar-toggler shadow-none text-gray-400"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span>
            {isNavCollapsed ? (
              <FaAlignRight className="fs-2 text-gray-400 hamburge" />
            ) : (
              <FaTimes className="fs-2 text-gray-400 " />
            )}
          </span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <NavItem />
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
