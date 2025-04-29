// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import Lottie from "lottie-react";
// import animationData from "../assets/hero-lottie.json"; // your lottie file path

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center bg-[#c3fdbf] overflow-hidden px-[10%]">
//       {/* Container */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10">
//         {/* Left - Text Content */}
//         <div className="flex-[0.5] text-left">
//           <h1 className="text-2xl md:text-6xl font-bold text-[#0f172a] leading-tight mb-6 min-h-[140px] md:min-h-[200px] overflow-visible">
//             <Typewriter
//               words={["The best way to develop your business"]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </h1>

//           <p className="text-lg md:text-xl text-[#334155] max-w-md mb-8">
//             Elevate your vision with 3D Magic. Unlock a world of brilliance with
//             the green sphere experience.
//           </p>

//           <button className="inline-flex items-center bg-[#0f172a] hover:bg-[#1e293b] text-[#fec601] font-semibold px-6 py-3 rounded-full text-lg transition-all duration-300 group">
//             Explore technology
//             <span className="ml-2 transform group-hover:translate-x-1 transition-all duration-300">
//               ↗
//             </span>
//           </button>
//         </div>

//         {/* Right - Two Lottie Animations positioned */}
//         <div className="flex-[0.4] relative flex flex-col items-center justify-start mt-10 md:mt-0 h-[auto] md:h-[500px]">
//           {/* First Lottie - Top Center */}
//           <div className="w-[250px] md:w-[300px] opacity-70 border-4 border-black rounded-2xl p-2">
//             <Lottie animationData={animationData} loop={true} />
//           </div>

//           {/* Second Lottie - Bottom Right */}
//           <div className="self-end w-[250px] md:w-[270px] opacity-70 border-4 border-black rounded-2xl p-2 mt-2 md:mt-1">
//             <Lottie animationData={animationData} loop={true} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import Lottie from "lottie-react";
// import animationData from "../assets/hero-lottie.json";
// import ModelViewer from "../components/ModelViewer";
// import SvgDrawer from "../components/SvgDrawer";
// import FloatingIcons from "../components/FloatingIcons";
// import { Link } from "react-router-dom"; // or use Next.js Link if applicable

// const icons = [
//   "/svg/business-growth.svg",
//   "/svg/shield-check.svg",
//   "/svg/global-network.svg",
//   "/svg/rocket.svg",
//   "/svg/bulb-business-idea.svg",
//   "/svg/teamwork.svg",
//   "/svg/waves.svg",
//   "/svg/dollar-prize-trophy.svg",
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center bg-[#c3fdbf] overflow-hidden px-[10%] pt-20 md:pt-0">
//       {/* Floating Icons (Mobile-Optimized) */}
//       <FloatingIcons
//         icons={icons}
//         iconSize={window.innerWidth < 768 ? 25 : 30}
//         opacity={0.065}
//         minMargin={window.innerWidth < 768 ? 100 : 180}
//         maxMargin={300}
//         screenPadding={30}
//         maxIcons={window.innerWidth < 768 ? 12 : 29}
//         isAnimate={true}
//         floatRange={5}
//       />

//       {/* Container */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10">
//         {/* Left - Text Content */}
//         <div className="flex-[0.5] text-left flex flex-col justify-center min-h-[140px] md:min-h-[50px]">
//           <h1 className="text-3xl md:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
//             <Typewriter
//               words={["The best way to develop your business"]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </h1>

//           {/* <h2 className="text-xl md:text-3xl text-[#0f172a] mb-4">
//             The best way to develop your business
//           </h2> */}

//           <p className="text-lg md:text-xl text-[#334155] max-w-md mb-8">
//             Our work is presentation of our capabilities. Let your ideas become
//             real-world applications.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link
//               to="/services"
//               className="inline-flex w-full sm:w-auto justify-center items-center bg-[#0f172a] hover:bg-[#1e293b] text-[#fec601] font-semibold px-6 py-3 rounded-full text-lg transition-all duration-300 group"
//             >
//               Explore services
//               <span className="ml-2 transform group-hover:translate-x-1 transition-all duration-300">
//                 ↗
//               </span>
//             </Link>

//             <Link
//               to="/contact"
//               className="inline-flex w-full sm:w-auto justify-center items-center bg-transparent hover:bg-[#0f172a]/10 text-[#0f172a] font-semibold border-2 border-[#0f172a] px-6 py-3 rounded-full text-lg transition-all duration-300 group"
//             >
//               Contact us
//               <span className="ml-2 transform group-hover:translate-x-1 transition-all duration-300">
//                 ↗
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Right - Media (Hidden on Mobile if Needed) */}
//         <div className="flex-[0.4] flex flex-col items-center justify-start mt-10 md:mt-0">
//           {/* Lottie Animation */}
//           <div className="w-[250px] md:w-[300px] opacity-80 border-4 border-black rounded-2xl p-2">
//             <Lottie animationData={animationData} loop={true} />
//           </div>

//           {/* 3D Model + SVG */}
//           <div className="flex w-full justify-between mt-6">
//             <div className="w-[200px] md:w-[250px] opacity-98 border-4 border-black rounded-2xl p-2">
//               <ModelViewer
//                 modelPath="/hello.compressed.glb"
//                 autoRotate={true}
//               />
//             </div>
//             <div className="w-[200px] md:w-[250px] opacity-98 border-4 border-black rounded-2xl p-2 ml-1 h-[175px]">
//               <SvgDrawer
//                 svgUrl="/light.svg"
//                 strokeGradient={[
//                   { offset: "0%", color: "red" },
//                   { offset: "100%", color: "blue" },
//                 ]}
//                 duration={5}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../assets/hero-lottie.json";
import ModelViewer from "../components/ModelViewer";
import SvgDrawer from "../components/SvgDrawer";
import FloatingIcons from "../components/FloatingIcons";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const icons = [
  "/svg/business-growth.svg",
  "/svg/shield-check.svg",
  "/svg/global-network.svg",
  "/svg/rocket.svg",
  "/svg/bulb-business-idea.svg",
  "/svg/teamwork.svg",
  "/svg/waves.svg",
  "/svg/dollar-prize-trophy.svg",
];

const HeroSection = () => {
  const heroRef = useRef();
  const titleContainerRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const descriptionRef = useRef();
  const buttonsRef = useRef([]);
  const lottieRef = useRef();
  const modelRef = useRef();
  const svgRef = useRef();
  const animationRef = useRef();

  // Calculate responsive height for typewriter container
  const getTypewriterHeight = () => {
    return window.innerWidth < 768 ? 100 : 120; // Adjust these values as needed
  };

  useEffect(() => {
    // Set initial height for typewriter container
    if (titleContainerRef.current) {
      titleContainerRef.current.style.height = `${getTypewriterHeight()}px`;
    }

    // Handle resize events
    const handleResize = () => {
      if (titleContainerRef.current) {
        titleContainerRef.current.style.height = `${getTypewriterHeight()}px`;
      }
    };

    window.addEventListener("resize", handleResize);

    // Animation setup
    if (
      !titleRef.current ||
      !subtitleRef.current ||
      !descriptionRef.current ||
      !lottieRef.current ||
      !modelRef.current ||
      !svgRef.current
    )
      return;

    if (animationRef.current) {
      animationRef.current.kill();
    }

    try {
      gsap.set(
        [titleRef.current, subtitleRef.current, descriptionRef.current],
        {
          opacity: 0,
          y: 20,
        }
      );
      gsap.set(buttonsRef.current.filter(Boolean), {
        opacity: 0,
        y: 10,
      });
      gsap.set([lottieRef.current, modelRef.current, svgRef.current], {
        opacity: 0,
        scale: 0.9,
      });

      animationRef.current = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      animationRef.current
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(
          descriptionRef.current,
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .to(
          buttonsRef.current.filter(Boolean),
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.2"
        )
        .to(lottieRef.current, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.3")
        .to(
          [modelRef.current, svgRef.current],
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4"
        );
    } catch (error) {
      console.error("Animation error:", error);
    }

    // Enhanced button hover effects
    const buttons = buttonsRef.current.filter(Boolean);
    const hoverHandlers = buttons.map((button, index) => {
      const isServicesButton = index === 0;

      const mouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          backgroundColor: isServicesButton ? "#fec601" : "#0f172a",
          color: isServicesButton ? "#0f172a" : "#fec601",
          borderColor: isServicesButton ? "#0f172a" : "#fec601",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(button.querySelector("span"), {
          x: 5,
          rotate: isServicesButton ? 0 : 45,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const mouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          backgroundColor: isServicesButton ? "#0f172a" : "transparent",
          color: isServicesButton ? "#fec601" : "#0f172a",
          borderColor: isServicesButton ? "#0f172a" : "#0f172a",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(button.querySelector("span"), {
          x: 0,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", mouseEnter);
      button.addEventListener("mouseleave", mouseLeave);

      return { button, mouseEnter, mouseLeave };
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      window.removeEventListener("resize", handleResize);
      hoverHandlers.forEach(({ button, mouseEnter, mouseLeave }) => {
        button.removeEventListener("mouseenter", mouseEnter);
        button.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#c3fdbf] overflow-hidden px-[10%] pt-20 md:pt-0"
    >
      <FloatingIcons
        icons={icons}
        iconSize={window.innerWidth < 768 ? 25 : 30}
        opacity={0.095}
        minMargin={window.innerWidth < 768 ? 100 : 180}
        maxMargin={300}
        screenPadding={30}
        maxIcons={window.innerWidth < 768 ? 12 : 29}
        isAnimate={true}
        floatRange={26}
      />

      <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10">
        {/* Left - Text Content */}
        <div className="flex-[0.5] text-left flex flex-col justify-center">
          {/* Fixed height container for typewriter */}
          <div
            ref={titleContainerRef}
            className="flex items-center mb-6"
            style={{ height: `${getTypewriterHeight()}px` }}
          >
            <h1
              ref={titleRef}
              className="text-2xl md:text-5xl font-bold text-[#228B22] leading-tight"
            >
              <Typewriter
                words={["The best way to develop your business"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
          </div>

          {/* <h2
            ref={subtitleRef}
            className="text-xl md:text-3xl text-[#0f172a] mb-4"
          >
            The best way to develop your business
          </h2> */}

          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-[#334155] max-w-md mb-8 mt-2"
          >
            Our work is presentation of our capabilities. Let your ideas become
            real-world applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              ref={(el) => (buttonsRef.current[0] = el)}
              to="/services"
              className="inline-flex w-full sm:w-auto justify-center items-center bg-[#0f172a] text-[#fec601] font-semibold border-2 border-[#0f172a] px-6 py-3 rounded-full text-lg"
            >
              Explore services
              <span className="ml-2 transition-all duration-300">↗</span>
            </Link>

            <Link
              ref={(el) => (buttonsRef.current[1] = el)}
              to="/contact"
              className="inline-flex w-full sm:w-auto justify-center items-center bg-transparent text-[#0f172a] font-semibold border-2 border-[#0f172a] px-6 py-3 rounded-full text-lg"
            >
              Contact us
              <span className="ml-2 transition-all duration-300">↗</span>
            </Link>
          </div>
        </div>

        {/* Right - Media */}
        <div className="flex-[0.4] flex flex-col items-center justify-start mt-10 md:mt-0">
          <div
            ref={lottieRef}
            className="w-[250px] md:w-[300px] opacity-80 border-4 border-black rounded-2xl p-2"
          >
            <Lottie animationData={animationData} loop={true} />
          </div>

          <div className="flex w-full justify-between mt-6">
            <div
              ref={modelRef}
              className="w-[200px] md:w-[250px] opacity-98 border-4 border-black rounded-2xl p-2"
            >
              <ModelViewer
                modelPath="/hello.compressed.glb"
                autoRotate={true}
              />
            </div>
            <div
              ref={svgRef}
              className="w-[200px] md:w-[250px] opacity-98 border-4 border-black rounded-2xl p-2 ml-1 h-[175px]"
            >
              <SvgDrawer
                svgUrl="/light.svg"
                strokeGradient={[
                  { offset: "0%", color: "red" },
                  { offset: "100%", color: "blue" },
                ]}
                duration={5}
                loopDuration={7}
                loopRequired={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import Lottie from "lottie-react";
// import animationData from "../assets/hero-lottie.json";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[calc(100vh-64px)] w-full bg-background flex items-center">
//       {/* Background image */}
//       <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center z-0 opacity-50"></div>
//       <div className="absolute inset-0 bg-black/20 z-0"></div>

//       <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
//         {/* Left content */}
//         <div className="w-full md:w-1/2 max-w-xl">
//           <p className="text-base sm:text-lg md:text-xl font-medium text-secondary mb-4">
//             We are creative team.
//           </p>

//           <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green-200 mb-6 leading-snug max-h-[120px] overflow-hidden">
//             <Typewriter
//               words={["The best way to develop business"]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </h1>

//           <p className="text-sm sm:text-base md:text-lg text-dark font-bold mb-8 max-w-lg">
//             Our work is presentation of our capabilities. Let your ideas become realworld applications.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-cta hover:bg-cta/80 text-black px-6 py-3 rounded-md font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
//               Explore Services
//             </button>
//             <button className="flex items-center gap-2 text-white hover:text-secondary font-medium px-6 py-3 transition-colors">
//               Contact
//             </button>
//           </div>
//         </div>

//         {/* Right Lottie Animation */}
//         <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 opacity-70">
//           <div className="max-w-[900px] scale-[0.7]">
//             <Lottie animationData={animationData} loop={true} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
