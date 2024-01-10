import React from "react";
import SEO from "../common/seo";
import ServiceDetailsContentCreation from "../components/service-details/content-creation";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <ServiceDetailsContentCreation/>
    </Wrapper>
  );
};

export default index;
