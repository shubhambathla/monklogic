import RightArrow from '@/src/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";  

// icon import 
import web_design_icon from "../../../../public/assets/img/feature/web-design.svg";
import web_dev_icon from "../../../../public/assets/img/feature/web-dev.svg";
import crypto_solution_icon from "../../../../public/assets/img/feature/crypto.svg";
import content_creation_icon from "../../../../public/assets/img/feature/content.svg";
import cloud_services_icon from "../../../../public/assets/img/feature/cloud.png";
import marketing_icon from "../../../../public/assets/img/feature/marketing.png";
import feature_bottom_shape from "../../../../public/assets/img/feature/fea-bg-shape-1.png";

// feature data
const feature_data = [
   {
      id: 1,
      img: web_design_icon,
      title: <>Website Designing</>,
      delay: ".1s",
      href:"/website-designing",
   },
   {
      id: 2,
      img: web_dev_icon,
      title: <>Website Development</>,
      delay: ".2s",
      href:"website-development",
   },
   {
      id: 3,
      img: crypto_solution_icon,
      title: <>Crypto Solutions</>,
      delay: ".3s",
      href:"crypto-solutions",
   },
   {
      id: 4,
      img: content_creation_icon,
      title: <>Content Creation</>,
      delay: ".4s",
      href:"content-creation"
   },
   {
      id: 5,
      img: cloud_services_icon,
      title: <>Cloud Services</>,
      delay: ".5s",
      href:"cloud-services"
   },
   {
      id: 6,
      img: marketing_icon,
      title: <>Digital Marketing</>,
      delay: ".6s",
      href:"digital-marketing"
   },
]

// feature content
const feature_content = {
   title: "Our Exciting Services",
   sub_title: "More than 100 companies trust and choose MonkLogic",
}
const { title, sub_title } = feature_content

const FeatureArea = () => {
   let titleRef = useRef(null)
   useTitleAnimation(titleRef)

   return (
      <>
         <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
            <div className="tp-feature__bottom-shape">
               <Image style={{width: "auto", height: "auto"}} src={feature_bottom_shape} alt="them-pure" />
            </div>
            <div className="container">

               <div className="row justify-content-center">
                  <div className="col-xl-6 wow tpfadeUpp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <div ref={titleRef} className="tp-feature__section-box tp__title_anime text-center mb-20 tp-title-anim">
                        <h2 className="tp-section-title">{title}</h2>
                        {/* <p>{sub_title}</p> */}
                     </div>
                  </div>
               </div>

               <div className="row">
                  {feature_data.map((item, i) =>
                     <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-6 mb-30 wow tpfadeUp " data-wow-duration=".9s" data-wow-delay={item.delay} >
                        <div className="tp-feature__item">
                           <div className="tp-feature__icon">
                              <Image src={item.img} alt={item.title} width={60}/>
                           </div>
                           <h3 className="tp-feature__title-sm">{item.title}</h3>
                           <div className="tp-feature__link tp-common-btn">
                              <Link href={item.href}>
                                 <RightArrow />
                              </Link> 
                           </div>
                        </div>
                     </div>
                  )}
               </div>

            </div>
         </div>

      </>
   );
};

export default FeatureArea;