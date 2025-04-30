// import { useState, useEffect, useRef } from "react";
// import { Home, Info, Clipboard, Phone, Menu, X } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import gsap from "gsap";

// const navLinks = [
//   { to: "/", icon: <Home size={20} />, label: "Home" },
//   { to: "/about", icon: <Info size={20} />, label: "About" },
//   { to: "/services", icon: <Clipboard size={20} />, label: "Services" },
//   { to: "/contact", icon: <Phone size={20} />, label: "Contact Us" },
// ];

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const logoRef = useRef(null);
//   const titleRef = useRef(null);
//   const desktopLinkRefs = useRef([]);
//   const hamburgerRef = useRef(null);
//   const canvasRef = useRef(null);

//   desktopLinkRefs.current = [];

//   const addToDesktopLinkRefs = (el) => {
//     if (el && !desktopLinkRefs.current.includes(el)) {
//       desktopLinkRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(
//       [logoRef.current, titleRef.current],
//       { opacity: 0, y: -30 },
//       { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 }
//     ).fromTo(
//       desktopLinkRefs.current,
//       { opacity: 0, y: -30 },
//       { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
//       "-=0.4"
//     );
//   }, [location.pathname]);

//   useEffect(() => {
//     if (isMenuOpen) {
//       gsap.fromTo(
//         desktopLinkRefs.current,
//         { opacity: 0, x: -50 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           stagger: 0.15,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, [isMenuOpen]);

//   useEffect(() => {
//     if (isMenuOpen && window.innerWidth < 768) {
//       const mobileLinks = document.querySelectorAll(".mobile-link");
//       gsap.fromTo(
//         mobileLinks,
//         { x: -50, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.2,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [isMenuOpen]);

//   const handleNavClick = (to) => {
//     setIsMenuOpen(false);
//     navigate(to);
//   };

//   const handleHamburgerClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//     gsap.fromTo(
//       hamburgerRef.current,
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
//     );
//   };

//   // 🌟 Particle Stars Setup
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let particles = [];

//     const createParticles = () => {
//       particles = [];
//       const numParticles = 30;
//       for (let i = 0; i < numParticles; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 1.5 + 0.5,
//           speedX: (Math.random() - 0.5) * 0.5,
//           speedY: (Math.random() - 0.5) * 0.5,
//         });
//       }
//     };

//     const animateParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((p) => {
//         p.x += p.speedX;
//         p.y += p.speedY;

//         // Wrap around edges
//         if (p.x < 0) p.x = canvas.width;
//         if (p.x > canvas.width) p.x = 0;
//         if (p.y < 0) p.y = canvas.height;
//         if (p.y > canvas.height) p.y = 0;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//         ctx.fill();
//       });

//       requestAnimationFrame(animateParticles);
//     };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = 80; // Navbar height
//       createParticles();
//     };

//     window.addEventListener("resize", handleResize);

//     handleResize();
//     animateParticles();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className="bg-primary text-default px-4 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md overflow-hidden">
//       {/* Particle Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-70"
//       />

//       {/* Logo */}
//       <Link to="/" className="flex items-center space-x-3 relative z-10">
//         <img
//           src="https://trinityconsultancy.in/images/about/logo.jpg"
//           alt="Logo"
//           className="w-14 h-14 object-contain"
//           ref={logoRef}
//         />
//         <h2
//           className="font-heading text-xl md:text-2xl font-bold text-white"
//           ref={titleRef}
//         >
//           <span className="block md:hidden">TRINITY</span>
//           <span className="hidden md:block">TRINITY Consultancy</span>
//         </h2>
//       </Link>

//       {/* Desktop Nav Links */}
//       <ul className="hidden md:flex space-x-6 items-center relative z-10">
//         {navLinks.map(({ to, icon, label }, i) => (
//           <li key={label} ref={addToDesktopLinkRefs}>
//             <button
//               onClick={() => handleNavClick(to)}
//               className="group relative flex items-center space-x-2 px-3 py-2 rounded-lg overflow-hidden transition-all duration-300"
//             >
//               <span className="nav-link-bg absolute inset-0 bg-white rounded-lg scale-y-0 origin-bottom-left group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10"></span>
//               <span className="text-white group-hover:text-primary font-medium group-hover:font-bold transition-all duration-300">
//                 {icon}
//               </span>
//               <span className="text-white group-hover:text-primary group-hover:font-bold transition-all duration-300">
//                 {label}
//               </span>
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Hamburger Icon */}
//       <div className="md:hidden z-50 pr-2 relative">
//         <button
//           onClick={handleHamburgerClick}
//           className="p-2 focus:outline-none"
//           ref={hamburgerRef}
//         >
//           {isMenuOpen ? (
//             <X className="text-white w-8 h-8" />
//           ) : (
//             <Menu className="text-white w-8 h-8" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Overlay Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-primary z-40 transition-transform duration-500 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Mobile Links */}
//         <ul className="flex flex-col justify-center items-center h-full space-y-8">
//           {navLinks.map(({ to, icon, label }) => (
//             <li key={label} className="mobile-link">
//               <button
//                 onClick={() => handleNavClick(to)}
//                 className="group relative px-6 py-3 flex items-center space-x-3 text-white text-lg font-semibold"
//               >
//                 <span className="absolute inset-0 bg-white rounded-lg scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10"></span>
//                 <span className="z-10 group-hover:text-primary group-hover:font-bold transition-all">
//                   {icon}
//                 </span>
//                 <span className="z-10 group-hover:text-primary group-hover:font-bold transition-all">
//                   {label}
//                 </span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Home, Info, Clipboard, Phone, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

const navLinks = [
  { to: "/", icon: <Home size={20} />, label: "Home" },
  { to: "/about", icon: <Info size={20} />, label: "About" },
  { to: "/services", icon: <Clipboard size={20} />, label: "Services" },
  { to: "/contact", icon: <Phone size={20} />, label: "Contact Us" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const desktopLinkRefs = useRef([]);
  const hamburgerRef = useRef(null);
  const canvasRef = useRef(null);
  const mobileCanvasRef = useRef(null);

  desktopLinkRefs.current = [];

  const addToDesktopLinkRefs = (el) => {
    if (el && !desktopLinkRefs.current.includes(el)) {
      desktopLinkRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [logoRef.current, titleRef.current],
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 }
    ).fromTo(
      desktopLinkRefs.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );
  }, [location.pathname]);

  const handleNavClick = (to) => {
    setIsMenuOpen(false);
    navigate(to);
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    gsap.fromTo(
      hamburgerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  };

  // Navbar Stars
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const createParticles = () => {
      particles = [];
      const numParticles = 40;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 80; // Navbar height
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    animateParticles();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile Overlay Stars
  useEffect(() => {
    if (mobileCanvasRef.current) {
      const canvas = mobileCanvasRef.current;
      const ctx = canvas.getContext("2d");
      let particles = [];

      const createParticles = () => {
        particles = [];
        const numParticles = 40;
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
          });
        }
      };

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.fill();
        });

        requestAnimationFrame(animateParticles);
      };

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createParticles();
      };

      window.addEventListener("resize", handleResize);

      handleResize();
      animateParticles();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#0e2a39] text-default px-4 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md overflow-hidden">
      {/* Particle Background - Navbar */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90"
      />

      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3 relative z-10">
        <img
          src="https://trinityconsultancy.in/images/about/logo.jpg"
          alt="Logo"
          ref={logoRef}
          className="w-14 h-14 object-contain rounded-full border border-white brightness-110"
        />

        <h2
          className="font-heading text-xl md:text-2xl font-bold text-[#8ACCD5]"
          ref={titleRef}
        >
          <span className="block md:hidden">TRINITY</span>
          <span className="hidden md:block">TRINITY CONSULTANCY</span>
        </h2>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 items-center relative z-10">
        {navLinks.map(({ to, icon, label }) => (
          <li key={label} ref={addToDesktopLinkRefs}>
            <button
              onClick={() => handleNavClick(to)}
              className="group relative flex items-center space-x-2 px-3 py-2 rounded-lg overflow-hidden transition-all duration-300"
            >
              <span className="nav-link-bg absolute inset-0 bg-white rounded-lg scale-y-0 origin-bottom-left group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10"></span>
              <span className="text-white group-hover:text-[#0d9488] font-medium group-hover:font-bold transition-all duration-300">
                {icon}
              </span>
              <span className="text-white text-lg font-bold group-hover:text-[#0d9488] group-hover:font-bold transition-all duration-300">
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50 pr-2 relative">
        <button
          onClick={handleHamburgerClick}
          className="p-2 focus:outline-none"
          ref={hamburgerRef}
        >
          {isMenuOpen ? (
            <X className="text-white w-8 h-8" />
          ) : (
            <Menu className="text-white w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0d9488] z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-hidden`}
      >
        {/* Particle Background - Mobile Overlay */}
        <canvas
          ref={mobileCanvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40"
        />

        {/* Mobile Links */}
        <ul className="flex flex-col justify-center items-center h-full space-y-8 relative z-10">
          {navLinks.map(({ to, icon, label }) => (
            <li key={label} className="mobile-link">
              <button
                onClick={() => handleNavClick(to)}
                className="group relative px-6 py-3 flex items-center space-x-3 text-white text-lg font-semibold"
              >
                <span className="absolute inset-0 bg-white rounded-lg scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10"></span>
                <span className="z-10 group-hover:text-[#0d9488] group-hover:font-bold transition-all">
                  {icon}
                </span>
                <span className="z-10 group-hover:text-[#0d9488] group-hover:font-bold transition-all">
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// import { useState, useEffect, useRef } from "react";
// import { Home, Info, Clipboard, Phone, Menu, X } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import gsap from "gsap";

// const navLinks = [
//   { to: "/", icon: <Home size={20} />, label: "Home" },
//   { to: "/about", icon: <Info size={20} />, label: "About" },
//   { to: "/services", icon: <Clipboard size={20} />, label: "Services" },
//   { to: "/contact", icon: <Phone size={20} />, label: "Contact Us" },
// ];

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const logoRef = useRef(null);
//   const titleRef = useRef(null);
//   const desktopLinkRefs = useRef([]);
//   const hamburgerRef = useRef(null);

//   desktopLinkRefs.current = [];

//   const addToDesktopLinkRefs = (el) => {
//     if (el && !desktopLinkRefs.current.includes(el)) {
//       desktopLinkRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(
//       [logoRef.current, titleRef.current],
//       { opacity: 0, y: -30 },
//       { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 }
//     ).fromTo(
//       desktopLinkRefs.current,
//       { opacity: 0, y: -30 },
//       { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
//       "-=0.4"
//     );
//   }, [location.pathname]);

//   useEffect(() => {
//     if (isMenuOpen) {
//       gsap.fromTo(
//         desktopLinkRefs.current,
//         { opacity: 0, x: -50 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           stagger: 0.15,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, [isMenuOpen]);

//   useEffect(() => {
//     if (isMenuOpen && window.innerWidth < 768) {
//       const mobileLinks = document.querySelectorAll(".mobile-link");
//       gsap.fromTo(
//         mobileLinks,
//         { x: -50, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.2,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [isMenuOpen]);

//   const handleNavClick = (to) => {
//     setIsMenuOpen(false);
//     navigate(to);
//   };

//   const handleHamburgerClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//     gsap.fromTo(
//       hamburgerRef.current,
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
//     );
//   };

//   return (
//     <nav className="bg-primary text-default px-4 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
//       {/* Logo */}
//       <Link to="/" className="flex items-center space-x-3">
//         <img
//           src="https://trinityconsultancy.in/images/about/logo.jpg"
//           alt="Logo"
//           className="w-14 h-14 object-contain"
//           ref={logoRef}
//         />
//         <h2
//           className="font-heading text-xl md:text-2xl font-bold text-white"
//           ref={titleRef}
//         >
//           <span className="block md:hidden">TRINITY</span>
//           <span className="hidden md:block">TRINITY Consultancy</span>
//         </h2>
//       </Link>

//       {/* Desktop Nav Links */}
//       <ul className="hidden md:flex space-x-6 items-center">
//         {navLinks.map(({ to, icon, label }, i) => (
//           <li key={label} ref={addToDesktopLinkRefs}>
//             <button
//               onClick={() => handleNavClick(to)}
//               className="group relative flex items-center space-x-2 px-3 py-2 rounded-lg overflow-hidden transition-all duration-300"
//             >
//               <span className="nav-link-bg absolute inset-0 bg-white rounded-lg scale-y-0 origin-bottom-left group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10"></span>
//               <span className="text-white group-hover:text-primary font-medium group-hover:font-bold transition-all duration-300">
//                 {icon}
//               </span>
//               <span className="text-white group-hover:text-primary group-hover:font-bold transition-all duration-300">
//                 {label}
//               </span>
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Hamburger Icon */}
//       <div className="md:hidden z-50 pr-2">
//         <button
//           onClick={handleHamburgerClick}
//           className="p-2 focus:outline-none"
//           ref={hamburgerRef}
//         >
//           {isMenuOpen ? (
//             <X className="text-white w-8 h-8" />
//           ) : (
//             <Menu className="text-white w-8 h-8" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Overlay Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-primary z-40 transition-transform duration-500 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Mobile Links */}
//         <ul className="flex flex-col justify-center items-center h-full space-y-8">
//           {navLinks.map(({ to, icon, label }) => (
//             <li key={label} className="mobile-link">
//               <button
//                 onClick={() => handleNavClick(to)}
//                 className="group relative px-6 py-3 flex items-center space-x-3 text-white text-lg font-semibold"
//               >
//                 <span className="absolute inset-0 bg-white rounded-lg scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10"></span>
//                 <span className="z-10 group-hover:text-primary group-hover:font-bold transition-all">
//                   {icon}
//                 </span>
//                 <span className="z-10 group-hover:text-primary group-hover:font-bold transition-all">
//                   {label}
//                 </span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { useState } from 'react';
// import { Home, Info, Clipboard, Phone, Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-primary text-white p-4 flex items-center justify-between">
//       {/* Logo and Text */}
//       <Link to="/" className="flex items-center space-x-4 ml-2">
//         <img
//           src="https://trinityconsultancy.in/images/about/logo.jpg"
//           alt="Trinity Logo"
//           className="w-16 h-16 object-contain"  // Increased size of logo
//         />
//         <h2 className="text-2xl font-heading hidden md:inline font-bold text-cta">TRINITY Consultancy Services</h2>
//         <h2 className="text-xl font-heading md:hidden">TRINITY</h2>
//       </Link>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-6 mr-6">
//         <li>
//           <Link
//             to="/"
//             className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//           >
//             <Home size={20} />
//             <span>Home</span>
//             <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about"
//             className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//           >
//             <Info size={20} />
//             <span>About</span>
//             <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/services"
//             className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//           >
//             <Clipboard size={20} />
//             <span>Services</span>
//             <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//           >
//             <Phone size={20} />
//             <span>Contact Us</span>
//             <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
//           </Link>
//         </li>
//       </ul>

//       {/* Hamburger Icon for Mobile */}
//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu}>
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden fixed top-0 left-0 w-full h-full bg-primary bg-opacity-100 p-6 flex flex-col items-center space-y-6 z-50 ${
//           isMenuOpen ? 'block' : 'hidden'
//         }`}
//       >
//         <button className="self-end text-white" onClick={toggleMenu}>
//           <X size={24} />
//         </button>
//         {[
//           { to: '/', icon: <Home size={20} />, label: 'Home' },
//           { to: '/about', icon: <Info size={20} />, label: 'About' },
//           { to: '/services', icon: <Clipboard size={20} />, label: 'Services' },
//           { to: '/contact', icon: <Phone size={20} />, label: 'Contact Us' },
//         ].map(({ to, icon, label }) => (
//           <Link
//             key={label}
//             to={to}
//             onClick={toggleMenu}
//             className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//           >
//             {icon}
//             <span>{label}</span>
//             <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
