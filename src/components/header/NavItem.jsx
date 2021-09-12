import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = () => {
  return (
    <>
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
    </>
  );
};

export default NavItem;
