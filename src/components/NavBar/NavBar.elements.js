import styled from "styled-components";
import { Container } from "../../globalStyles";

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
