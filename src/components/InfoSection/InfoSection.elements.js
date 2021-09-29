import styled from "styled-components";

export const StyledInfoSection = styled.div`
  color: #fff;
  padding: 160px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const StyledInfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const StyledInfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StyledTextWrapper = styled.div`
  max-width: 54px;
  padding: 0 0 60px 0;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
