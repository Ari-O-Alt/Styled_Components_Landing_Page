import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledNavBarLogo,
  StyledNavBarIcon,
  StyledHamburgerMenuIcon,
  StyledNavBarMenu,
  StyledNavBarItem,
  StyledLink,
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
            {/*  ------------------------------------------------------------------------ navbar menu start */}
            <StyledNavBarMenu onClick={handleIconToggle} isClicked={isClicked}>
              <StyledNavBarItem>
                <StyledLink to={"/"}>Home</StyledLink>
              </StyledNavBarItem>

              <StyledNavBarItem>
                <StyledLink to={"/about"}>About</StyledLink>
              </StyledNavBarItem>

              <StyledNavBarItem>
                <StyledLink to={"/blog"}>Blog</StyledLink>
              </StyledNavBarItem>
            </StyledNavBarMenu>
            {/*  ---------------------------------------------------------------------- navbar container end */}
          </StyledNavBarContainer>
          {/*  ----------------------------------------------------------------------------------- navbar end */}
        </StyledNavBar>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default NavBar;
