import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ServiceScroller from "./ServiceScroller";
import AnimatedStats from "./AnimatedStats";

export default function MainSection() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      {/* <ServiceScroller /> */}
      <div className="border mt-50">
        <AnimatedStats animationDuration={1.5} />
      </div>
      <ServicesSection />
    </div>
  );
}
