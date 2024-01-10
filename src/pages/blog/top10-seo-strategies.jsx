import React from "react";
import SEO from "../../common/seo";
import Top10SeoStrategies from "../../components/blog-details/top10-seo-strategies";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <Top10SeoStrategies />
    </Wrapper>
  );
};

export default index;
