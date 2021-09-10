import React from "react";
import Headroom from "react-headroom";
import Navbar from "./Navbar";
import Category from "./Category";
import "./style/header.css";

const Header = () => {
  return (
    <Headroom className="bg-white dark:bg-black">
      <Navbar />
      <Category />
    </Headroom>
  );
};

export default Header;
