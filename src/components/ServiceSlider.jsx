// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import gsap from "gsap";
// import {
//   Laptop,
//   Headphones,
//   DollarSign,
//   Megaphone,
//   PenTool,
//   Paintbrush2,
// } from "lucide-react";

// const services = [
//   {
//     title: "Software Services",
//     description:
//       "Cloud, AI, and app development to streamline business operations.",
//     icon: <Laptop className="text-accent w-8 h-8" />,
//     image: "/hero-background.jpg",
//   },
//   {
//     title: "BPO Services",
//     description:
//       "Customer service, data entry, and back-office outsourcing.",
//     icon: <Headphones className="text-accent w-8 h-8" />,
//     image: "/bpo.jpg",
//   },
//   {
//     title: "Financial Services",
//     description:
//       "Payroll, tax management, and accounting solutions.",
//     icon: <DollarSign className="text-accent w-8 h-8" />,
//     image: "/finance.jpg",
//   },
//   {
//     title: "Digital Marketing Services",
//     description:
//       "SEO, ads, and content strategies for brand growth.",
//     icon: <Megaphone className="text-accent w-8 h-8" />,
//     image: "/digital-marketing.jpg",
//   },
//   {
//     title: "Content Writing",
//     description:
//       "SEO blogs, product copy, and technical documents.",
//     icon: <PenTool className="text-accent w-8 h-8" />,
//     image: "/content-writing.jpg",
//   },
//   {
//     title: "Graphic Design",
//     description:
//       "Web visuals, branding assets, and social media designs.",
//     icon: <Paintbrush2 className="text-accent w-8 h-8" />,
//     image: "/graphic-design.jpg",
//   },
// ];

// const ServiceSlider = () => {
//   const cardsRef = React.useRef([]);

//   const [sliderRef, slider] = useKeenSlider({
//     loop: true,
//     slides: {
//       perView: 1,
//       spacing: 16,
//     },
//     breakpoints: {
//       "(min-width: 640px)": {
//         slides: { perView: 1.2 },
//       },
//       "(min-width: 768px)": {
//         slides: { perView: 2 },
//       },
//       "(min-width: 1024px)": {
//         slides: { perView: 3 },
//       },
//     },
//     created(s) {
//       setInterval(() => {
//         s.next();
//       }, 2360); // Automatic scroll interval
//     },
//     slideChanged(s) {
//       const currentIndex = s.track.details.rel;
//       cardsRef.current.forEach((card, idx) => {
//         if (!card) return;
//         if (idx === currentIndex) {
//           gsap.fromTo(
//             card,
//             { scale: 0.8, opacity: 0 },
//             {
//               scale: 1,
//               opacity: 1,
//               duration: 0.6,
//               ease: "expo.out",
//               rotationX: 0,
//             }
//           );
//         } else {
//           gsap.to(card, {
//             opacity: 0.85,
//             scale: 0.95,
//             duration: 0.4,
//             ease: "power2.out",
//           });
//         }
//       });
//     },
//   });

//   React.useEffect(() => {
//     cardsRef.current.forEach((card) => {
//       if (!card) return;
//       const tl = gsap.timeline({ paused: true });

//       tl.to(card, {
//         scale: 1.05,
//         boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
//         duration: 0.3,
//         ease: "power2.out",
//       });

//       card.addEventListener("mouseenter", () => tl.play());
//       card.addEventListener("mouseleave", () => tl.reverse());
//     });

//     return () => {
//       cardsRef.current.forEach((card) => {
//         if (!card) return;
//         card.onmouseenter = null;
//         card.onmouseleave = null;
//       });
//     };
//   }, []);

//   return (
//     <div className="relative px-4 py-16 bg-background">
//       {/* SVG Background Animation */}
//       <svg
//         preserveAspectRatio="xMidYMid slice"
//         viewBox="10 10 80 80"
//         className="absolute top-0 left-0 w-full h-full"
//       >
//         <defs>
//           <style>
//             {`
//               @keyframes rotate {
//                 0% {
//                   transform: rotate(0deg);
//                 }
//                 100% {
//                   transform: rotate(360deg);
//                 }
//               }
//               .out-top {
//                 animation: rotate 20s linear infinite;
//                 transform-origin: 13px 25px;
//               }
//               .in-top {
//                 animation: rotate 10s linear infinite;
//                 transform-origin: 13px 25px;
//               }
//               .out-bottom {
//                 animation: rotate 25s linear infinite;
//                 transform-origin: 84px 93px;
//               }
//               .in-bottom {
//                 animation: rotate 15s linear infinite;
//                 transform-origin: 84px 93px;
//               }
//             `}
//           </style>
//         </defs>
//         <path
//           fill="#9b5de5"
//           className="out-top"
//           d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
//         />
//         <path
//           fill="#f15bb5"
//           className="in-top"
//           d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
//         />
//         <path
//           fill="#00bbf9"
//           className="out-bottom"
//           d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
//         />
//         <path
//           fill="#00f5d4"
//           className="in-bottom"
//           d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
//         />
//       </svg>

//       <h2 className="text-3xl font-semibold text-center text-primary mb-8">
//         Our Core Services
//       </h2>
//       <div ref={sliderRef} className="keen-slider px-2 relative z-10">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="keen-slider__slide flex justify-center"
//           >
//             <div
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="w-[300px] flex flex-col rounded-xl overflow-hidden bg-white border border-gray-300 shadow-md hover:shadow-xl transition duration-300 service-card"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-5 flex flex-col flex-1">
//                 <div className="mb-3 flex items-center gap-3">
//                   {service.icon}
//                   <h3 className="text-lg font-bold text-gray-800">
//                     {service.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 text-sm flex-1">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Left and Right Arrows */}
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
//         <button
//           className="text-white bg-gray-800 p-2 rounded-full"
//           onClick={() => slider.prev()}
//         >
//           &lt;
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
//         <button
//           className="text-white bg-gray-800 p-2 rounded-full"
//           onClick={() => slider.next()}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceSlider;

// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import gsap from "gsap";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion"; // Import Framer Motion

// import {
//   Laptop,
//   Headphones,
//   DollarSign,
//   Megaphone,
//   PenTool,
//   Paintbrush2,
// } from "lucide-react";

// const services = [
//   {
//     title: "Software Services",
//     description:
//       "Cloud, AI, and app development to streamline business operations.",
//     icon: <Laptop className="text-accent w-8 h-8" />,
//     image: "/hero-background.jpg",
//   },
//   {
//     title: "BPO Services",
//     description: "Customer service, data entry, and back-office outsourcing.",
//     icon: <Headphones className="text-accent w-8 h-8" />,
//     image: "/bpo.jpg",
//   },
//   {
//     title: "Financial Services",
//     description: "Payroll, tax management, and accounting solutions.",
//     icon: <DollarSign className="text-accent w-8 h-8" />,
//     image: "/finance.jpg",
//   },
//   {
//     title: "Digital Marketing Services",
//     description: "SEO, ads, and content strategies for brand growth.",
//     icon: <Megaphone className="text-accent w-8 h-8" />,
//     image: "/digital-marketing.jpg",
//   },
//   {
//     title: "Content Writing",
//     description: "SEO blogs, product copy, and technical documents.",
//     icon: <PenTool className="text-accent w-8 h-8" />,
//     image: "/content-writing.jpg",
//   },
//   {
//     title: "Graphic Design",
//     description: "Web visuals, branding assets, and social media designs.",
//     icon: <Paintbrush2 className="text-accent w-8 h-8" />,
//     image: "/graphic-design.jpg",
//   },
// ];

// const ServiceSlider = () => {
//   const cardsRef = React.useRef([]);

//   const [sliderRef, slider] = useKeenSlider({
//     loop: true,
//     slides: {
//       perView: 1,
//       spacing: 16,
//     },
//     breakpoints: {
//       "(min-width: 640px)": {
//         slides: { perView: 1.2 },
//       },
//       "(min-width: 768px)": {
//         slides: { perView: 2 },
//       },
//       "(min-width: 1024px)": {
//         slides: { perView: 3 },
//       },
//     },
//     created(s) {
//       setInterval(() => {
//         s.next();
//       }, 2360); // Automatic scroll interval
//     },
//   });

//   React.useEffect(() => {
//     cardsRef.current.forEach((card) => {
//       if (!card) return;
//       const tl = gsap.timeline({ paused: true });

//       tl.to(card, {
//         scale: 1.05,
//         boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
//         duration: 0.3,
//         ease: "power2.out",
//       });

//       card.addEventListener("mouseenter", () => tl.play());
//       card.addEventListener("mouseleave", () => tl.reverse());
//     });

//     return () => {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       cardsRef.current.forEach((card) => {
//         if (!card) return;
//         card.onmouseenter = null;
//         card.onmouseleave = null;
//       });
//     };
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.3 }}
//       className="relative z-20"
//     >
//       {/* SVG Background Animation */}
//       <svg
//         preserveAspectRatio="xMidYMid slice"
//         viewBox="10 10 80 80"
//         className="absolute top-0 left-0 w-full h-full"
//       >
//         <defs>
//           <style>
//             {`
//               @keyframes rotate {
//                 0% {
//                   transform: rotate(0deg);
//                 }
//                 100% {
//                   transform: rotate(360deg);
//                 }
//               }
//               .out-top {
//                 animation: rotate 20s linear infinite;
//                 transform-origin: 13px 25px;
//               }
//               .in-top {
//                 animation: rotate 10s linear infinite;
//                 transform-origin: 13px 25px;
//               }
//               .out-bottom {
//                 animation: rotate 25s linear infinite;
//                 transform-origin: 84px 93px;
//               }
//               .in-bottom {
//                 animation: rotate 15s linear infinite;
//                 transform-origin: 84px 93px;
//               }
//             `}
//           </style>
//         </defs>
//         <path
//           fill="#9b5de5"
//           className="out-top"
//           d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
//         />
//         <path
//           fill="#f15bb5"
//           className="in-top"
//           d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
//         />
//         <path
//           fill="#00bbf9"
//           className="out-bottom"
//           d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
//         />
//         <path
//           fill="#00f5d4"
//           className="in-bottom"
//           d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
//         />
//       </svg>

//       <h2 className="text-3xl font-semibold text-center text-primary mb-8">
//         Our Core Services
//       </h2>
//       <div ref={sliderRef} className="keen-slider px-2 relative z-10">
//         {services.map((service, index) => (
//           <div key={index} className="keen-slider__slide flex justify-center">
//             <div
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="w-[300px] flex flex-col rounded-xl overflow-hidden bg-white border border-gray-300 shadow-md hover:shadow-xl transition duration-300 service-card"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-5 flex flex-col flex-1">
//                 <div className="mb-3 flex items-center gap-3">
//                   {service.icon}
//                   <h3 className="text-lg font-bold text-gray-800">
//                     {service.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 text-sm flex-1">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Left and Right Arrows */}
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
//         <button
//           className="text-white bg-gray-800 p-2 rounded-full"
//           onClick={() => slider.prev()}
//         >
//           &lt;
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
//         <button
//           className="text-white bg-gray-800 p-2 rounded-full"
//           onClick={() => slider.next()}
//         >
//           &gt;
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceSlider;

// components/ServiceSlider.js
// import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Laptop,
  Headphones,
  DollarSign,
  Megaphone,
  PenTool,
  Paintbrush2,
} from "lucide-react";

const services = [
  {
    title: "Software Services",
    description:
      "To improve productivity and streamline corporate processes, we offer state-of-the-art software solutions, such as cloud computing, AI-driven technologies, and web and mobile app development.",
    icon: <Laptop className="text-accent w-8 h-8" />,
    image: "/hero-background.jpg",
  },
  {
    title: "BPO Services",
    description:
      "Our BPO solutions include data entry, customer service, back-office operations, and process automation, ensuring cost-effectiveness and scalability.",
    icon: <Headphones className="text-accent w-8 h-8" />,
    image: "/bpo.jpg",
  },
  {
    title: "Financial Services",
    description:
      "We provide accounting, payroll processing, tax management, and investment advisory to ensure accuracy, compliance, and growth.",
    icon: <DollarSign className="text-accent w-8 h-8" />,
    image: "/finance.jpg",
  },
  {
    title: "Digital Marketing Services",
    description:
      "We craft powerful strategies using SEO, social media, paid ads, and content marketing to grow your brand online.",
    icon: <Megaphone className="text-accent w-8 h-8" />,
    image: "/digital-marketing.jpg",
  },
  {
    title: "Content Writing",
    description:
      "We offer SEO-friendly blogs, technical documentation, product copywriting, and content tailored to your voice and audience.",
    icon: <PenTool className="text-accent w-8 h-8" />,
    image: "/content-writing.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "Stunning visual content for branding, social media, web, and print. We turn your ideas into captivating visuals.",
    icon: <Paintbrush2 className="text-accent w-8 h-8" />,
    image: "/graphic-design.jpg",
  },
];

const ServiceSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.2 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3 },
      },
    },
    created(s) {
      setInterval(() => {
        s.next();
      }, 2360);
    },
  });

  return (
    <div className="px-4 py-16 bg-[#FFFFFF00]">
      <h2 className="text-3xl font-semibold text-center text-[#fec601] underline decoration-white mb-8">
       🖥️ Our Core Services
      </h2>
      <div ref={sliderRef} className="keen-slider px-2">
        {services.map((service, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <div className="w-[300px] flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3 flex items-center gap-3">
                  {service.icon}
                  <h3 className="text-xl font-bold text-black underline decoration-[#fec601]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-black text-sm flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
