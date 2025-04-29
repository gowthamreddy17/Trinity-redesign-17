// import React from "react";
// import {
//   Laptop,
//   Headphones,
//   DollarSign,
//   Megaphone,
//   PenTool,
//   Paintbrush2,
// } from "lucide-react";

// // eslint-disable-next-line no-unused-vars
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import ServiceSlider from "./ServiceSlider";
// import ContactCard from "./ContactCard";
// import Testimonials from "./Testimonials";

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
//       "Our BPO solutions include data entry, customer service, back-office operations, and process automation, ensuring cost-effectiveness and scalability.",
//     icon: <Headphones className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Financial Services",
//     description:
//       "We provide accounting, payroll processing, tax management, and investment advisory to ensure accuracy, compliance, and growth.",
//     icon: <DollarSign className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Digital Marketing Services",
//     description:
//       "We craft powerful strategies using SEO, social media, paid ads, and content marketing to grow your brand online.",
//     icon: <Megaphone className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Content Writing",
//     description:
//       "We offer SEO-friendly blogs, technical documentation, product copywriting, and content tailored to your voice and audience.",
//     icon: <PenTool className="text-accent w-8 h-8" />,
//   },
//   {
//     title: "Graphic Design",
//     description:
//       "Stunning visual content for branding, social media, web, and print. We turn your ideas into captivating visuals.",
//     icon: <Paintbrush2 className="text-accent w-8 h-8" />,
//   },
// ];

// const ServiceCard = ({ service, index }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { threshold: 0.2 });

//   return (
//     <motion.div
//       ref={ref}
//       className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-transparent hover:border-accent/50 hover:shadow-xl transition duration-300"
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//     >
//       <div>{service.icon}</div>
//       <div>
//         <h3 className="text-xl font-semibold text-secondary mb-2">
//           {service.title}
//         </h3>
//         <p className="text-dark">{service.description}</p>
//       </div>
//     </motion.div>
//   );
// };

// const ServicesSection = () => {
//   return (
//     <section className="bg-background py-16 px-6">
//       <ServiceSlider />
//       <ContactCard />
//       <Testimonials />
//       <div className="mb-20"></div>
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-heading text-primary mb-4">
//           Our Services
//         </h2>
//         <p className="text-lg text-dark">
//           We provide a wide range of creative services
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
//         {services.map((service, index) => (
//           <ServiceCard key={index} service={service} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
import React, { useEffect, useRef } from "react";
import {
  Laptop,
  Headphones,
  DollarSign,
  Megaphone,
  PenTool,
  Paintbrush2,
} from "lucide-react";
import gsap from "gsap";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import ServiceSlider from "./ServiceSlider";
import ContactCard from "./ContactCard";
import Testimonials from "./Testimonials";

const services = [
  {
    title: "Software Services",
    description:
      "Cutting-edge solutions including AI, cloud computing, and custom apps to streamline your business.",
    icon: <Laptop className="text-accent w-8 h-8" />,
  },
  {
    title: "BPO Services",
    description:
      "Data entry, customer service, back-office automation for cost-effective growth.",
    icon: <Headphones className="text-accent w-8 h-8" />,
  },
  {
    title: "Financial Services",
    description:
      "Accounting, tax management, payroll, and financial planning for businesses.",
    icon: <DollarSign className="text-accent w-8 h-8" />,
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, paid ads, content, and social media strategies to grow your online presence.",
    icon: <Megaphone className="text-accent w-8 h-8" />,
  },
  {
    title: "Content Writing",
    description:
      "High-quality, SEO-friendly content tailored for blogs, product pages, and more.",
    icon: <PenTool className="text-accent w-8 h-8" />,
  },
  {
    title: "Graphic Design",
    description:
      "Brand visuals, social creatives, and UI/UX graphics that captivate and convert.",
    icon: <Paintbrush2 className="text-accent w-8 h-8" />,
  },
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { threshold: 0.2 });

  useEffect(() => {
    if (!cardRef.current) return;

    const el = cardRef.current;
    const onEnter = () =>
      gsap.to(el, {
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });
    const onLeave = () =>
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="p-6 bg-[#141414] text-white rounded-2xl border border-white/10 shadow-lg backdrop-blur-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-4">
        {service.icon}
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">
            {service.title}
          </h3>
          <p className="text-sm text-gray-300">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1a1a2e] via-[#1f2937] to-[#0f172a] text-white">
      <ServiceSlider />
      <ContactCard />
      <Testimonials />
      <div className="mb-20"></div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-3 font-heading">
          Our Services
        </h2>
        <p className="text-lg text-gray-300">
          We offer diverse solutions to power your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
