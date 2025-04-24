import React from "react";
import {
  Laptop,
  Headphones,
  DollarSign,
  Megaphone,
  PenTool,
  Paintbrush2,
} from "lucide-react";

// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceSlider from "./ServiceSlider";
import ContactCard from "./ContactCard";
import Testimonials from "./Testimonials";

const services = [
  {
    title: "Software Services",
    description:
      "To improve productivity and streamline corporate processes, we offer state-of-the-art software solutions, such as cloud computing, AI-driven technologies, and web and mobile app development.",
    icon: <Laptop className="text-accent w-8 h-8" />,
  },
  {
    title: "BPO Services",
    description:
      "Our BPO solutions include data entry, customer service, back-office operations, and process automation, ensuring cost-effectiveness and scalability.",
    icon: <Headphones className="text-accent w-8 h-8" />,
  },
  {
    title: "Financial Services",
    description:
      "We provide accounting, payroll processing, tax management, and investment advisory to ensure accuracy, compliance, and growth.",
    icon: <DollarSign className="text-accent w-8 h-8" />,
  },
  {
    title: "Digital Marketing Services",
    description:
      "We craft powerful strategies using SEO, social media, paid ads, and content marketing to grow your brand online.",
    icon: <Megaphone className="text-accent w-8 h-8" />,
  },
  {
    title: "Content Writing",
    description:
      "We offer SEO-friendly blogs, technical documentation, product copywriting, and content tailored to your voice and audience.",
    icon: <PenTool className="text-accent w-8 h-8" />,
  },
  {
    title: "Graphic Design",
    description:
      "Stunning visual content for branding, social media, web, and print. We turn your ideas into captivating visuals.",
    icon: <Paintbrush2 className="text-accent w-8 h-8" />,
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-transparent hover:border-accent/50 hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div>{service.icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-secondary mb-2">
          {service.title}
        </h3>
        <p className="text-dark">{service.description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-background py-16 px-6">
      <ServiceSlider />
      <ContactCard />
      <Testimonials />
      <div className="mb-20"></div>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-heading text-primary mb-4">
          Our Services
        </h2>
        <p className="text-lg text-dark">
          We provide a wide range of creative services
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

// import React from 'react';
// import {
//   Laptop,
//   Headphones,
//   DollarSign,
//   Megaphone,
//   PenTool,
//   Paintbrush2
// } from 'lucide-react';

// const services = [
//   {
//     title: "Software Services",
//     description:
//       "To improve productivity and streamline corporate processes, we offer state-of-the-art software solutions, such as cloud computing, AI-driven technologies, and web and mobile app development.",
//     icon: <Laptop className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "BPO Services",
//     description:
//       "Our BPO solutions, which guarantee cost effectiveness, scalability, and smooth business operations, include data entry, customer service, back-office operations, and process automation.",
//     icon: <Headphones className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Financial Services",
//     description:
//       "To ensure compliance, accuracy, and financial growth for businesses, we provide professional financial solutions, such as accounting, payroll processing, tax management, and investment advisory.",
//     icon: <DollarSign className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Digital Marketing Services",
//     description:
//       "We craft powerful digital strategies and execute campaigns across SEO, social media, paid advertising, and content marketing to elevate your brand’s online presence and engagement.",
//     icon: <Megaphone className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Content Writing",
//     description:
//       "Engage your audience with high-quality, SEO-friendly content tailored to your brand. We offer blog writing, copywriting, technical documentation, and more.",
//     icon: <PenTool className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Graphic Design",
//     description:
//       "We bring your ideas to life with visually stunning designs for logos, brochures, branding, social media creatives, and web assets that captivate and convert.",
//     icon: <Paintbrush2 className="text-accent w-8 h-8" />,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="bg-background py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-heading text-primary mb-4">Our Services</h2>
//         <p className="text-lg text-dark">We provide a wide range of creative services</p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
//           >
//             <div>{service.icon}</div>
//             <div>
//               <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
//               <p className="text-dark">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
