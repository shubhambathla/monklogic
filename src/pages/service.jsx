import React from "react";
import SEO from "../common/seo";
import Service from "../components/service";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <Service />
    </Wrapper>
  );
};

export default index;
