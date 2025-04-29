// import React, { useEffect, useState } from "react";

// const FloatingIcons = ({
//   icons = [],
//   iconSize = 60,
//   opacity = 0.7,
//   minMargin = 50,
//   maxMargin = 150,
//   screenPadding = 50,
//   maxIcons = 30, // Total number of icons you want
// }) => {
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     const generatePositions = () => {
//       const generated = [];
//       const usedPositions = [];

//       for (let i = 0; i < maxIcons; i++) {
//         let tries = 0;
//         let x, y, tooClose;

//         do {
//           x = Math.random() * (window.innerWidth - 2 * screenPadding - iconSize) + screenPadding;
//           y = Math.random() * (window.innerHeight - 2 * screenPadding - iconSize) + screenPadding;

//           tooClose = usedPositions.some(pos => {
//             const dx = pos.x - x;
//             const dy = pos.y - y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             return distance < minMargin;
//           });

//           tries++;
//         } while (tooClose && tries < 100);

//         usedPositions.push({ x, y });
//         generated.push({ x, y });
//       }

//       setPositions(generated);
//     };

//     generatePositions();

//     window.addEventListener('resize', generatePositions);
//     return () => window.removeEventListener('resize', generatePositions);
//   }, [icons.length, iconSize, minMargin, maxMargin, screenPadding, maxIcons]);

//   return (
//     <div className="absolute inset-0 pointer-events-none z-0">
//       {positions.map((pos, index) => (
//         <img
//           key={index}
//           src={icons[index % icons.length]} // 👈 Important: loop through icons repeatedly
//           alt="floating-icon"
//           style={{
//             position: "absolute",
//             left: pos.x,
//             top: pos.y,
//             width: `${iconSize}px`,
//             height: `${iconSize}px`,
//             opacity: opacity,
//             filter: "brightness(0.8) saturate(1.2)",
//           }}
//           className="transition-transform duration-500 ease-in-out"
//         />
//       ))}
//     </div>
//   );
// };

// export default FloatingIcons;

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const FloatingIcons = ({
  icons = [],
  iconSize = 60,
  opacity = 0.7,
  minMargin = 50,
  maxMargin = 150,
  screenPadding = 50,
  maxIcons = 30,
  isAnimate = true, // 👈 New prop to toggle animation
  floatRange = 40, // 👈 New prop: max pixels to float up/down
  tiltRange = { min: 0, max: 0 }, // 👈 Optional tilt (0 = no tilt)
}) => {
  const [positions, setPositions] = useState([]);
  const iconRefs = useRef([]);

  // Generate random positions (unchanged from your original)
  useEffect(() => {
    const generatePositions = () => {
      const generated = [];
      const usedPositions = [];

      for (let i = 0; i < maxIcons; i++) {
        let tries = 0;
        let x, y, tooClose;

        do {
          x =
            Math.random() * (window.innerWidth - 2 * screenPadding - iconSize) +
            screenPadding;
          y =
            Math.random() *
              (window.innerHeight - 2 * screenPadding - iconSize) +
            screenPadding;

          tooClose = usedPositions.some((pos) => {
            const dx = pos.x - x;
            const dy = pos.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < minMargin;
          });

          tries++;
        } while (tooClose && tries < 100);

        usedPositions.push({ x, y });
        generated.push({ x, y });
      }

      setPositions(generated);
    };

    generatePositions();
    window.addEventListener("resize", generatePositions);
    return () => window.removeEventListener("resize", generatePositions);
  }, [icons.length, iconSize, minMargin, maxMargin, screenPadding, maxIcons]);

  // GSAP Animation (new)
  useEffect(() => {
    if (!isAnimate || iconRefs.current.length === 0) return;

    iconRefs.current.forEach((icon) => {
      if (!icon) return;

      // Randomize animation duration/delay for natural feel
      const duration = 3 + Math.random() * 2; // 3-5 seconds
      const delay = Math.random() * 2; // 0-2 seconds delay

      // Float up/down smoothly
      gsap.to(icon, {
        y: `+=${floatRange * (Math.random() > 0.5 ? 1 : -1)}`,
        duration,
        delay,
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse animation
        ease: "sine.inOut", // Smooth easing
      });

      // Optional tilt (if tiltRange is provided)
      if (tiltRange.max > 0) {
        gsap.to(icon, {
          rotation:
            tiltRange.min + Math.random() * (tiltRange.max - tiltRange.min),
          duration: duration * 2,
          delay,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      }
    });

    return () => {
      // Cleanup GSAP animations
      // eslint-disable-next-line react-hooks/exhaustive-deps
      iconRefs.current.forEach((icon) => {
        if (icon) gsap.killTweensOf(icon);
      });
    };
  }, [positions, isAnimate, floatRange, tiltRange]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {positions.map((pos, index) => (
        <img
          key={index}
          ref={(el) => (iconRefs.current[index] = el)} // 👈 GSAP target
          src={icons[index % icons.length]}
          alt="floating-icon"
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            opacity: opacity,
            filter: "brightness(0.8) saturate(1.2)",
            transform: "translateY(0)", // 👈 GSAP will animate this
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;

// import React from "react";
// import SvgDrawer from "./SvgDrawer";

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
// const FloatingIcons = ({ totalIcons = 25 }) => {
//   const randomIcons = Array.from({ length: totalIcons }, () => {
//     const randomIndex = Math.floor(Math.random() * icons.length);
//     const top = Math.random() * 100;
//     const left = Math.random() * 100;
//     const size = Math.random() * 40 + 20; // Size between 20px to 60px

//     return { src: icons[randomIndex], top, left, size };
//   });

//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
//       {randomIcons.map((icon, index) => (
//         <div
//           key={index}
//           style={{
//             position: "absolute",
//             top: `${icon.top}%`,
//             left: `${icon.left}%`,
//             width: `${icon.size}px`,
//             height: `${icon.size}px`,
//             opacity: 0.2,
//           }}
//         >
//           <SvgDrawer
//             svgUrl={icon.src}
//             // strokeGradient={[
//             //   { offset: "0%", color: "#0f172a" }, // dark navy blue
//             //   { offset: "100%", color: "#fec601" }, // golden yellow
//             // ]}
//             duration={6}
//             stagger={0.1}
//             loopRequired={true}
//             loopDuration={8}
//             scale={1}
//             width="100%"
//             height="100%"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FloatingIcons;

// import React, { useEffect, useRef } from "react";
// import SvgDrawer from "./SvgDrawer";
// import { gsap } from "gsap";

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

// const FloatingSvgDrawer = ({ repeat = 9, margin = 80 }) => {
//   const containerRef = useRef(null);

//   // Prepare repeated icons
//   const allIcons = Array.from({ length: icons.length * repeat }, (_, i) => ({
//     src: icons[i % icons.length],
//     id: i,
//   }));

//   // Randomize and spread icons nicely
//   const positions = allIcons.map(() => ({
//     top: Math.random() * (100 - 10) + 5, // Between 5% and 95% vertically
//     left: Math.random() * (100 - 10) + 5, // Between 5% and 95% horizontally
//     size: Math.random() * 30 + 40, // Size between 40px and 70px
//   }));

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const elements = containerRef.current.querySelectorAll(".floating-svg");

//     elements.forEach((el, index) => {
//       const tl = gsap.timeline({ delay: Math.random() * 2 }); // Small random delay
//       tl.fromTo(
//         el,
//         { opacity: 0 },
//         { opacity: 0.25, duration: 2, ease: "power2.out" } // Light opacity
//       )
//         .to(el, {
//           y: -100,
//           opacity: 0,
//           duration: 4,
//           delay: 6, // Wait until drawing completes
//           ease: "power2.in",
//           repeat: -1,
//           repeatDelay: 2,
//           yoyo: false,
//         });
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
//     >
//       {allIcons.map((icon, index) => (
//         <div
//           key={icon.id}
//           className="floating-svg"
//           style={{
//             position: "absolute",
//             top: `${positions[index].top}%`,
//             left: `${positions[index].left}%`,
//             width: `${positions[index].size}px`,
//             height: `${positions[index].size}px`,
//           }}
//         >
//           <SvgDrawer
//             svgUrl={icon.src}
//             strokeColor="black"
//             duration={5}
//             stagger={0.1}
//             loopRequired={true}
//             scale={1}
//             width="100%"
//             height="100%"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FloatingSvgDrawer;
