import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
// import ServiceDetailsArea from "./service-details-area";
import ContentCreationServiceDetailsArea from "./content-creation";

const ServiceDetailsDev = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Content Creation" innertitle="Service Details" />
            {/* <ServiceDetailsArea /> */}
            <ContentCreationServiceDetailsArea/>
            {/* <TestimonialArea /> */}
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsDev;
