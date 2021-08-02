import React from "react";
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledNavBarLogo,
  StyledNavBarIcon,
} from "./NavBar.elements";

const NavBar = () => {
  return (
    <React.Fragment>
      <StyledNavBar>
        <StyledNavBarContainer>
          <StyledNavBarLogo to="/">
            <StyledNavBarIcon />
            ULTRA
          </StyledNavBarLogo>
        </StyledNavBarContainer>
      </StyledNavBar>
    </React.Fragment>
  );
};

export default NavBar;
