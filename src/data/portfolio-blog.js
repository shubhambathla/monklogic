// thumb img import here
import thumb_img_1 from "../../public/assets/img/blog/css-tricks.jpg";
import thumb_img_2 from "../../public/assets/img/blog/cms.jpg";
import thumb_img_3 from "../../public/assets/img/blog/e-commerce.jpg";
import thumb_img_4 from "../../public/assets/img/blog/google-ads.jpg";
import thumb_img_5 from "../../public/assets/img/blog/crypto.jpg";
import thumb_img_6 from "../../public/assets/img/blog/cloud.jpg";
import thumb_img_7 from "../../public/assets/img/blog/blog-grid-1.jpg";
import thumb_img_8 from "../../public/assets/img/blog/blog-grid-2.jpg";
import thumb_img_9 from "../../public/assets/img/blog/blog-grid-3.jpg";
import thumb_img_10 from "../../public/assets/img/blog/blog-grid-4.jpg";
import thumb_img_11 from "../../public/assets/img/blog/blog-grid-5.jpg";
import thumb_img_12 from "../../public/assets/img/blog/blog-grid-6.jpg";

// avata img import here
import avata_img_1 from "../../public/assets/img/avata/avata-1.png";
import avata_img_2 from "../../public/assets/img/avata/avata-2.png";
import avata_img_3 from "../../public/assets/img/avata/avata-3.png";
import avata_img_4 from "../../public/assets/img/avata/avata-4.png";
import avata_img_5 from "../../public/assets/img/avata/avata-5.png";
import avata_img_6 from "../../public/assets/img/avata/avata-6.png";
import avata_img_7 from "../../public/assets/img/avata/avata-1.png";
import avata_img_8 from "../../public/assets/img/avata/avata-2.png";
import avata_img_9 from "../../public/assets/img/avata/avata-3.png";
import avata_img_10 from "../../public/assets/img/avata/avata-4.png";
import avata_img_11 from "../../public/assets/img/avata/avata-5.png";
import avata_img_12 from "../../public/assets/img/avata/avata-6.png";

const portfolio_blog = [
  {
    id: 1,
    thumb_img: thumb_img_1,
    avata_img: avata_img_1,
    name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
    title: <>Top Tips and Tricks with Tailwind CSS</>,
    cls: "",
    date: "June 17, 2024",
    col: "",
    delay: ".5s",
    href: "blog/top10-seo-strategies",
    category: "Development",
    filter_id: [
      "all",
      "Designing",
      "Development",
      "Crypto",
      "Content",
      "Cloud",
      "Marketing",
    ],
  },
  {
    id: 2,
    thumb_img: thumb_img_2,
    avata_img: avata_img_2,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>Choosing the Right Content Management System (CMS) for Your Website</>
    ),
    cls: "",
    date: "May 25, 2023",
    col: "",
    delay: ".5s",
    href: "blog/how-to-choose-cms",
    category: "Development",
    filter_id: [
      "all",
      "Designing",
      "Development",
      "Crypto",
      "Content",
      "Cloud",
      "Marketing",
    ],
  },
  {
    id: 3,
    thumb_img: thumb_img_3,
    avata_img: avata_img_3,
    name: "Geraldine",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        The Future of E-Commerce: <br /> Trends and Predictions
      </>
    ),
    cls: "",
    date: "June 14, 2023",
    col: "",
    delay: ".5s",
    href: "blog/future-of-ecommerce",
    category: "Development",
    filter_id: [
      "all",
      "Designing",
      "Development",
      "Crypto",
      "Content",
      "Cloud",
      "Marketing",
    ],
  },
  {
    id: 4,
    thumb_img: thumb_img_4,
    avata_img: avata_img_4,
    name: "Helen M.",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        The Ultimate Guide to Google Ads: <br /> Maximize Your ROI
      </>
    ),
    cls: "",
    date: "July 14, 2023",
    col: "",
    delay: ".5s",
    href: "blog/guide-to-google-ads",
    category: "Marketing",
    filter_id: [
      "all",
      "Designing",
      "Development",
      "Crypto",
      "Content",
      "Cloud",
      "Marketing",
    ],
  },
  {
    id: 5,
    thumb_img: thumb_img_5,
    avata_img: avata_img_5,
    name: "R. Jones",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>The Future of Finance: How Cryptocurrencies Are Changing the Game</>
    ),
    cls: "",
    date: "August 17, 2023",
    col: "",
    delay: ".5s",
    href: "blog/future-of-finance",
    category: "Crypto",
    filter_id: [
      "all",
      "Designing",
      "Development",
      "Crypto",
      "Content",
      "Cloud",
      "Marketing",
    ],
  },
  {
    id: 6,
    thumb_img: thumb_img_6,
    avata_img: avata_img_6,
    name: "Frank P. Miller",
    job_title: "Founder & CEO Dulalix",
    title: (
      <>
        Comparing the Top Cloud Service Providers: AWS vs. Azure vs. Google
        Cloud
      </>
    ),
    cls: "",
    date: "September 18, 2023",
    col: "",
    delay: ".5s",
    href: "blog/compare-top-cloud-services",
    category: "Cloud",
    filter_id: [
      "all",
      "Designing",
      "Development",
      "Crypto",
      "Content",
      "Cloud",
      "Marketing",
    ],
  },

  // extra
  // {
  //     id: 7,
  //     thumb_img: thumb_img_7,
  //     avata_img: avata_img_7,
  //     name: "Hilary Ouse",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>The Role of Artificial Intelligence and Machine Learning in Cloud Computing</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Cloud",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 8,
  //     thumb_img: thumb_img_8,
  //     avata_img: avata_img_8,
  //     name: "Rudra Ghosh",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>The Psychology of User Experience (UX) Design</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Designing",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 9,
  //     thumb_img: thumb_img_9,
  //     avata_img: avata_img_9,
  //     name: "Geraldine",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>Building a Strong Brand Identity in the Digital Age</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Marketing",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 10,
  //     thumb_img: thumb_img_10,
  //     avata_img: avata_img_10,
  //     name: "Helen M.",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>Evaluating the ROI of Social Media Advertising Campaigns</>,
  //     cls: "",
  //     date: "April 24, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Marketing",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 11,
  //     thumb_img: thumb_img_11,
  //     avata_img: avata_img_11,
  //     name: "R. Jones",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>The Impact of Mobile-First Indexing on SEO and Web Development</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Marketing",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 12,
  //     thumb_img: thumb_img_12,
  //     avata_img: avata_img_12,
  //     name: "Frank P. Miller",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>How Chatbots Can Help You <br /> Drive More Sales</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Marketing",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 13,
  //     thumb_img: thumb_img_12,
  //     avata_img: avata_img_12,
  //     name: "Frank P. Miller",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>Choosing the Right Front-End Framework: React vs. Angular vs. Vue.js</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Development",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 14,
  //     thumb_img: thumb_img_12,
  //     avata_img: avata_img_12,
  //     name: "Frank P. Miller",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>Backend Development with Node.js: Building Scalable Web Applications</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Development",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 15,
  //     thumb_img: thumb_img_12,
  //     avata_img: avata_img_12,
  //     name: "Frank P. Miller",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>Crypto Wallet Security: Protecting Your Digital Assets from Hacks and Scams</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Crypto",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
  // {
  //     id: 15,
  //     thumb_img: thumb_img_12,
  //     avata_img: avata_img_12,
  //     name: "Frank P. Miller",
  //     job_title: "Founder & CEO Dulalix",
  //     title: <>The Psychology of Color in Design: How to Choose the Right Palette</>,
  //     cls: "",
  //     date: "April 12, 2023",
  //     col: "",
  //     delay: ".5s",
  //     href:"blog/top10-seo-strategies",
  //     category: "Designing",
  //     filter_id: ["all", "Designing", "Development", "Crypto", "Content", "Cloud", "Marketing" ],
  // },
];
export default portfolio_blog;
