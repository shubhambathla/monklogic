import React from 'react';
import {AnswerQuestionContentCreation} from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../../public/assets/img/service/content-creation.jpg"; 

const service_details_content = {
    category_title:"Service Category",
    categorys: [
      {id:1, category: "Web Designing", cls: "", href:"/website-designing"},
      {id:1, category: "Web Development", cls: "", href:"/website-development"},
      {id:1, category: "Crypto Solutions", cls: "", href:"/crypto-solutions"},
      {id:1, category: "Content Creation", cls: "active", href:"/content-creation"},
      {id:1, category: "Cloud Services", cls: "", href:"/cloud-services"},
      {id:1, category: "Digital Marketing", cls: "", href:"digital-marketing"},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Service Overview",
    overview_des: <>At MonkLogic, we specialize in delivering top-tier content creation services that empower businesses and individuals to connect, engage, and succeed in the digital world. Our comprehensive range of content creation solutions is designed to elevate your online presence, drive traffic, and foster meaningful connections with your target audience.</>,
    overview_list: [
        <>Blog Post Writing <br /> 
         <span>Engaging and informative blog articles that resonate with your target audience.</span><br></br>
         <span>SEO optimization for improved search engine visibility.</span><br></br>
         <span>Regular and consistent content to keep your audience engaged.</span>
             </>,
        <>Website Content Development: <br /> 
         <span>High-quality website content that communicates your brand's message effectively.</span><br></br>
         <span>Clear and concise messaging to capture and retain visitor interest.</span><br></br>
         <span>Tailored content for landing pages, product/service descriptions, and more.</span>
            </>, 
        <>Social Media Content: <br />
            <span>Creative and shareable social media posts that connect with your followers.</span><br></br>
            <span>Visual content, including images and infographics, to enhance engagement.</span><br></br>
            <span>Content calendars and scheduling for a consistent online presence.</span></>,
         <>Video Scriptwriting: <br />
            <span>Compelling video scripts that tell your story and captivate your audience.</span><br></br>
            <span>Concise and persuasive narratives that drive action and engagement.</span><br></br>
            <span>Incorporation of visual elements and storytelling techniques.</span></>,
         <>Email Newsletter Writing: <br />
         <span>Persuasive and informative email newsletters that nurture customer relationships.</span><br></br>
         <span>Attention-grabbing subject lines and personalized content to boost open and click-through rates.</span><br></br>
         <span>Segmentation and targeted messaging for increased effectiveness.</span> </>,
         
         <>Video Editing: <br />
            <span>Professional product photography that showcases your offerings in the best light.</span><br></br>
            <span>High-resolution images for use on e-commerce platforms, websites, and marketing materials.</span><br></br>
            <span>Creative and visually appealing product shots that capture attention.</span> </>,
         
         <>Product Shoot and Photography: <br />
            <span>Expert video editing services to enhance your video content.</span><br></br>
            <span>Seamless transitions, audio enhancements, and visual effects to create engaging videos.</span><br></br>
            <span>Post-production optimization for maximum impact.</span> </>,

         <>Banner Creations: <br />
            <span>Eye-catching banner designs for websites, social media, and online advertising.</span><br></br>
            <span>Customized banners that align with your brand's identity and promotions.</span><br></br>
            <span>Effective calls to action and compelling visuals to drive user interaction.</span> </>,
    ],

    challange_titel: "Our Approach",
    challange_des: [
      <>Content Strategy: <br /> 
          <span>We develop a content strategy tailored to your brand's objectives and audience, ensuring that every piece of content serves a purpose.</span>
       </>,
      <>Quality Assurance: <br /> 
          <span>Our team of experienced writers, photographers, and video editors ensures that every piece of content is well-researched, error-free, and aligns with your brand's voice and guidelines.</span>
       </>, 
      <>Keyword Research:<br />
          <span>For SEO-focused content, we conduct thorough keyword research to maximize your online visibility and drive organic traffic.</span>
       </>,
      <>Visual Storytelling: <br />
         <span>We incorporate visual elements such as images, infographics, and videos to enhance the impact of your content.</span>
      </>,
      <>Client Collaboration: <br />
         <span>We collaborate closely with you to understand your brand's values, goals, and messaging preferences, ensuring that our content aligns seamlessly with your vision.</span>
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

                        <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
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
                        </div>

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
                           <h4 className="sv-details-text-title pb-10">Our Content Creation Services:</h4>
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
                                    <AnswerQuestionContentCreation style={true} /> 
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