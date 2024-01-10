import React from "react";
import SEO from "../common/seo";
import ServiceDetailsDigitalmarketing from "../components/service-details/digital-marketing";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <ServiceDetailsDigitalmarketing/>
    </Wrapper>
  );
};

export default index;
