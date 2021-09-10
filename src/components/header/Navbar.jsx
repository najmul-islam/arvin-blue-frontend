import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useDarkMode from "../../hook/useDarkMode";
import { FaSearch, FaSun, FaMoon, FaAlignRight, FaTimes } from "react-icons/fa";
import "./style/navbar.css";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav className="navbar navbar-expand-md dark:bg-black border-b border-black py-3">
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
          <ul className="navbar-nav m-auto mb-2 mb-md-0 ">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link mx-0 mx-md-2 text-gray-500 dark:text-white:500 hover:text-black"
                activeClassName="text-black border-b-2 border-black dark:text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                className="nav-link mx-0 mx-md-2 text-gray-500 hover:text-black"
                activeClassName="text-black border-b-2 border-black"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-link mx-0 mx-md-2 text-gray-500 hover:text-black"
                activeClassName="text-black border-b-2 border-black"
              >
                About
              </NavLink>
            </li>
          </ul>
          <div onClick={() => setTheme(colorTheme)} className="">
            {colorTheme === "light" ? (
              <FaSun className="fs-4 mx-md-4 mx-0 my-md-0 my-4 d-md-inline-block d-block cursor-pointer text-white" />
            ) : (
              <FaMoon className="fs-4 mx-md-4 mx-0 my-md-0 my-4 d-md-inline-block d-block cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
