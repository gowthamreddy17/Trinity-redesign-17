import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SvgDrawer = ({
  svgContent,
  svgUrl,
  duration = 3,
  ease = "power1.inOut",
  strokeColor = "#000", // Solid color if provided
  strokeGradient = null, // Or gradient if provided
  fill = "none",
  stagger = 0.3,
  width = "100%",
  height = "100%",
  scale = 1,
  loopRequired = false,
  loopDuration = 5,
}) => {
  const containerRef = useRef(null);
  const [svgElement, setSvgElement] = useState(null);

  // Load and Parse SVG
  useEffect(() => {
    if (svgUrl) {
      fetch(svgUrl)
        .then((res) => res.text())
        .then((data) => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(data, "image/svg+xml");
          const svgNode = svgDoc.querySelector("svg");
          if (svgNode) {
            setSvgElement(svgNode);
          }
        })
        .catch((err) => {
          console.error("Failed to load SVG:", err);
        });
    } else if (svgContent) {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
      const svgNode = svgDoc.querySelector("svg");
      if (svgNode) {
        setSvgElement(svgNode);
      }
    }
  }, [svgUrl, svgContent]);

  // Animate SVG
  useEffect(() => {
    if (!svgElement || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const svgClone = svgElement.cloneNode(true);

    svgClone.setAttribute("width", "100%");
    svgClone.setAttribute("height", "100%");
    svgClone.setAttribute("preserveAspectRatio", "xMidYMid meet");

    if (strokeGradient) {
      const defs = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "defs"
      );
      const linearGradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient"
      );
      linearGradient.setAttribute("id", "stroke-gradient");
      linearGradient.setAttribute("x1", "0%");
      linearGradient.setAttribute("y1", "0%");
      linearGradient.setAttribute("x2", "100%");
      linearGradient.setAttribute("y2", "0%");

      strokeGradient.forEach(({ offset, color }) => {
        const stop = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "stop"
        );
        stop.setAttribute("offset", offset);
        stop.setAttribute("stop-color", color);
        linearGradient.appendChild(stop);
      });

      defs.appendChild(linearGradient);
      svgClone.insertBefore(defs, svgClone.firstChild);
    }

    containerRef.current.appendChild(svgClone);

    const elements = containerRef.current.querySelectorAll(
      "path, line, circle, rect, polyline, polygon"
    );
    if (elements.length === 0) return;

    const resetSVG = () => {
      elements.forEach((el) => {
        const length = el.getTotalLength?.() || 0;
        gsap.set(el, {
          strokeDasharray: length,
          strokeDashoffset: length,
          stroke: strokeGradient ? "url(#stroke-gradient)" : strokeColor,
          fill,
          opacity: 0,
          transformOrigin: "50% 50%",
          willChange: "stroke-dashoffset, opacity", // Hint to browser
          force3D: true, // GPU accelerate
        });
      });
    };

    // const animateSVG = () => {
    //   const tl = gsap.timeline({ defaults: { ease, overwrite: true } });

    //   elements.forEach((el, i) => {
    //     tl.to(el, {
    //       strokeDashoffset: 0,
    //       autoAlpha: 1, // Smooth show with opacity+visibility
    //       duration,
    //       force3D: true,
    //     }, i * stagger); // Staggered nicely
    //   });

    //   return tl;
    // };
    const animateSVG = () => {
      const tl = gsap.timeline({ defaults: { overwrite: true } });

      elements.forEach((el, i) => {
        tl.to(
          el,
          {
            strokeDashoffset: 0,
            autoAlpha: 1,
            duration,
            ease: "expo.inOut", // <-- Cinematic drawing effect here!
            force3D: true,
          },
          i * stagger
        );
      });

      return tl;
    };

    resetSVG();
    let mainTimeline = animateSVG();

    let loopTimeout;

    if (loopRequired) {
      const startLoop = () => {
        resetSVG();
        mainTimeline = animateSVG();
        loopTimeout = setTimeout(startLoop, loopDuration * 1000);
      };
      loopTimeout = setTimeout(startLoop, loopDuration * 1000);
    }

    return () => {
      if (loopTimeout) clearTimeout(loopTimeout);
      if (mainTimeline) mainTimeline.kill();
    };
  }, [
    svgElement,
    duration,
    ease,
    strokeColor,
    strokeGradient,
    fill,
    stagger,
    loopRequired,
    loopDuration,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        width: width,
        height: height,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        willChange: "transform", // CSS hint for smoother scale
      }}
    />
  );
};

export default SvgDrawer;

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';

// const SvgDrawer = ({
//   svgContent,
//   svgUrl,
//   duration = 2,
//   ease = 'power1.inOut',
//   strokeColor = '#000',  // NEW: default strokeColor
//   strokeGradient = null, // NEW: if gradient is provided
//   fill = 'none',
//   stagger = 0.1,
//   width = '100%',
//   height = '100%',
//   scale = 1,
//   loopRequired = false,
//   loopDuration = 5,
// }) => {
//   const containerRef = useRef(null);
//   const [svgElement, setSvgElement] = useState(null);

//   // Load and Parse SVG
//   useEffect(() => {
//     if (svgUrl) {
//       fetch(svgUrl)
//         .then((res) => res.text())
//         .then((data) => {
//           const parser = new DOMParser();
//           const svgDoc = parser.parseFromString(data, 'image/svg+xml');
//           const svgNode = svgDoc.querySelector('svg');
//           if (svgNode) {
//             setSvgElement(svgNode);
//           }
//         })
//         .catch((err) => {
//           console.error('Failed to load SVG:', err);
//         });
//     } else if (svgContent) {
//       const parser = new DOMParser();
//       const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
//       const svgNode = svgDoc.querySelector('svg');
//       if (svgNode) {
//         setSvgElement(svgNode);
//       }
//     }
//   }, [svgUrl, svgContent]);

//   // Animate SVG
//   useEffect(() => {
//     if (!svgElement || !containerRef.current) return;

//     // Clean container first
//     containerRef.current.innerHTML = '';

//     // Clone SVG so original is not mutated
//     const svgClone = svgElement.cloneNode(true);

//     // Responsive: make sure SVG scales correctly
//     svgClone.setAttribute('width', '100%');
//     svgClone.setAttribute('height', '100%');
//     svgClone.setAttribute('preserveAspectRatio', 'xMidYMid meet');

//     // Apply Gradient if strokeGradient exists
//     if (strokeGradient) {
//       const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
//       const linearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
//       linearGradient.setAttribute('id', 'stroke-gradient');
//       linearGradient.setAttribute('x1', '0%');
//       linearGradient.setAttribute('y1', '0%');
//       linearGradient.setAttribute('x2', '100%');
//       linearGradient.setAttribute('y2', '0%');

//       // Add stops
//       strokeGradient.forEach(({ offset, color }) => {
//         const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
//         stop.setAttribute('offset', offset);
//         stop.setAttribute('stop-color', color);
//         linearGradient.appendChild(stop);
//       });

//       defs.appendChild(linearGradient);
//       svgClone.insertBefore(defs, svgClone.firstChild);
//     }

//     containerRef.current.appendChild(svgClone);

//     const elements = containerRef.current.querySelectorAll(
//       'path, line, circle, rect, polyline, polygon'
//     );
//     if (elements.length === 0) return;

//     const resetSVG = () => {
//       elements.forEach((el) => {
//         const length = el.getTotalLength?.() || 0;
//         gsap.set(el, {
//           strokeDasharray: length,
//           strokeDashoffset: length,
//           stroke: strokeGradient ? 'url(#stroke-gradient)' : strokeColor,
//           fill,
//         });
//       });
//     };

//     const animateSVG = () => {
//       const tl = gsap.timeline();
//       elements.forEach((el, i) => {
//         tl.to(el, {
//           strokeDashoffset: 0,
//           duration,
//           ease,
//         }, i * stagger); // Use timeline's position parameter for staggering
//       });
//       return tl;
//     };

//     resetSVG();
//     let mainTimeline = animateSVG();

//     let loopTimeout;

//     if (loopRequired) {
//       const startLoop = () => {
//         resetSVG();
//         mainTimeline = animateSVG();
//         loopTimeout = setTimeout(startLoop, loopDuration * 1000);
//       };
//       loopTimeout = setTimeout(startLoop, loopDuration * 1000);
//     }

//     return () => {
//       if (loopTimeout) clearTimeout(loopTimeout);
//       if (mainTimeline) mainTimeline.kill();
//     };

//   }, [svgElement, duration, ease, strokeColor, strokeGradient, fill, stagger, loopRequired, loopDuration]);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: width,
//         height: height,
//         transform: `scale(${scale})`,
//         transformOrigin: 'center center',
//         overflow: 'hidden',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     />
//   );
// };

// export default SvgDrawer;

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';

// const SvgDrawer = ({
//   svgContent,
//   svgUrl,
//   duration = 2,
//   ease = 'power1.inOut',
//   stroke = '#000',
//   fill = 'none',
//   stagger = 0.1,
//   width = '100%',
//   height = '100%',
//   scale = 1,
// }) => {
//   const containerRef = useRef(null);
//   const [svgLoaded, setSvgLoaded] = useState(false);

//   // Load SVG from URL or use inline SVG
//   useEffect(() => {
//     if (svgUrl) {
//       fetch(svgUrl)
//         .then((res) => res.text())
//         .then((data) => {
//           if (containerRef.current) {
//             containerRef.current.innerHTML = data;
//             setSvgLoaded(true); // SVG loaded
//           }
//         })
//         .catch((err) => {
//           console.error('Failed to load SVG:', err);
//         });
//     } else {
//       setSvgLoaded(true); // If no svgUrl, use svgContent directly
//     }
//   }, [svgUrl]);

//   // Trigger animation when svgLoaded changes or whenever relevant props change
//   useEffect(() => {
//     if (!svgLoaded || !containerRef.current) return;

//     // Reset svgLoaded to false before animation (for reloads)
//     setSvgLoaded(false);

//     // Select all the path, line, circle, and other relevant elements
//     const elements = containerRef.current.querySelectorAll(
//       'path, line, circle, rect, polyline, polygon'
//     );
//     if (elements.length === 0) return;

//     // Reset strokeDasharray and strokeDashoffset values for all elements
//     elements.forEach((el, i) => {
//       const length = el.getTotalLength?.() || 0;
//       gsap.set(el, {
//         strokeDasharray: length,
//         strokeDashoffset: length, // Start hidden
//         stroke,
//         fill,
//       });

//       // Animate the strokeDashoffset to 0 (to draw the SVG paths)
//       gsap.to(el, {
//         strokeDashoffset: 0,
//         duration,
//         ease,
//         delay: i * stagger, // Add delay for staggered animation
//         onComplete: () => {
//           console.log(`Animation complete for element ${i + 1}`);
//         },
//       });
//     });
//   }, [svgLoaded, duration, ease, stroke, fill, stagger]);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: width,
//         height: height,
//         transform: `scale(${scale})`,
//         transformOrigin: 'center center', // Center the scale transformation
//         overflow: 'hidden',
//         display: 'flex', // Center the SVG horizontally and vertically
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       {/* Only render svgContent if svgUrl isn't provided */}
//       {!svgUrl && svgContent}
//     </div>
//   );
// };

// export default SvgDrawer;
