import React from "react";
import { GlobalStyledContainer } from "../../globalStyles";
import {
  StyledInfoColumn,
  StyledInfoRow,
  StyledInfoSection,
  StyledTextWrapper,
} from "./InfoSection.elements";

const InfoSection = (props) => {
  const { lightBg, imgStart } = props;
  return (
    <React.Fragment>
      <StyledInfoSection lightBg={lightBg}>
        <GlobalStyledContainer>
          <StyledInfoRow imgStart={imgStart}>
            <StyledInfoColumn>
              <StyledTextWrapper>HOME PAGEEEE</StyledTextWrapper>
            </StyledInfoColumn>
          </StyledInfoRow>
        </GlobalStyledContainer>
      </StyledInfoSection>
    </React.Fragment>
  );
};

export default InfoSection;
