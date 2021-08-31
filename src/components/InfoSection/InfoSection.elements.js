import styled from "styled-components";

export const StyledInfoSection = styled.div`
  color: #fff;
  padding: 160px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;
