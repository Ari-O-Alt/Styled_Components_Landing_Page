import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjsOne } from "./Data";

const HomePage = () => {
  return (
    <React.Fragment>
      <InfoSection lightBg={homeObjsOne} />
    </React.Fragment>
  );
};

export default HomePage;
