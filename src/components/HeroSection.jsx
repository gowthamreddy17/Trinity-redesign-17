import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../assets/hero-lottie.json";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] w-full bg-background flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center z-0 opacity-50"></div>
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="w-full md:w-1/2 max-w-xl">
          <p className="text-base sm:text-lg md:text-xl font-medium text-secondary mb-4">
            We are creative team.
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green-200 mb-6 leading-snug max-h-[120px] overflow-hidden">
            <Typewriter
              words={["The best way to develop business"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-dark font-bold mb-8 max-w-lg">
            Our work is presentation of our capabilities. Let your ideas become realworld applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-cta hover:bg-cta/80 text-black px-6 py-3 rounded-md font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              Explore Services
            </button>
            <button className="flex items-center gap-2 text-white hover:text-secondary font-medium px-6 py-3 transition-colors">
              Contact
            </button>
          </div>
        </div>

        {/* Right Lottie Animation */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 opacity-70">
          <div className="max-w-[900px] scale-[0.7]">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
