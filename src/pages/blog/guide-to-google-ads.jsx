import React from "react";
import SEO from "../../common/seo";
import GuideToGoogleAds from "../../components/blog-details/guide-to-google-ads";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <GuideToGoogleAds />
    </Wrapper>
  );
};

export default index;
