import { useState } from 'react';
import { Home, Info, Clipboard, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white p-4 flex items-center justify-between">
      {/* Logo and Text */}
      <Link to="/" className="flex items-center space-x-4 ml-2">
        <img
          src="https://trinityconsultancy.in/images/about/logo.jpg"
          alt="Trinity Logo"
          className="w-16 h-16 object-contain"  // Increased size of logo
        />
        <h2 className="text-2xl font-heading hidden md:inline font-bold text-cta">TRINITY Consultancy Services</h2>
        <h2 className="text-xl font-heading md:hidden">TRINITY</h2>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 mr-6">
        <li>
          <Link
            to="/"
            className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Home size={20} />
            <span>Home</span>
            <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Info size={20} />
            <span>About</span>
            <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Clipboard size={20} />
            <span>Services</span>
            <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Phone size={20} />
            <span>Contact Us</span>
            <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-primary bg-opacity-100 p-6 flex flex-col items-center space-y-6 z-50 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <button className="self-end text-white" onClick={toggleMenu}>
          <X size={24} />
        </button>
        {[
          { to: '/', icon: <Home size={20} />, label: 'Home' },
          { to: '/about', icon: <Info size={20} />, label: 'About' },
          { to: '/services', icon: <Clipboard size={20} />, label: 'Services' },
          { to: '/contact', icon: <Phone size={20} />, label: 'Contact Us' },
        ].map(({ to, icon, label }) => (
          <Link
            key={label}
            to={to}
            onClick={toggleMenu}
            className="relative text-white group space-x-1 flex items-center hover:text-white hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            {icon}
            <span>{label}</span>
            <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-cta transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> {/* Updated underline color */}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;


// import { useState } from 'react';
// import { Home, Info, Clipboard, Phone, Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-blue-500 text-white p-4 flex items-center justify-between">
//       {/* Logo and Text */}
//       <div className="flex items-center space-x-3">
//         <img
//           src="https://trinityconsultancy.in/images/about/logo.jpg"
//           alt="Trinity Logo"
//           className="w-10 h-10 object-contain"
//         />
//         <span className="text-lg font-heading">TRINITY Consultancy Services</span>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-6">
//         <li>
//           <Link
//             to="/"
//             className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           >
//             <Home size={20} />
//             <span>Home</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about"
//             className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           >
//             <Info size={20} />
//             <span>About</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/services"
//             className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           >
//             <Clipboard size={20} />
//             <span>Services</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           >
//             <Phone size={20} />
//             <span>Contact Us</span>
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
//         className={`md:hidden absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-90 p-6 flex flex-col items-center space-y-6 ${
//           isMenuOpen ? 'block' : 'hidden'
//         }`}
//       >
//         <button
//           className="self-end text-white"
//           onClick={toggleMenu}
//         >
//           <X size={24} />
//         </button>
//         <Link
//           to="/"
//           className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           onClick={toggleMenu}
//         >
//           <Home size={20} />
//           <span>Home</span>
//         </Link>
//         <Link
//           to="/about"
//           className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           onClick={toggleMenu}
//         >
//           <Info size={20} />
//           <span>About</span>
//         </Link>
//         <Link
//           to="/services"
//           className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           onClick={toggleMenu}
//         >
//           <Clipboard size={20} />
//           <span>Services</span>
//         </Link>
//         <Link
//           to="/contact"
//           className="flex items-center text-white hover:text-accent space-x-1 hover:underline transition-all duration-300"
//           onClick={toggleMenu}
//         >
//           <Phone size={20} />
//           <span>Contact Us</span>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
