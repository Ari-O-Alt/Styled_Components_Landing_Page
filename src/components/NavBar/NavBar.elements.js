import styled from "styled-components";
import { Container } from "../../globalStyles";
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
export const StyledNavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-space-between;
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
