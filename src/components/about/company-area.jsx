import VideoPopup from '@/src/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
    sub_title:  "ABOUT THE COMPANY",
    title: <>MonkLogic is Made <br />For the Creator.</>,
    info_1: <>Our team of experts is committed to delivering results through a client-centric approach, transparency, and a deep understanding of the latest industry trends. </>,
    info_2: <>Whether you're looking to enhance your online presence, optimize your digital marketing efforts, or harness the power of the cloud, we're here to partner with you on your digital journey. Explore our services, read client success stories, and get in touch with us to discover how we can help you achieve your business goals.    </>,
   //  info_3: <>Our clean and simple APIs and transparent SaaS model will give you complete peace of mind.</>,
}
const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-10">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".2s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              {/* <p><span>{info_3}</span></p> */}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     {/* <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div>
                     </div> */}
                     <div className="col-xl-12">
                        <div className="row">
                        <div className="col-md-3 col-sm-3 mb-20">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-center">
                                 <div className="ab-company-fun-fact d-flex flex-column  align-items-center">
                                    {/* <span>USED BY</span> */}
                                    <h4>15<em>+</em></h4>
                                    <p>Team Members</p>
                                 </div>
                              </div>
                           </div>

                           <div className="col-md-3 col-sm-3 mb-20">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-center">
                                 <div className="ab-company-fun-fact d-flex flex-column  align-items-center">
                                    {/* <span>USED BY</span> */}
                                    <h4>80<em>+</em></h4>
                                    <p>Projects</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-3 col-sm-3 mb-20">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-center">
                                 <div className="ab-company-fun-fact d-flex flex-column  align-items-center">
                                    {/* <span>VALUE</span> */}
                                    <h4>60<em>+</em></h4>
                                    <p>Clients</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 col-sm-3 mb-20">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-center">
                                 <div className="ab-company-fun-fact d-flex flex-column  align-items-center">
                                    {/* <span>IN</span> */}
                                    <h4>2</h4>
                                    <p>WINNING AWARDS</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;