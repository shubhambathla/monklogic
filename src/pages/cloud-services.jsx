import React from "react";
import SEO from "../common/seo";
import ServiceDetailsCloudServices from "../components/service-details/cloud-services";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <ServiceDetailsCloudServices/>
    </Wrapper>
  );
};

export default index;
