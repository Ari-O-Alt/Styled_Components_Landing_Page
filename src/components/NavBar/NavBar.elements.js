import styled from "styled-components";
import { GlobalStyledContainer } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

// we style a nav html tag
export const StyledNavBar = styled.nav`
  background-color: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

// we style the Container global component
export const StyledNavBarContainer = styled(GlobalStyledContainer)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  color: #fff;
`;
// we style the logo
export const StyledNavBarLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

// we style the icon next to the logo (ULTRA text)
export const StyledNavBarIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

// we style the hamburger menu icon
export const StyledHamburgerMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

// we style the menu (ul) - it's hidden when the hamburger menu icon is not clicked
export const StyledNavBarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isClicked }) => (isClicked ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

// we style each nav bar item (li)
export const StyledNavBarItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

// we style each menu item link
export const StyledLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const StyledNavBarItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const StyledNavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
