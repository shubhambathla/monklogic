import React from "react";
import SEO from "../../common/seo";
import CompareTopCloudServices from "../../components/blog-details/compare-top-cloud-services";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <CompareTopCloudServices />
    </Wrapper>
  );
};

export default index;
