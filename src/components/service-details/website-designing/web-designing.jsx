import React from 'react';
import {AnswerQuestionWebDesigning} from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../../public/assets/img/service/web-designing.jpg"; 

const service_details_content = {
    category_title:"Service Category",
    categorys: [
      {id:1, category: "Web Designing", cls: "active", href:"/website-designing"},
      {id:1, category: "Web Development", cls: "", href:"/website-development"},
      {id:1, category: "Crypto Solutions", cls: "", href:"/crypto-solutions"},
      {id:1, category: "Content Creation", cls: "", href:"/content-creation"},
      {id:1, category: "Cloud Services", cls: "", href:"/cloud-services"},
      {id:1, category: "Digital Marketing", cls: "", href:"digital-marketing"},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Service Overview",
    overview_des: <>At MonkLogic, we are dedicated to crafting captivating and highly functional websites that leave a lasting impression on your audience. Our web designing services are designed to transform your online presence and elevate your brand to new heights. Whether you're a small business, a startup, or an established enterprise, our team of skilled designers is committed to delivering stunning and effective web solutions tailored to your unique needs.</>,
    overview_list: [
        <>Custom Website Design: <br /> 
        <span>Craft visually captivating and unique websites that reflect your brand identity.</span><br></br>
        <span>User-centered design for an engaging and memorable visitor experience.</span><br></br>
        <span>Mobile-responsive layouts for seamless browsing on all devices.</span>
            </>,
        <>E-Commerce Website Design: <br /> 
            <span>Create eye-catching online stores that drive conversions and sales.</span><br></br>
            <span>Intuitive product displays and shopping cart design for a smooth shopping journey.</span><br></br>
            <span>Secure payment gateway integration for trust and convenience.</span>
            </>, 
        <>Landing Page Design: <br />
            <span>Design attention-grabbing landing pages to boost your marketing campaigns.</span><br></br>
            <span>Compelling visuals and persuasive call-to-action elements.</span><br></br>
            <span>A/B testing for optimizing conversion rates.</span>
            </>,
         <>UI/UX Design: <br />
            <span>Improve user satisfaction and engagement with intuitive user interfaces.</span><br></br>
            <span>Streamlined navigation and user-centric design for enhanced usability.</span><br></br>
            <span>Wireframing and prototyping for efficient design iterations.</span>
             </>
           
    ],

    challange_titel: "Our Approach",
    challange_des: [
      <>Creative Collaboration: <br /> 
          <span>We collaborate closely with you to understand your vision and goals.</span><br></br>
          <span>Regular feedback and revisions to ensure your design aligns with your brand.</span>
          </>,
      <>Responsive Design: <br /> 
          <span>Designs that adapt seamlessly to various screen sizes for consistent user experiences.</span><br></br>
          <span>Mobile-first design principles for the mobile-savvy audience.</span>
           </>, 
      <>Visual Impact:<br />
          <span>Visually striking designs that capture attention and leave a lasting impression.</span><br></br>
          <span>High-quality graphics, typography, and imagery to enhance your brand image.</span>
          </>,
      <>Brand Consistency: <br />
         <span>Ensuring design elements align with your brand's identity and values.</span><br></br>
         <span>Creating a cohesive online presence that reinforces your brand message.</span>
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

const WebDesServiceDetailsArea = () => {

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
                           <h4 className="sv-details-text-title pb-10">Our Web Design Services:</h4>
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
                                    <AnswerQuestionWebDesigning style={true} /> 
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

export default WebDesServiceDetailsArea;