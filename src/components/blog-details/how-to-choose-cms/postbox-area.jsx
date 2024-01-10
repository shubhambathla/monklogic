
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog_details_img_1  from "../../../../public/assets/img/blog/cms.jpg";


const post_box_content = {
    title_1: <>Choosing the Right Content Management System (CMS) for Your Website</>,
    des_1: <>In the digital age, having a dynamic and user-friendly website is essential for businesses, bloggers, and organizations alike. To manage and update website content efficiently, choosing the right Content Management System (CMS) is paramount. A CMS not only simplifies content creation and management but also empowers non-technical users to maintain a professional online presence. In this article, we'll explore the key considerations for selecting the perfect CMS for your website.</>,
    title_2:"Key Considerations When Choosing a CMS",
    checkmark_list_1: {
        "Ease of Use" : "A user-friendly interface is crucial, especially if you have non-technical team members who will be managing content. Test the CMS to ensure that it's intuitive and easy to navigate.",
        "Scalability" : "Consider your website's growth potential. A good CMS should be able to accommodate your future needs, from adding more content to expanding your website's functionality.",
        "Customization": "Assess the level of customization the CMS offers. It should allow you to tailor your website's design and functionality to your specific requirements.",
        "Content Types": " Identify the types of content you'll be publishing. Some CMS platforms are better suited for text-heavy content, while others excel at handling multimedia content like images and videos.",
        "SEO Features": "SEO is critical for online visibility. Ensure that the CMS supports SEO best practices, such as customizable metadata, clean URLs, and XML sitemaps",
        "Mobile Responsiveness": "In the mobile-first era, your CMS should support responsive design to ensure that your website looks and functions well on various devices.",
        "Security": "Website security is paramount. Choose a CMS with a strong security track record and regular updates to protect your site from vulnerabilities.",
        "Community and Support": "A thriving community of users and developers can be invaluable. It ensures that you can find resources, plugins, and support when needed.",
        "Cost": "CMS platforms come in various pricing models, from open-source (free) to paid subscriptions. Consider your budget and the long-term costs of ownership.",
      },

    title_3:"Popular CMS Options",
    checkmark_list_2: {
      "Wordpress" : "Known for its user-friendliness and extensive plugin library, WordPress is the world's most widely used CMS. It's ideal for bloggers, small businesses, and medium-sized websites.",
      "Magento" : "Magento is a CMS designed specifically for e-commerce websites. It offers advanced features for online stores.",
      "Shopify": "Shopify is a leading e-commerce platform that simplifies online store creation and management. It's a go-to choice for businesses looking to sell products or services online.",
      "OpenCart": "OpenCart is an open-source e-commerce platform that offers a user-friendly interface and a range of features for online stores. It's a cost-effective solution for e-commerce businesses.",
    },
    title_4:"Conclusion",
    conclusion: <>Selecting the right CMS is a crucial decision that will impact your website's performance and your ability to manage and grow your online presence. Consider your specific needs, budget, and technical expertise when making your choice. Regardless of which CMS you choose, remember that ongoing maintenance, regular updates, and content optimization are key to a successful and engaging website.</>,
    
}
const {title_1, des_1,checkmark_list_1,checkmark_list_2, title_2,title_3,title_4,conclusion}  = post_box_content


const PostboxArea = ({style_details_2}) => {
    return (
        <>
            <div className={`postbox__area ${style_details_2 && "pt-100"} pb-100`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-10 col-xl-10 col-lg-10">
                     <div className="postbox__details-wrapper pr-20">
                        <article>
                           {style_details_2 && 
                              <div className="postbox__thumb w-img">
                                 <Link href="/blog-details">
                                    <Image src={blog_details_img_1} alt="" />
                                 </Link>
                              </div>
                           }

                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_1}</h4>
                              <p>{des_1}</p>
                           </div>

                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_2}</h4>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_1).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>

                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_3}</h4>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_2).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>


                           <div className="postbox__details-title-box">
                           <h4 className="postbox__details-title">{title_4}</h4>
                              <p>{conclusion}</p>
                           </div> 
                        </article>
                     </div>
                  </div>

               </div>
            </div>
         </div>
        </>
    );
};

export default PostboxArea;