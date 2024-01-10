import React from 'react';
import {AnswerQuestionWebDev} from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../../public/assets/img/service/web-development.jpg"; 

const service_details_content = {
    category_title:"Service Category",
    categorys: [
      {id:1, category: "Web Designing", cls: "", href:"/website-designing"},
      {id:1, category: "Web Development", cls: "active", href:"/website-development"},
      {id:1, category: "Crypto Solutions", cls: "", href:"/crypto-solutions"},
      {id:1, category: "Content Creation", cls: "", href:"/content-creation"},
      {id:1, category: "Cloud Services", cls: "", href:"/cloud-services"},
      {id:1, category: "Digital Marketing", cls: "", href:"digital-marketing"},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Service Overview",
    overview_des: <>At MonkLogic, we specialize in web development services, creating custom websites, e-commerce solutions, content management systems, and web applications tailored to your unique needs. With a focus on responsive design, scalability, and security, we deliver high-quality, cost-effective solutions to help you achieve your online goals.</>,
    overview_list: [
        <>Custom Website Development: <br /> 
        
            <span>Build a website from scratch that aligns with your brand and goals.</span><br></br>
            <span>Responsive design for seamless user experience on all devices.</span>
         </>,
        <>E-Commerce Development: <br /> 
        
            <span>Create an online store to sell products or services.</span><br></br>
            <span>Secure payment gateways and inventory management.</span>
         </>, 
        <>Content Management Systems (CMS): <br />
        
            <span>Set up and customize popular CMS platforms like WordPress</span><br></br>
            <span>Plugins and extensions to enhance website functionality.</span>
         </>,
    ],

    challange_titel: "Our Approach",
    challange_des: [
      <>Client-Centric Solutions: <br /> 
      
          <span>We listen to your requirements and goals to create a tailored solution.</span><br/>
          <span>Regular communication and feedback throughout the development process.</span>
       </>,
      <>Responsive Design: <br /> 
      
          <span>Ensure your website looks and functions flawlessly on all devices.</span><br/>
          <span>Mobile-friendly design for a broader audience reach.</span>
       </>, 
      <>Scalability: <br />
      
          <span>Build websites and applications that can grow with your business.</span><br/>
          <span>Future-proof solutions that can adapt to changing needs.</span>
       </>,
      <>Security: <br />
      
         <span>Implement robust security measures to protect your website and user data.</span><br/>
         <span>Regular updates and maintenance to stay ahead of potential threats.</span>
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
                                    <AnswerQuestionWebDev style={true} /> 
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