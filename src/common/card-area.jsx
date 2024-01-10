import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import card_img_1 from "../../public/assets/img/card/card-bg.png";
import card_img_2 from "../../public/assets/img/card/card-shape-1.png";
import card_img_3 from "../../public/assets/img/card/card-img-1.png";
import card_img_4 from "../../public/assets/img/card/card-img-2.png";
import card_img_5 from "../../public/assets/img/card/card-img-3.png";
import card_img_6 from "../../public/assets/img/card/card-img-4.png" ;

import designing_1 from "../../public/assets/img/card/designing-1.svg" ;

import development_1 from "../../public/assets/img/card/development-2.svg" ;

import crypto_1 from "../../public/assets/img/card/crypto-1.svg" ;

import content_1 from "../../public/assets/img/card/content-1.svg" ;

import cloud_1 from "../../public/assets/img/card/cloud-1.svg" ;

import digital_1 from "../../public/assets/img/card/digital-1.svg" ;
import digital_2 from "../../public/assets/img/card/digital-2.svg" ;




const web_development_card_content = {
    wdev_card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: development_1,
        },
        // {
        //     id: 2,
        //     cls: "img-1 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_2,
        // },
        // {
        //     id: 3,
        //     cls: "img-2 d-none d-sm-block",
        //     data_parallax: '{"x": 50, "smoothness": 30}',
        //     img: card_img_3,
        // },
        // {
        //     id: 4,
        //     cls: "img-3 d-none d-sm-block",
        //     data_parallax: '{"x": -50, "smoothness": 30}',
        //     img: card_img_4,
        // },
        // {
        //     id: 5,
        //     cls: "img-4 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_5,
        // },
        // {
        //     id: 6,
        //     cls: "img-5 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_6,
        // },
    ],

    wdev_title: <>Website <span>Development</span></>,
    wdev_description: <>Crafting digital experiences that transcend expectations – Elevate your online presence with our expert web development services. <br />
  </>,
    wdev_btn_text: "More Details"
}
const {wdev_card_images, wdev_title, wdev_description, wdev_btn_text}  = web_development_card_content

const web_designing_card_content = {
    wd_card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: designing_1,
        },
        // {
        //     id: 2,
        //     cls: "img-1 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_2,
        // },
        // {
        //     id: 3,
        //     cls: "img-2 d-none d-sm-block",
        //     data_parallax: '{"x": 50, "smoothness": 30}',
        //     img: card_img_3,
        // },
        // {
        //     id: 4,
        //     cls: "img-3 d-none d-sm-block",
        //     data_parallax: '{"x": -50, "smoothness": 30}',
        //     img: card_img_4,
        // },
        // {
        //     id: 5,
        //     cls: "img-4 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_5,
        // },
        // {
        //     id: 6,
        //     cls: "img-5 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_6,
        // },
    ],

    wd_title: <>Website <span>Designing</span></>,
    wd_description: <>Unleash the power of stunning visuals and seamless functionality – Transform your digital identity with our bespoke website designing services. <br />
  </>,
    wd_btn_text: "More Details"
}
const {wd_card_images, wd_title, wd_description, wd_btn_text}  = web_designing_card_content

const crypto_solutions_card_content = {
    crypto_card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: crypto_1,
        },
        // {
        //     id: 2,
        //     cls: "img-1 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_2,
        // },
        // {
        //     id: 3,
        //     cls: "img-2 d-none d-sm-block",
        //     data_parallax: '{"x": 50, "smoothness": 30}',
        //     img: card_img_3,
        // },
        // {
        //     id: 4,
        //     cls: "img-3 d-none d-sm-block",
        //     data_parallax: '{"x": -50, "smoothness": 30}',
        //     img: card_img_4,
        // },
        // {
        //     id: 5,
        //     cls: "img-4 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_5,
        // },
        // {
        //     id: 6,
        //     cls: "img-5 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_6,
        // },
    ],

    crypto_title: <>Crypto <span>Solutions</span></>,
    crypto_description: <>Empower your journey into the decentralized frontier – Pioneering crypto solutions tailored for the next wave of digital innovation. <br />
  </>,
    crypto_btn_text: "More Details"
}
const {crypto_card_images, crypto_title, crypto_description, crypto_btn_text}  = crypto_solutions_card_content

const content_creation_card_content = {
    content_creation_card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: content_1,
        },
        // {
        //     id: 2,
        //     cls: "img-1 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_2,
        // },
        // {
        //     id: 3,
        //     cls: "img-2 d-none d-sm-block",
        //     data_parallax: '{"x": 50, "smoothness": 30}',
        //     img: card_img_3,
        // },
        // {
        //     id: 4,
        //     cls: "img-3 d-none d-sm-block",
        //     data_parallax: '{"x": -50, "smoothness": 30}',
        //     img: card_img_4,
        // },
        // {
        //     id: 5,
        //     cls: "img-4 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_5,
        // },
        // {
        //     id: 6,
        //     cls: "img-5 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_6,
        // },
    ],

    content_creation_title: <>Content <span>Creation</span></>,
    content_creation_description: <>Illuminate your brand narrative with captivating content – We weave stories that resonate and elevate your online presence. <br />
  </>,
    content_creation_btn_text: "More Details"
}
const {content_creation_card_images, content_creation_title, content_creation_description, content_creation_btn_text}  = content_creation_card_content

const cloud_services_card_content = {
    cloud_services_card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: cloud_1,
        },
        // {
        //     id: 2,
        //     cls: "img-1 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_2,
        // },
        // {
        //     id: 3,
        //     cls: "img-2 d-none d-sm-block",
        //     data_parallax: '{"x": 50, "smoothness": 30}',
        //     img: card_img_3,
        // },
        // {
        //     id: 4,
        //     cls: "img-3 d-none d-sm-block",
        //     data_parallax: '{"x": -50, "smoothness": 30}',
        //     img: card_img_4,
        // },
        // {
        //     id: 5,
        //     cls: "img-4 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_5,
        // },
        // {
        //     id: 6,
        //     cls: "img-5 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_6,
        // },
    ],

    cloud_services_title: <>Cloud <span>Services</span></>,
    cloud_services_description: <>Embrace the future of flexibility and scalability – Elevate your operations with our cutting-edge cloud services, tailored for your success in the digital age. <br />
  </>,
    cloud_services_btn_text: "More Details"
}
const {cloud_services_card_images, cloud_services_title, cloud_services_description, cloud_services_btn_text}  = cloud_services_card_content

const digital_marketing_card_content = {
    digital_marketing_card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: digital_1,
        },
        // {
        //     id: 2,
        //     cls: "img-1 d-none d-sm-block",
        //     data_parallax: "",
        //     img: digital_2,
        // },
        // {
        //     id: 3,
        //     cls: "img-2 d-none d-sm-block",
        //     data_parallax: '{"x": 50, "smoothness": 30}',
        //     img: card_img_3,
        // },
        {
            id: 4,
            cls: "img-3 d-none d-sm-block",
            data_parallax: '{"x": -50, "smoothness": 30}',
            img: card_img_4,
        },
        {
            id: 5,
            cls: "img-4 d-none d-sm-block",
            data_parallax: "",
            img: card_img_5,
        },
        // {
        //     id: 6,
        //     cls: "img-5 d-none d-sm-block",
        //     data_parallax: "",
        //     img: card_img_6,
        // },
    ],

    digital_marketing_title: <>Digital <span>Marketing</span></>,
    digital_marketing_description: <>Fuel your success in the digital landscape – Our strategic digital marketing solutions drive engagement, boost visibility, and turn clicks into customers. <br />
  </>,
  digital_marketing_btn_text: "More Details"
}
const {digital_marketing_card_images, digital_marketing_title, digital_marketing_description, digital_marketing_btn_text}  = digital_marketing_card_content



const CardArea = ({style_service}) => {
    return (
        <>
        <div className="tp-card-area tp-card-space pt-20 pb-75">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper p-relative">
                            {wd_card_images.map((item, i)  => 
                                <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>


                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15">{wd_title}</h3>
                           <p className="">{wd_description}</p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`} 
                                 href="/website-designing">
                                 <span>{wd_btn_text}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            <div className="tp-card-area tp-card-space pt-75 pb-100 ">
               <div className="container">
                  <div className="row flex-column-reverse flex-lg-row flex-xl-row">
                     
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15">{wdev_title}</h3>
                           <p className="">{wdev_description}</p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`} 
                                 href="/website-development">
                                 <span>{wdev_btn_text}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>


                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper p-relative">
                            {wdev_card_images.map((item, i)  => 
                                <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>
                  </div>
               </div>
            </div>



            <div className="tp-card-area tp-card-space pt-75 pb-100 ">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper p-relative">
                            {crypto_card_images.map((item, i)  => 
                                <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>

                                        
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15">{crypto_title}</h3>
                           <p className="">{crypto_description}</p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`} 
                                 href="/crypto-solutions">
                                 <span>{crypto_btn_text}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>                    
            
            <div className="tp-card-area tp-card-space pt-75 pb-100 ">
               <div className="container">
                  <div className="row flex-column-reverse flex-lg-row flex-xl-row">
                     

                                        
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15">{content_creation_title}</h3>
                           <p className="">{content_creation_description}</p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`} 
                                 href="/content-creation">
                                 <span>{content_creation_btn_text}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>

                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper p-relative">
                            {content_creation_card_images.map((item, i)  => 
                                <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>
                  </div>
               </div>
            </div> 

            <div className="tp-card-area tp-card-space pt-75 pb-75">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper p-relative">
                            {cloud_services_card_images.map((item, i)  => 
                                <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>


                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15">{cloud_services_title}</h3>
                           <p className="">{cloud_services_description}</p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`} 
                                 href="/cloud-services">
                                 <span>{cloud_services_btn_text}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>

                  </div>
               </div>
            </div> 

            <div className="tp-card-area tp-card-space pt-75 pb-100 ">
               <div className="container">
                  <div className="row flex-column-reverse flex-lg-row flex-xl-row">
                     

                                        
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15">{digital_marketing_title}</h3>
                           <p className="">{digital_marketing_description}</p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`} 
                                 href="/digital-marketing">
                                 <span>{digital_marketing_btn_text}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>

                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper p-relative">
                            {digital_marketing_card_images.map((item, i)  => 
                                <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>
                  </div>
               </div>
            </div> 
        </>
    );
};

export default CardArea;