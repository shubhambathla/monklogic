import React from "react";
import SEO from "../../common/seo";
import FutureOfFinance from "../../components/blog-details/future-of-finance";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <FutureOfFinance />
    </Wrapper>
  );
};

export default index;
