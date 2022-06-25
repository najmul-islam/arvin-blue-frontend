import React, { useState, useEffect, useRef } from "react";
import { usePost } from "../../context/PostsContext";
import ThemeButton from "./ThemeButton";
import {
  Nav,
  Logo,
  LogoLink,
  Menubar,
  Li,
  Navmenu,
  Navlink,
} from "./style/Navbar.style";
import { FaAlignLeft, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { handleRefresh } = usePost();

  let menuRef = useRef();

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div>
      <div className="container-md">
        <Nav>
          <LogoLink to="/">
            <Logo className="center" src="images/logo1.png" alt="logo" />
          </LogoLink>
          <Menubar onClick={handleClick}>
            {active ? <FaTimes /> : <FaAlignLeft />}
          </Menubar>
          <Navmenu ref={menuRef} active={active} className="navmenu">
            <Li className="navafter">
              <Navlink
                to="/"
                exact
                className="navlink"
                activeClassName="navactive"
              >
                Home
              </Navlink>
            </Li>
            <Li className="navafter">
              <Navlink
                to="/blog"
                className="navlink"
                activeClassName="navactive"
              >
                Blogs
              </Navlink>
            </Li>
            <Li className="navafter">
              <Navlink
                to="/about"
                exact
                className="navlink"
                activeClassName="navactive"
              >
                About
              </Navlink>
            </Li>
          </Navmenu>
          <ThemeButton />
        </Nav>
      </div>
    </div>
  );
};

export default Navbar;
