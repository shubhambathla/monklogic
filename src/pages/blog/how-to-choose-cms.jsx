import React from "react";
import SEO from "../../common/seo";
import HowToChooseCMS from "../../components/blog-details/how-to-choose-cms";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"MonkLogic - We Aim Big"} />
      <HowToChooseCMS />
    </Wrapper>
  );
};

export default index;
