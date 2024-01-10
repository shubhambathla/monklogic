import React from "react";
import SEO from "../../common/seo";
import FutureOfEcommerce from "../../components/blog-details/future-of-ecommerce";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <FutureOfEcommerce />
    </Wrapper>
  );
};

export default index;
