import React from "react";
import SEO from "../common/seo";
import ServiceDetailsWebsiteDesgning from "../components/service-details/website-designing";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <ServiceDetailsWebsiteDesgning/>
    </Wrapper>
  );
};

export default index;
