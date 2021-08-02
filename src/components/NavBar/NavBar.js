import React from "react";
import { StyledNavBar, StyledNavBarContainer } from "./NavBar.elements";
import { StyledButton } from "../../globalStyles";

const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <StyledNavBarContainer>
          <StyledNavBarLogo></StyledNavBarLogo>
        </StyledNavBarContainer>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
