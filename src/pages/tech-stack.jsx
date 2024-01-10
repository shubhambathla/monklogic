import React from "react";
import SEO from "../common/seo";
import Project from "../components/tech-stack";
import Wrapper from "../layout/wrapper";

const indx = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <Project />
    </Wrapper>
  );
};

export default indx;
