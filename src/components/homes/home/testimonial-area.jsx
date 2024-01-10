import StartIcon from '@/src/svg/start-icon';
import React, {useRef} from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 
import StartTwo from '@/src/svg/start-2';


// slider img import 
import slider_img_1 from "../../../../public/assets/img/testimonial/testimonial1.png";
import slider_img_2 from "../../../../public/assets/img/testimonial/testimonial3.png";
import slider_img_3 from "../../../../public/assets/img/testimonial/testimonial2.png";
import slider_img_4 from "../../../../public/assets/img/testimonial/testimonial4.png";
import shadow_img from "../../../../public/assets/img/testimonial/BODY.png";


const slider_data  = [
    {
        id: 1,
        img: slider_img_1,
        name: "Liam Patel ",
        job: "Founder & Leader",
        info: <>"Hats off to Monklogic! Our website now looks super slick and works like a charm. The custom analytics tools they added? Game-changer. Excited to see what else we can cook up together!"</>,

    },
    {
        id: 2,
        img: slider_img_2,
        name: "Rachel Hernandez",
        job: "Marketing Director",
        info: <>"Had an awesome experience with Monklogic! They made updating our content a breeze with a custom CMS. Bounce rates are down 15% - faster site, happier users. They're all about making things better."</>,

    },
    {
        id: 3,
        img: slider_img_3,
        name: "Alex Carter",
        job: "Executive Director",
        info: <>"Big shoutout to Monklogic! Online donations increased 30% with their platform. The website looks fantastic, telling our story perfectly. Grateful for their positive impact!"</>,

    },
    {
        id: 4,
        img: slider_img_4,
        name: "Daniel Nguyen",
        job: "Owner",
        info: <>"Monklogic, you legends! Our little shop went big online, thanks to your e-commerce magic. Smooth checkout, doubled sales, and zero tech headaches. You guys make web stuff feel like a breeze!"</>,

    }, 
]

// slider setting 
const setting = {	
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    dots:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        
    ]
}


const testimonial_content = {
    bg_img: "/assets/img/testimonial/testi-bg-2-1.png",
    title: <>What people <br /> are saying about us</>
}
const {bg_img, title}  = testimonial_content
const TestimonialArea = () => {
    const sliderRef = useRef()
    return (
        <>
            <div className="tp-testimonial-2-area pt-110 pb-20" 
            // style={{backgroundImage: `url(${bg_img})`}}
            >
               <div className="container">

               <div className="row justify-content-center">
                     <div className="col-xl-6">
                        <div className="tp-testimonial__section-box text-center">
                           {/* <h3 className="tp-section-title">Word From Our Client</h3> */}
                           <h6>4.8 Stars Based on 50+ Client Reviews</h6>
                           <div className="tp-testimonial__rating">
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />                                   
                           </div>
                        </div>
                     </div>
                  </div>



                  <div className="row justify-content-center">
                     <div className="col-xl-8">
                        <div className="tp-testimonial-2-section-box mb-15 text-center">
                           <h3 className="tp-section-title-lg text-black">{title}</h3>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                     <div className="col-12">
                        <div className="tp-testimonial-2-section">

                           <Slider
                           {...setting} 
                           ref={sliderRef} 
                            className="tp-testimonial-2-slider-active">
                            {slider_data.map((item, i)  => 
                                 <div key={i} className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".2s">
                                    <div className="tp-testimonial-2-border-shape">
                                    <Image src={shadow_img} alt="theme-pure" />
                                    </div>
                                    <div className="tp-testimonial-2-star">
                                       <span>
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon /> 
                                       </span> 
                                    </div>
                                    <div className="tp-testimonial-2-content">
                                       <p>{item.info}</p>
                                    </div>
                                    <div className="tp-testimonial-2-author d-flex align-items-center">
                                       <div className="tp-testimonial-2-img">
                                          <Image src={item.img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-testimonial-2-author-info">
                                          <h5>{item.name}</h5>
                                          <span>{item.job}</span>
                                       </div>
                                    </div>
                                 </div> 
                                )
                            } 
                           </Slider>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default TestimonialArea;