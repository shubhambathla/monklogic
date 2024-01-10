import React from "react";
import SEO from "../common/seo";
import ServiceDetailsWebDev from "../components/service-details/web-development";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <ServiceDetailsWebDev/>
    </Wrapper>
  );
};

export default index;
