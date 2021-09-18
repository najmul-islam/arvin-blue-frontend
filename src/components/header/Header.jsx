import React from "react";
import Headroom from "react-headroom";
import styled from "styled-components";
import Navbar from "./Navbar";

import Categories from "./Categories";

const Header = () => {
  return (
    <Headroom>
      <HeaderWrapper className="header-bg">
        <Navbar />
        <Categories />
      </HeaderWrapper>
    </Headroom>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
