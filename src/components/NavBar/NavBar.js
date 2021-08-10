import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledNavBarLogo,
  StyledNavBarIcon,
  StyledHamburgerMenuIcon,
} from "./NavBar.elements";

const NavBar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleIconToggle = () => {
    setIsClicked(!isClicked);
  };
  return (
    <React.Fragment>
      {/*  ---------------------------------------------------------------------- gives the same styling to all icons */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/*  ------------------------------------------------------------------------------- navbar start */}
        <StyledNavBar>
          {/*  --------------------------------------------------------------------- navbar container start */}
          <StyledNavBarContainer>
            {/*  ------------------------------------------------------------------------------- navbar logo */}
            <StyledNavBarLogo to="/">
              {/*  ----------------------------------------------------------------------------- navbar icon */}
              <StyledNavBarIcon />
              ULTRA
            </StyledNavBarLogo>
            {/*  ------------------------------------------------------------------------ hamburger menu icon */}
            <StyledHamburgerMenuIcon onClick={handleIconToggle}>
              {isClicked ? <FaTimes /> : <FaBars />}
            </StyledHamburgerMenuIcon>
            {/*  ---------------------------------------------------------------------- navbar container end */}
          </StyledNavBarContainer>
          {/*  ----------------------------------------------------------------------------------- navbar end */}
        </StyledNavBar>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default NavBar;
