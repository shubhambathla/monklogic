import Image from "next/image";
import Link from "next/link";
import React from "react";


import icon_1 from "../../../public/assets/img/contact/contact-icon-sm-1.png";
import icon_2 from "../../../public/assets/img/contact/contact-icon-sm-2.png";
import icon_3 from "../../../public/assets/img/contact/contact-icon-sm-3.png";
import img from "../../../public/assets/img/contact/contact-icon-sm-4.png";


const inner_content = {
  title: "Get in Touch with Us",
  description: <>Reach out today to start a conversation and let's create something amazing together.</>,

  contact_data: [
    {
      id: 1,
      icon: icon_1,
      title: "info@monklogic.com",
      link: "mailto:info@monklogic.com",
    },
    {
      id: 2,
      icon: icon_2,
      title: "+91-9837310900",
      link: "tel:+91-9837310900",
    },
    {
      id: 3,
      icon: icon_3,
      title: "161 Angus Dr, CA",
      link: "https://www.google.com.bd/maps/@43.789534,-79.363663,17z",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <Image src={item.icon} alt="theme-pure" />
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form-social-box p-relative">
            <div className="contact-form-social-item d-flex justify-content-center mt-20">
                 <Link href="https://www.facebook.com/profile.php?id=61555059489390&mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></Link>
                 <Link href="https://www.instagram.com/monklogic_?igsh=MXhsMDFiaGxuOHU1"><i className="fab fa-instagram"></i></Link>
                 <Link href="https://www.linkedin.com/company/100864771"><i className="fab fa-linkedin-in"></i></Link>
                 <Link href="https://www.linkedin.com/company/monklogic"><i className="fab fa-twitter"></i></Link>
            </div>
          </div>

        </div>

      </div> 

    </>
  );
};

export default ContactInner;
