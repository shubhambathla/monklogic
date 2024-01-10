import React from 'react';
import AnswerQuestionDigitalMarketing from '@/src/common/answer-question/digital-marketing-faq';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../../public/assets/img/service/digital-marketing.jpg"; 

const service_details_content = {
    category_title:"Service Category",
    categorys: [
      {id:1, category: "Web Designing", cls: "", href:"/website-designing"},
      {id:1, category: "Web Development", cls: "", href:"/website-development"},
      {id:1, category: "Crypto Solutions", cls: "", href:"/crypto-solutions"},
      {id:1, category: "Content Creation", cls: "", href:"/content-creation"},
      {id:1, category: "Cloud Services", cls: "", href:"/cloud-services"},
      {id:1, category: "Digital Marketing", cls: "active", href:"digital-marketing"},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Service Overview",
    overview_des: <>At MonkLogic, we are your digital marketing partners, dedicated to helping businesses thrive in the ever-evolving online landscape. Our comprehensive suite of digital marketing services is designed to drive growth, increase brand visibility, and connect you with your target audience in meaningful ways.</>,
    overview_list: [
        <>Search Engine Optimization (SEO): <br /> 
         <span>Increase your website's visibility on search engines like Google.</span><br></br>
         <span>On-page and off-page optimization for higher organic rankings.</span><br></br>
         <span>Keyword research and content optimization to attract targeted traffic.</span>
        </>,
        <>Pay-Per-Click Advertising (PPC): <br /> 
            <span>Drive immediate traffic and conversions through paid advertising.</span><br></br>
            <span>Targeted ads on search engines and social media platforms.</span><br></br>
            <span>Budget optimization and ROI tracking for cost-effective campaigns.</span></>, 
        <>Social Media Marketing: <br />
            <span>Build and engage with your audience on popular social media platforms.</span><br></br>
            <span>Content creation, scheduling, and community management.</span><br></br>
            <span>Ad campaigns to increase brand awareness and drive conversions.</span>        </>,
         <>Content Marketing: <br />
          <span>Develop high-quality, relevant, and engaging content.</span><br></br>
            <span>Blog posts, articles, infographics, and videos to connect with your audience.</span><br></br>
            <span>Content distribution and promotion strategies to reach a wider audience.</span>        </>,
         <>Email Marketing: <br />
          <span>Nurture customer relationships through effective email campaigns.</span><br></br>
            <span>Personalized email content and automated workflows.</span><br></br>
            <span>Segmentation and A/B testing for improved results.</span>     </>,
        <>Conversion Rate Optimization (CRO): <br />
         <span>Enhance website user experience to boost conversions.</span><br></br>
          <span>A/B testing, heatmaps, and user behavior analysis.</span><br></br>
         <span>Continuous optimization for higher conversion rates.</span>     </>,
    ],

    challange_titel: "Our Approach",
    challange_des: [
      <>Customized Strategies: <br /> 
          <span>We create tailored digital marketing strategies to meet your unique business objectives and target audience.</span>
       </>,
      <>Data-Driven Decisions: <br /> 
          <span>Our decisions are based on data analysis and insights, allowing us to refine strategies for optimal results.</span>
       </>, 
      <>Multi-Channel Integration:  <br />
          <span>We integrate multiple digital channels to maximize your online reach and impact.</span>
       </>,
      <>ROI-Focused: <br />
         <span>We track and measure the return on investment (ROI) for all campaigns, ensuring your marketing budget is well-spent.</span>
      </>,
  ],

    
}
const {
    category_title, 
    categorys, 
    bg_img,  
    overview_title, 
    overview_des, 
    overview_list, 
    challange_titel, 
    challange_des 
}  = service_details_content

const WebDevServiceDetailsArea = () => {

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4">
                     <div className="sv-details-widget">
                        <div className="sv-details-category mb-30">
                           <div className="sv-details-category-title">
                              <h4 className="sv-details-title-sm">{category_title}</h4>
                           </div>
                           <div className="sv-details-category-list">
                              <ul>
                                {categorys.map((item, i)  => 
                                    <li key={i} className={item.cls}>
                                        <Link href={item.href}><span>{item.category}</span><i className="fal fa-angle-right"></i></Link>
                                    </li>
                                )} 
                              </ul>
                           </div>
                        </div>

                        {/* <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">Data Analysis <br /> Tools & Methods</h3>
                              <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="#">
                                 <span>Work with Us</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s" 
                               alt="theme-pure" />
                           </div>
                        </div> */}

                        <div className="sv-details-social-box mb-30">
                           <h4 className="sv-details-title-sm">Share it.</h4>
                           <div className="sv-details-social-link">
                              <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="#"><i className="fab fa-twitter"></i></Link>
                              <Link href="#"><i className="fab fa-instagram"></i></Link>
                              <Link href="#"><i className="fab fa-youtube"></i></Link>
                           </div>
                        </div>

                     </div>
                  </div>
                  
                  <div className="col-xl-8 col-lg-8">
                     <div className="sv-details-wrapper">
                        <div className="sv-details-thumb mb-45">
                           <Image className="w-100" src={service_img} alt="theme-pure" />
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <h4 className="sv-details-title">{overview_title}</h4>
                           <p>{overview_des}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <h4 className="sv-details-text-title pb-10">Our Web Development Services:</h4>
                           <ul>
                            {overview_list.map((item, i)  =>  <li key={i}> <i className="fal fa-check"></i> <p> {item} </p> </li> )} 
                           </ul>
                        </div>
                        <div className="sv-details-text mb-35">
                           <h4 className="sv-details-text-title pb-10">Our Approach:</h4>
                           <ul>
                            {challange_des.map((item, i)  =>  <li key={i}> <i className="fal fa-check"></i> <p> {item} </p> </li> )} 
                           </ul>
                        </div>
                        {/* <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">{challange_titel}</h4>
                           <p>{challange_des}</p>
                        </div> */}
                        <div className="tp-faq-area pt-50">
                           <div className="container p-0">
                              <div className="row g-0">
                                 <div className="col-xl-12">
                                    <h4 className="sv-details-title">Any Questions find here.</h4>
                                    <AnswerQuestionDigitalMarketing style={true} /> 
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default WebDevServiceDetailsArea;