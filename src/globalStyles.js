import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// styles applied to all pages
* {
box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}`;

// we create a container that can be styled differently
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const StyledButton = styled.button``;

export default GlobalStyle;
