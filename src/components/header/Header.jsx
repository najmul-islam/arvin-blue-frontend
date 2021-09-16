import React from "react";
import Headroom from "react-headroom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Category from "./Category";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <Headroom>
      <HeaderWrapper className="header-bg">
        <Navbar />
        {/* <Category /> */}
        <Sidebar />
      </HeaderWrapper>
    </Headroom>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
