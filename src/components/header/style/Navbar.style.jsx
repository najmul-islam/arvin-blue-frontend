import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  @media (max-width: 768px) {
    margin-top: -25px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    position: absolute;
    width: 150px;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
  }
`;

export const Menubar = styled.div`
  display: none;
  user-select: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    left: 0px;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const Navmenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: end;
  z-index: 999;
  user-select: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-top: 0.5px solid;
    width: 150%;
    position: absolute;
    top: 80px;
    left: -200%;
    opacity: 1;
    padding: 0;
    padding: 30px 0;
    transition: all 0.5s ease;

    ${({ active }) =>
      active &&
      `
      opacity: 1;
      left:-25%;
      transition: all 0.5s ease;
    `}
  }
`;
export const Li = styled.li`
  display: inline-block;
  position: relative;
  padding-bottom: 3px;
  margin-right: 10px;
  &::last-child {
    margin-right: 0;
  }
  &:after {
    content: "";
    display: block;
    margin: auto;
    height: 2px;
    width: 0px;
    background: transparent;
    transition: width 0.3s ease, background-color 0.5s ease;
  }
  &:hover:after {
    width: 70%;
  }

  @media (max-width: 768px) {
    &:hover:after {
      width: 10%;
      background: #3e3e5f;
    }
  }
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    text-align: center;
    display: block;
    padding: 15px 0;

    &:hover {
      border-radius: 0;
    }
  }
`;
