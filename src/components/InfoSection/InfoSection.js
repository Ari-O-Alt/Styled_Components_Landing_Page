import React from "react";
import { StyledInfoSection } from "./InfoSection.elements";

const InfoSection = (props) => {
  const { lightBg } = props;
  return (
    <React.Fragment>
      <StyledInfoSection lightBg={lightBg}></StyledInfoSection>
    </React.Fragment>
  );
};

export default InfoSection;
