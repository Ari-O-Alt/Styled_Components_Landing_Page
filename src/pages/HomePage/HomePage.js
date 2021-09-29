import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjsOne } from "./Data";

const HomePage = () => {
  return (
    <React.Fragment>
      <InfoSection styles={homeObjsOne} />
    </React.Fragment>
  );
};

export default HomePage;
