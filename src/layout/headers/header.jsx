import Image from 'next/image';
import {gsap} from 'gsap';
import Link from 'next/link';
import Offcanvus from '@/src/common/offcanvus';
import SearchPopup from '@/src/modals/search-popup';
import SearchIconTwo from '@/src/svg/search-icon-2';
import UserIcon from '@/src/svg/user-icon';
import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import NavMenu from './nav-menu';
import useSticky from '@/src/hooks/use-sticky';



import logo from "./../../../public/assets/img/logo/monklogiclogo.png";



const Header = () => {

      const {sticky}  =  useSticky()
      const [searchOpen, setSearchOpen] = useState(false)
      const [sidebarOpen, setSidebarOpen] = useState(false)

      // gsa use
      let g_timline = new gsap.timeline();
      let header_top_animation = useRef(null)

      useEffect(() => {
         gsap.from(header_top_animation,  {
            opacity: 0,
		      y: '20px',
            delay: 1.05
         });
         gsap.to(header_top_animation, {
            opacity:1,
            y: '0px',
            delay: 1.05
        })
      },[])
 

    return (
        <>
         <header className="header-bottom__transparent z-index-6 tp-header-height">
               <div className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation" ref={el => header_top_animation = el} >
                  <div className="container">
                     <div className="row align-items-start">
                        <div className="col-6">
                           <div className="header-top__link">
                              <span>Monday – Saturday 10.00 am – 7:00 pm</span>
                              {/* <Link href="#">
                                 <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.40918 9L5.591 5L1.40918 1" stroke="white" strokeWidth="1.5"
                                       strokeLinecap="round" strokeLinejoin="round"/>
                                 </svg>
                              </Link> */}
                           </div>
                        </div>
                        <div className="col-6">
                           <div className="header-top__support text-end">
                                 <Link href="mailto:info@monklogic.com"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" id="mainIconPathAttribute" fill="#000000" stroke-width="0.7" stroke="#000000"></path> </svg></Link>
                                 &nbsp;<span><a href="mailto:info@monklogic.com">connect@monklogic.com</a></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div id="header-sticky" className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                           <div className="header-bottom__logo">
                              <Link href="/"><Image  src={logo} alt="" /></Link>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                           <div className="header-bottom__main-menu">
                              <nav id="mobile-menu">
                              <NavMenu /> 
                              </nav>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                           <div className="header-bottom__right d-flex align-items-center justify-content-end">
                              <div className="d-flex">
                                 {/* <a className="d-none d-md-inline-block search-open-btn"
                                    onClick={() => setSearchOpen(true)} > 
                                    <SearchIconTwo />
                                 </a>
                                 <Link className="d-none d-lg-inline-block last-child" href="/register">
                                    <UserIcon /> 
                                    <span>Log In</span>
                                 </Link> */}
                                 {/* <div className="d-flex"> */}
                                    <div className='quick-call d-flex justify-content-center align-items-center'>
                                       <Link href="tel:+919837310900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="22" width="22"><rect width="256" height="256" fill="none"></rect><path d="M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z" id="mainIconPathAttribute" fill="#aca4ed"></path><path d="M157.4,47.7a72.6,72.6,0,0,1,50.9,50.9,8,8,0,0,0,7.7,6,7.6,7.6,0,0,0,2.1-.3,7.9,7.9,0,0,0,5.6-9.8,88,88,0,0,0-62.2-62.2,8,8,0,1,0-4.1,15.4Z" id="mainIconPathAttribute" fill="#aca4ed"></path><path d="M149.1,78.6a40.4,40.4,0,0,1,28.3,28.3,7.9,7.9,0,0,0,7.7,6,6.4,6.4,0,0,0,2-.3,7.9,7.9,0,0,0,5.7-9.8,55.8,55.8,0,0,0-39.6-39.6,8,8,0,1,0-4.1,15.4Z" id="mainIconPathAttribute" fill="#8072ee"></path></svg></Link>
                                    </div>
                                    <div className='quick-call-text'><span>Quick Call</span><br></br><b>+91-9837310900</b></div>
                                 {/* </div> */}
                              </div>
                              <div className="header-bottom__btn d-flex align-items-center">
                                 <Link className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block" href="/contact">
                                    <span className="white-text">Get Started</span>
                                    <b></b>
                                 </Link>
                                 <a className="header-bottom__bar d-lg-none tp-menu-bar" onClick={() => setSidebarOpen(true)}><i className="fal fa-bars"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </header>
         <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
         <Offcanvus sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />
        </>
    );
};

export default Header;