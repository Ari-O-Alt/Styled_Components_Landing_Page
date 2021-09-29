import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { GlobalStyledButton } from "../../globalStyles";
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledNavBarLogo,
  StyledNavBarIcon,
  StyledHamburgerMenuIcon,
  StyledNavBarMenu,
  StyledNavBarItem,
  StyledLink,
  StyledNavBarItemBtn,
  StyledNavBtnLink,
} from "./NavBar.elements";

const NavBar = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [button, setButton] = React.useState(true);

  const handleIconToggle = () => {
    setIsClicked(!isClicked);
  };

  const handleShowButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    handleShowButton();
  }, []);

  window.addEventListener("resize", handleShowButton);
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

              <StyledNavBarItemBtn>
                {button ? (
                  <StyledNavBtnLink to="/sign-up">
                    <GlobalStyledButton primary>SIGN UP</GlobalStyledButton>
                  </StyledNavBtnLink>
                ) : (
                  <StyledNavBtnLink to="/sign-up">
                    <GlobalStyledButton primary fontBig>
                      SIGN UP
                    </GlobalStyledButton>
                  </StyledNavBtnLink>
                )}
              </StyledNavBarItemBtn>
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
