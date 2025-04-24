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
      }, 3000);
    },
  });

  return (
    <div className="px-4 py-16 bg-background">
      <h2 className="text-3xl font-semibold text-center text-primary mb-8">
        Our Core Services
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
                  <h3 className="text-lg font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
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
