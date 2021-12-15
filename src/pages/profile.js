import React from "react";

import BusinessCores from "../components/profile/BusinessCores";
import CoreValues from "../components/profile/CoreValues";
import Description from "../components/profile/Description";
import Header from "../components/profile/Header";
import History from "../components/profile/History";
import Map from "../components/profile/Map";
import Mission from "../components/profile/Mission";
// import OrganizationStructure from "../components/profile/OrganizationStructure.js";
import Team from "../components/profile/Team";
import Vision from "../components/profile/Vision";

export default function Profile({ profileRefs, scrollSmoothHandler }) {
  return (
    <div>
      <Header {...{ profileRefs, scrollSmoothHandler }} />
      <Description ref={profileRefs.businessRef} />
      <BusinessCores />
      <Vision ref={profileRefs.visionRef} />
      <Mission />
      <CoreValues ref={profileRefs.valuesRef} />
      <History ref={profileRefs.historyRef} />
      <Team ref={profileRefs.teamRef} />
      {/* <OrganizationStructure /> */}
      <Map />
    </div>
  );
}
