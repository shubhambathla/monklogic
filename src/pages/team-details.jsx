import React from "react";
import SEO from "../common/seo";
import TeamDetails from "../components/team-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <TeamDetails /> 
    </Wrapper>
  );
};

export default index;
