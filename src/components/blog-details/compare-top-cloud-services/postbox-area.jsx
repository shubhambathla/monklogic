
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog_details_img_1  from "../../../../public/assets/img/blog/blog-details-1.jpg";


const post_box_content = {
    title_1: <>10 Essential SEO Strategies for Boosting Your Website's Ranking</>,
    des_1: <>In today's digital landscape, having a strong online presence is crucial for the success of any business or website. Search Engine Optimization (SEO) is the key to ensuring that your website ranks well in search engine results pages (SERPs) and attracts organic traffic. To help you achieve better search engine rankings, we've compiled a list of 10 essential SEO strategies. By implementing these strategies, you can improve your website's visibility, drive more traffic, and ultimately grow your online presence.</>,
    checkmark_list: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Key Considerations for Businesses",
    ],


      title_2: "Amazon Web Services (AWS)",
      sub_title_2: "Strengths:",
      checkmark_list_2: {
         "Market Leader" : "AWS is the most mature and widely adopted cloud platform with a vast array of services.",
         "Extensive Service Offerings" : "It offers an extensive range of IaaS and PaaS services, from machine learning to IoT and beyond.",
         "Global Reach" : "WS has the largest network of data centers, making it ideal for businesses requiring a global presence.",
      },

      sub_title_3: "Considerations:",
      checkmark_list_3: {
         "Complex Pricing " : "AWS's pricing can be complex, and managing costs effectively can be challenging for users.",
         "Steep Learning Curve" : "The sheer breadth of services can be overwhelming for new users.",
      },


      title_3: "Microsoft Azure",
      sub_title_4: "Strengths:",
      checkmark_list_4: {
      "Reduced Risk of Centralized Control" : "Decentralization means that no single entity has complete control over the currency, reducing the risk of manipulation and censorship.",
      "Enhanced Security" : "The blockchain technology underlying cryptocurrencies is known for its security features, making transactions more secure than traditional systems.",
      },
      sub_title_5: "Considerations:",
      checkmark_list_5: {
         "Reduced Risk of Centralized Control" : "Decentralization means that no single entity has complete control over the currency, reducing the risk of manipulation and censorship.",
         "Enhanced Security" : "The blockchain technology underlying cryptocurrencies is known for its security features, making transactions more secure than traditional systems.",
      },

  
      title_4: "Google Cloud Platform (GCP)",
      sub_title_6: "Strengths:",
      checkmark_list_6: {
      "Reduced Risk of Centralized Control" : "Decentralization means that no single entity has complete control over the currency, reducing the risk of manipulation and censorship.",
      "Enhanced Security" : "The blockchain technology underlying cryptocurrencies is known for its security features, making transactions more secure than traditional systems.",
      },
      sub_title_7: "Considerations:",
      checkmark_list_7: {
         "Reduced Risk of Centralized Control" : "Decentralization means that no single entity has complete control over the currency, reducing the risk of manipulation and censorship.",
         "Enhanced Security" : "The blockchain technology underlying cryptocurrencies is known for its security features, making transactions more secure than traditional systems.",
      },

      title_5: "Key Considerations for Businesses",
      checkmark_list_8: {
      "Specific Business Needs" : "Choose a provider based on specific business requirements. For example, businesses heavily invested in Microsoft products may lean towards Azure.",
      "Costs": "Consider the pricing models and potential costs associated with each platform. AWS and Azure generally have more complex pricing structures compared to GCP.",
      "Scalability and Flexibility" : "Evaluate how each cloud service can scale with your business and adapt to changing needs.",
      "Security and Compliance" : "Ensure that the provider meets your industry’s security standards and compliance requirements.",
      "Support and Community" : "Consider the level of support and the robustness of the developer and user community.",
   },

    title_6:"Conclusion",
    conclusion: <>AWS, Azure, and Google Cloud each have their strengths and cater to different business needs and preferences. AWS offers the most comprehensive set of services, Azure provides deep integration with Microsoft products and strong hybrid capabilities, and Google Cloud excels in analytics and machine learning with a strong commitment to open-source and sustainability. Ultimately, the choice depends on your specific business requirements, budget, and long-term IT strategy. As the cloud computing landscape continues to evolve, staying informed and flexible in your choice of cloud service provider will be key to leveraging the full benefits of cloud technology.</>,
    
}
const {title_1, des_1, des_2,title_3,title_4,title_5,title_6,sub_title_2,sub_title_3,sub_title_4,sub_title_5,sub_title_6,sub_title_7, checkmark_list,checkmark_list_2,checkmark_list_3,checkmark_list_4,checkmark_list_5,checkmark_list_6,checkmark_list_7,checkmark_list_8, title_2, des_3, des_4, des_5, des_6,des_7,des_8,des_9,des_10,des_11,conclusion}  = post_box_content


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



                           <div className="postbox__details-title-box pb-10">
                              <h4 className="postbox__details-title">{title_2}</h4>
                              <h5>{sub_title_2}</h5>
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
                           <div className="postbox__details-title-box pb-10">
                              <h5>{sub_title_3}</h5>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_3).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>



                           <div className="postbox__details-title-box pb-10">
                              <h4 className="postbox__details-title">{title_3}</h4>
                              <h5>{sub_title_2}</h5>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_4).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="postbox__details-title-box pb-10">
                              <h5>{sub_title_3}</h5>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_5).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>




                           <div className="postbox__details-title-box pb-10">
                              <h4 className="postbox__details-title">{title_4}</h4>
                              <h5>{sub_title_2}</h5>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_6).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="postbox__details-title-box pb-10">
                              <h5>{sub_title_3}</h5>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_7).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>

                           
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_5}</h4>
                              <p>{des_2}</p>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {Object.entries(checkmark_list_8).map(([key, value], i) => (
                                 <li key={i}>
                                    <i className="fal fa-check"></i>
                                    <b>{key}</b>: {value}
                                 </li>
                                 ))}
                              </ul>
                           </div>



                       
                        
                           <div className="postbox__details-title-box pb-15">
                           <h4 className="postbox__details-title">{title_6}</h4>
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