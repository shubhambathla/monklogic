import React from 'react';
import {AnswerQuestionCloudServices} from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../../public/assets/img/service/cloud-services.jpg"; 

const service_details_content = {
    category_title:"Service Category",
    categorys: [
        {id:1, category: "Web Designing", cls: "", href:"/website-designing"},
        {id:1, category: "Web Development", cls: "", href:"/website-development"},
        {id:1, category: "Crypto Solutions", cls: "", href:"/crypto-solutions"},
        {id:1, category: "Content Creation", cls: "", href:"/content-creation"},
        {id:1, category: "Cloud Services", cls: "active", href:"/cloud-service"},
        {id:1, category: "Digital Marketing", cls: "", href:"digital-marketing"},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Service Overview",
    overview_des: <>At MonkLogic, we offer cutting-edge Cloud Services designed to revolutionize the way businesses operate and thrive in the digital era. Our comprehensive suite of cloud solutions empowers organizations to scale, secure, and streamline their IT infrastructure, all while optimizing costs and embracing innovation.</>,
    overview_list: [
            <>Cloud Migration: <br /> 
            <span>Seamlessly transition your IT infrastructure to the cloud.</span><br></br>
            <span>Minimize downtime and disruptions during migration.</span><br></br>
            <span>Optimize resources, reduce costs, and improve scalability.</span>
              </>,
            <>Cloud Hosting:<br /> 
            <span>Reliable and high-performance cloud hosting solutions.</span><br></br>
            <span>Customized hosting plans for websites, applications, and databases.</span><br></br>
            <span>Scalable resources to handle traffic spikes and growth.</span>
            </>, 
            <>Data Backup and Recovery:<br />
            <span>Automated and secure data backup solutions.</span><br></br>
            <span>Rapid data recovery in case of emergencies or data loss.</span><br></br>
            <span>Data redundancy and disaster recovery planning.</span>
            </>,
            <>Cloud Security:<br />
            <span>Protect your cloud infrastructure and data from threats.</span><br></br>
            <span>Implement robust security measures and access controls.</span><br></br>
            <span>Continuous monitoring and threat detection.</span>
             </>,
            <>Cloud Consulting: <br />
            <span>Expert guidance on cloud strategy and adoption.</span><br></br>
            <span>Assess your needs and select the right cloud service providers.</span><br></br>
            <span>Optimize existing cloud environments for efficiency.</span>
            </>,
            <>Managed Cloud Services: <br />
            <span>Let us handle the day-to-day management of your cloud infrastructure.</span><br></br>
            <span>Ensure optimal performance, security, and cost-effectiveness.</span><br></br>
            <span>Focus on your core business while we manage your cloud resources.</span>
            </>,
    ],

    challange_titel: "Our Approach",
    challange_des: [
      <>Assessment: <br /> 
          <span>We begin with a thorough assessment of your current IT infrastructure and business needs to determine the best cloud strategy.</span>
       </>,
      <>Customization: <br /> 
          <span>We tailor cloud solutions to match your specific requirements, whether it's public, private, or hybrid cloud deployments.</span>
       </>, 
      <>Migration and Implementation:<br />
          <span>Our team handles the migration process efficiently, ensuring a smooth transition to the cloud environment.</span>
       </>,
      <>Security and Compliance: <br />
         <span>We prioritize security and compliance, implementing industry best practices and staying up-to-date with the latest security threats.</span>
      </>,
      <>Monitoring and Optimization: <br />
         <span>Continuous monitoring and optimization of your cloud resources to ensure cost-effectiveness and performance.</span>
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
                                        <Link href={item.href} ><span>{item.category}</span><i className="fal fa-angle-right"></i></Link>
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
                           <h4 className="sv-details-text-title pb-10">Our Cloud Services:</h4>
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
                                    <AnswerQuestionCloudServices style={true} /> 
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