
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog_details_img_1  from "../../../../public/assets/img/blog/css-tricks.jpg";


const post_box_content = {
   title_1: <>Elevate Your Tailwind CSS Projects</>,
   des_1: <>For a long time, I hesitated to adopt Tailwind CSS...</>,

   title_2: "1. Delegate Classes",
   des_2: (
     <>
       Simplify your code by delegating classes to parent elements...
       <br />
       <br />
       <code>
         {`<ul className="text-2xl text-teal-900">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li><a href="#">Home</a></li>`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li><a href="#">About</a></li>`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li><a href="#">Contact</a></li>`}
         <br />
         {`</ul>`}
       </code>
     </>
   ),
   title_3: "2. Space Between Elements",
   des_3: (
     <>
       Use the <code>space-x-*</code> and <code>space-y-*</code> utilities on parent elements to manage spacing between child 
       elements without adding margin or padding to each child.
       <br />
       <br />
       <code>
         {`<ul className="flex flex-row space-x-5">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li className="size-16 bg-red-400">Item 1</li>`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li className="size-16 bg-red-500">Item 2</li>`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li className="size-16 bg-red-600">Item 3</li>`}
         <br />
         {`</ul>`}
       </code>
     </>
   ),
   title_4: "3. Use @apply Sparingly",
   des_4: (
     <>
       Avoid overusing the <code>@apply</code> directive in your CSS. While it can be helpful, excessive use can lead to 
       class name collisions and maintenance challenges.
       <br />
       <br />
       <code>
         {`.nav-items {`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`@apply flex flex-row space-x-3;`}
         <br />
         {`}`}
       </code>
       <br />
       <br />
       <code>
         {`<ul className="nav-items">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li>Item 1</li>`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li>Item 2</li>`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<li>Item 3</li>`}
         <br />
         {`</ul>`}
       </code>
     </>
   ),
   title_5: "4. Adding Opacity",
   des_5: (
     <>
       Tailwind makes it easy to add opacity to backgrounds and text with <code>bg-opacity-*</code> and <code>text-opacity-*</code> utilities.
       <br />
       <br />
       <code>
         {`<div className="bg-teal-700 bg-opacity-50 w-[200px]">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<p className="text-blue-700 text-opacity-70">Tailwind CSS text</p>`}
         <br />
         {`</div>`}
       </code>
     </>
   ),
   title_6: "5. Transitions and Animations",
   des_6: (
     <>
       Incorporate smooth transitions and animations effortlessly with Tailwind’s <code>transition-*</code> and <code>duration-*</code> classes. 
       Use pre-made animation classes like <code>animate-spin</code>, <code>animate-ping</code>, and <code>animate-bounce</code> for added flair.
       <br />
       <br />
       <code>
         {`<button className="transition-colors duration-200 p-2 text-white rounded bg-blue-500 hover:bg-blue-700 active:bg-blue-900">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`Buy Items`}
         <br />
         {`</button>`}
       </code>
     </>
   ),
   title_7: "6. Group Hover",
   des_7: (
     <>
       Achieve complex hover effects by using the <code>group</code> class on parent elements and <code>group-hover</code> on child elements.
       <br />
       <br />
       <code>
         {`<button className="group">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<span>Click!</span>`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<span className="ml-2 inline-block group-hover:rotate-90">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`&rarr;`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`</span>`}
         <br />
         {`</button>`}
       </code>
     </>
   ),
   title_8: "7. Pseudo Classes",
   des_8: (
     <>
       Use Tailwind’s predefined classes for <code>before</code> and <code>after</code> pseudo-elements directly in your JSX/HTML. 
       Remember to add <code>position: relative</code> for proper functionality.
       <br />
       <br />
       <code>
         {`<button className="p-2 relative after:absolute after:bg-green-300 after:inset-0 after:z-0">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`<h6 className="z-10 relative">BUTTON</h6>`}
         <br />
         {`</button>`}
       </code>
     </>
   ),
   title_9: "8. Custom Input Values",
   des_9: (
     <>
       When predefined class names don’t suffice, use custom values with the <code>property-[value]</code> syntax.
       <br />
       <br />
       <code>
         {`<h5 className="text-[#007bff] text-[4rem]">`}
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;{`Hello World`}
         <br />
         {`</h5>`}
       </code>
     </>
   ),
   title_10: "Resources",
   des_10: (
     <>
       Enhance your projects with ready-made Tailwind CSS components from:
       <ul className="list-disc pl-5">
         <li>
           <a href="https://flowbite.com" className="text-blue-600 hover:underline">
             Flowbite
           </a>
         </li>
         <li>
           <a href="https://daisyui.com" className="text-blue-600 hover:underline">
             daisyUI
           </a>
         </li>
         <li>
           <a href="https://tailwindcomponents.com" className="text-blue-600 hover:underline">
             TailwindCSS Component (Includes a cheatsheet)
           </a>
         </li>
       </ul>
     </>
   ),
   title_11: "Bonus Tip: Tailwind IntelliSense Plugin",
   des_11: <>For a more efficient development experience, use the Tailwind IntelliSense plugin, which offers auto-completion and intelligent suggestions for Tailwind classes.</>,
   conclusion: <>Tailwind CSS can revolutionize your web development process, making it faster and more enjoyable.</>,
 };
const {title_1, des_1, des_2, title_2,title_3,title_4,title_5,title_6,title_7,title_8,title_9,title_10,title_11, des_3, des_4, des_5, des_6,des_7,des_8,des_9,des_10,des_11,conclusion}  = post_box_content


const PostboxArea = ({ style_details_2 }) => {
   return (
     <div className={`postbox__area ${style_details_2 ? "pt-100" : ""} pb-100`}>
       <div className="container">
         <div className="row">
           <div className="col-xxl-10 col-xl-10 col-lg-10">
             <div className="postbox__details-wrapper pr-20">
               <article>
                 {style_details_2 && (
                   <div className="postbox__thumb w-img">
                     <Link href="/blog-details">
                       <Image src={blog_details_img_1} alt="Blog details" />
                     </Link>
                   </div>
                 )}
 
                 <div className="postbox__details-title-box pb-30">
                   <h4 className="postbox__details-title">{title_1}</h4>
                   {des_1}
                 </div>
 
                 <div className="postbox__details-title-box pb-30">
                   <h4 className="postbox__details-title">{title_2}</h4>
                   {des_2}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_3}</h4>
                   {des_3}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_4}</h4>
                   {des_4}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_5}</h4>
                   {des_5}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_6}</h4>
                   {des_6}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_7}</h4>
                   {des_7}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_8}</h4>
                   {des_8}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_9}</h4>
                   {des_9}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_10}</h4>
                   {des_10}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   <h4 className="postbox__details-title">{title_11}</h4>
                   {des_11}
                 </div>
 
                 <div className="postbox__details-title-box pb-15">
                   {conclusion}
                 </div>
               </article>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
       

export default PostboxArea;