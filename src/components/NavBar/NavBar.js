import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledNavBarLogo,
  StyledNavBarIcon,
  HamburgerMenuIcon,
} from "./NavBar.elements";

const NavBar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleIconToggle = () => {
    setIsClicked(!isClicked);
  };
  return (
    <React.Fragment>
      <StyledNavBar>
        <StyledNavBarContainer>
          <StyledNavBarLogo to="/">
            <StyledNavBarIcon />
            ULTRA
          </StyledNavBarLogo>
          <HamburgerMenuIcon onClick={handleIconToggle}>
            {isClicked ? <FaTimes /> : <FaBars />}
          </HamburgerMenuIcon>
        </StyledNavBarContainer>
      </StyledNavBar>
    </React.Fragment>
  );
};

export default NavBar;
