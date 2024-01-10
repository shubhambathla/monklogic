import React from "react";
import SEO from "../common/seo";
import ServiceDetailsCryptoSolutions from "../components/service-details/crypto-solutions";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <ServiceDetailsCryptoSolutions/>
    </Wrapper>
  );
};

export default index;
