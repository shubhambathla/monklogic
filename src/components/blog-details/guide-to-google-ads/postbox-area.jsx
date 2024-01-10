
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog_details_img_1  from "./../../../../public/assets/img/blog/blog-details-1.jpg";


const post_box_content = {
    title_1: <>The Ultimate Guide to Google Ads: Maximize Your ROI</>,
    des_1: <>Google Ads, formerly known as Google AdWords, is an essential tool for businesses looking to reach a broader audience online. With its wide reach and powerful targeting capabilities, Google Ads can significantly boost your marketing efforts. However, to truly maximize your return on investment (ROI), it's important to understand and effectively utilize this platform. In this blog, we'll dive into the strategies and tips that can help you get the most out of your Google Ads campaigns.</>,
    checkmark_list: [
        "Understanding Google Ads",
        "Campaign Types",
        "Setting Clear Objectives",
        "Keyword Research and Selection",
        "Negative Keywords",
        "Crafting Compelling Ad Copy",
        "Targeting and Audience Segmentation",
        "Budgeting and Bidding",
        "Continuous Testing and Optimization",
        "Use Analytics",
    ],
    title_2: "Understanding Google Ads",
    des_2: <>Before diving into strategies, it's crucial to understand what Google Ads is and how it works. Google Ads is a pay-per-click (PPC) advertising platform, meaning you pay each time someone clicks on your ad. These ads can appear in Google's search results, on other websites through Google's Display Network, and on YouTube.</>,
    
    title_3:"Campaign Types",
    des_3: <>Google Ads offers several campaign types, including:</>,
    checkmark_list_2: {
      "Search Campaigns: " : "These ads appear in Google's search results.",
      "Display Campaigns:" : "These use visual ads that appear on websites within Google's Display Network.",
      "Video Campaigns": "These ads are shown on YouTube.",
      "Shopping Campaigns": "Ideal for e-commerce businesses, these ads showcase products directly in search results.",
    },

    title_4:"Setting Clear Objectives",
    des_4: <>To maximize ROI, start with clear objectives. Are you looking to increase website traffic, generate leads, boost sales, or improve brand awareness? Your goals will dictate your campaign type, targeting options, and budget allocation.</>,

    title_5:"Keyword Research and Selection",
    des_5: <>For search campaigns, keyword selection is paramount. Use tools like Google's Keyword Planner to find relevant keywords with good search volume and reasonable competition. Opt for a mix of broad and long-tail keywords to balance reach and specificity.</>,
    checkmark_list_4: {
      "Negative Keywords: " : "Don't overlook negative keywords. These prevent your ads from showing up for irrelevant searches, saving you money and improving campaign efficiency.",
    },
    title_6:"Crafting Compelling Ad Copy",
    des_6: <>Your ad copy should be clear, engaging, and aligned with your objectives. Include a strong call-to-action (CTA) and leverage ad extensions to provide additional information and links.</>,

    title_7:"Targeting and Audience Segmentation",
    des_7: <>Google Ads offers robust targeting options. You can target based on demographics, interests, behaviors, and more. Segment your audience to create more personalized and effective campaigns.</>,
    checkmark_list_3: {
      "Remarketing: " : "Remarketing is a powerful way to reach people who have previously interacted with your business. Tailor your ads to these audiences to improve conversion rates.",
    },
    title_8:"Budgeting and Bidding",
    des_8: <>Set a realistic budget based on your objectives and market competition. Understand different bidding strategies (like cost-per-click, cost-per-impression, or cost-per-acquisition) and choose one that aligns with your campaign goals.</>,

    title_9:"Continuous Testing and Optimization",
    des_9: <>Google Ads is not a set-it-and-forget-it tool. Regularly test different elements of your campaigns (like ad copy, keywords, and landing pages) and analyze the data to see what works best.</>,

    title_10:"Use Analytics",
    des_10: <>Integrate Google Analytics with Google Ads to get deeper insights into user behavior and campaign performance. This data is crucial for making informed adjustments.</>,
    title_11:"Conclusion",
    conclusion: <>Google Ads can be an incredibly effective tool for reaching your marketing goals, but it requires strategic planning, continuous optimization, and a deep understanding of its features. By setting clear objectives, choosing the right keywords, crafting compelling ads, targeting effectively, and continuously testing and optimizing, you can significantly improve your Google Ads ROI. Remember, the key to success with Google Ads is to remain adaptable and data-driven in your approach.    </>,
    
}
const {title_1, des_1, des_2, checkmark_list,checkmark_list_2,checkmark_list_3,checkmark_list_4, title_2,title_3,title_4,title_5,title_6,title_7,title_8,title_9,title_10,title_11, des_3, des_4, des_5, des_6,des_7,des_8,des_9,des_10,des_11,conclusion}  = post_box_content


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
                           <div className="postbox__details-checkmark">
                              <ul>
                                {checkmark_list.map((item, i)  => <li key={i}><i className="fal fa-check"></i>{item}</li>)} 
                              </ul>
                           </div>


                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_2}</h4>
                              <p>{des_2}</p>
                           </div>

                           <div className="postbox__details-title-box pb-15">
                           <h4 className="postbox__details-title">{title_3}</h4>
                              <p>{des_3}</p>
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
 
                           <div className="postbox__details-title-box pb-15">
                              <h4 className="postbox__details-title">{title_4}</h4>
                              <p>{des_4}</p>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <h4 className="postbox__details-title">{title_5}</h4>
                              <p>{des_5}</p>
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
                           <div className="postbox__details-title-box pb-15">
                              <h4 className="postbox__details-title">{title_6}</h4>
                              <p>{des_6}</p>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <h4 className="postbox__details-title">{title_7}</h4>
                              <p>{des_7}</p>
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

                           <div className="postbox__details-title-box pb-15">
                              <h4 className="postbox__details-title">{title_8}</h4>
                              <p>{des_8}</p>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <h4 className="postbox__details-title">{title_9}</h4>
                              <p>{des_9}</p>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <h4 className="postbox__details-title">{title_10}</h4>
                              <p>{des_10}</p>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                           <h4 className="postbox__details-title">{title_11}</h4>
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