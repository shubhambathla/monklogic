import React from 'react';
import {AnswerQuestionCryptoSolutions} from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../../public/assets/img/service/crypto.jpg"; 

const service_details_content = {
    category_title:"Service Category",
    categorys: [
      {id:1, category: "Web Designing", cls: "", href:"/website-designing"},
      {id:1, category: "Web Development", cls: "", href:"/website-development"},
      {id:1, category: "Crypto Solutions", cls: "active", href:"/crypto-solutions"},
      {id:1, category: "Content Creation", cls: "", href:"/content-creation"},
      {id:1, category: "Cloud Services", cls: "", href:"/cloud-services"},
      {id:1, category: "Digital Marketing", cls: "", href:"digital-marketing"},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Service Overview",
    overview_des: <>At MonkLogic, we offer comprehensive Crypto Solutions designed to empower individuals and businesses in the world of cryptocurrencies. Our services include crypto wallet development, blockchain integration, ICO/STO advisory, smart contract development, and crypto consulting. With a security-first approach, innovative solutions, and a client-centric focus, we help you navigate the crypto landscape securely, comply with regulations, and achieve your digital financial goals.</>,
    overview_list: [
        <>Crypto Wallet Development: <br /> 
        
            <span>We specialize in creating secure and user-friendly cryptocurrency wallets for various platforms, ensuring the safe storage and management of digital assets.</span>
         </>,
        <>Blockchain Integration: <br /> 
            <span>Our experts seamlessly integrate blockchain technology into your existing systems or develop blockchain-based solutions to enhance transparency, security, and efficiency.</span>
         </>, 
        <>ICO and STO Advisory: <br />
            <span>We provide comprehensive advisory services for Initial Coin Offerings (ICOs) and Security Token Offerings (STOs), including concept development, whitepaper creation, token development, marketing, and fundraising strategies.</span>
         </>,
         <>Smart Contract Development: <br />
            <span>Our smart contract development services help you automate complex transactions and agreements securely on the blockchain, reducing the need for intermediaries.</span>
         </>,
         <>Crypto Security Audits: <br />
         <span>Our security experts conduct rigorous audits to identify and mitigate vulnerabilities in your crypto projects, ensuring the safety of your digital assets and transactions.</span>
      </>,
    ],

    challange_titel: "Our Approach",
    challange_des: [
      <>Innovation and Customization: <br /> 
          <span>We leverage cutting-edge technologies and tailor our solutions to meet your unique crypto needs. Whether you're launching an ICO, developing a crypto wallet, or integrating blockchain, our innovative approach ensures your success.</span>
       </>,
      <>Security-First Approach: <br /> 
          <span>Security is paramount in the world of cryptocurrencies. We implement industry-leading security measures in every aspect of our services to protect your digital assets against potential threats.</span>
       </>, 
      <>Transparency and Compliance: <br />
          <span>We uphold transparency in our processes and ensure compliance with relevant regulations. Our advisory services include guidance on regulatory matters to help you navigate the crypto space confidently.</span>
       </>,
      <>Experienced Team: <br />
         <span>Our team comprises crypto and blockchain experts with years of experience in the field. We stay up-to-date with the latest industry trends and technologies to provide you with the most current and relevant solutions.</span>
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
                           <h4 className="sv-details-text-title pb-10">Our Crypto Services:</h4>
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
                                    <AnswerQuestionCryptoSolutions style={true} /> 
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