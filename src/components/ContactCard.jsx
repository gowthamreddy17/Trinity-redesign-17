// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import contactImage from "/contact.jpg"; // Your image path

export default function ContactCard() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 md:p-16 bg-gradient-to-br from-[#f0f4ff] to-[#e6f7ff] rounded-3xl overflow-hidden shadow-xl mt-10"
    >
      {/* Background Blurs */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#cdb4db] opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-16 right-0 w-80 h-80 bg-[#a2d2ff] opacity-20 rounded-full blur-3xl z-0" />

      {/* Image Section */}
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        src={contactImage}
        alt="Contact"
        className="relative z-10 w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl shadow-md"
      />

      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left mt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
          We Create for You
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Entrust Your Project to Our Best Team of Professionals
        </h3>
        <p className="text-gray-600 text-base md:text-lg">
          Have any project in mind? For immediate support:
        </p>
        <div className="text-accent font-medium text-lg">
          📞 +91-9959887550<br />
          📧 trinityconsultancy.2025@gmail.com
        </div>

        {/* Call-to-Action Button */}
        <Link
          to="/contact"
          className="self-center md:self-start inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}



// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";
// import contactImage from "/contact.jpg"; // replace with your actual image path

// export default function ContactCard() {
//   const { ref, inView } = useInView({
//     triggerOnce: false, // animation on every scroll
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 100 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12 rounded-2xl bg-white shadow-lg"
//     >
//       {/* Left Side Image */}
//       <img
//         src={contactImage}
//         alt="Contact Us"
//         className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl"
//       />

//       {/* Right Side Content */}
//       <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
//         <h2 className="text-2xl md:text-3xl font-bold text-primary">
//           We Create for You
//         </h2>
//         <h3 className="text-xl font-semibold text-gray-800">
//           Entrust Your Project to Our Best Team of Professionals
//         </h3>
//         <p className="text-gray-600">
//           Have any project on mind? For immediate support:
//         </p>
//         <div className="text-base md:text-lg text-accent font-medium">
//           📞 +91-9959887550<br />
//           📧 trinityconsultancy.2025@gmail.com
//         </div>
//         <Link
//           to="/contact"
//           className="self-center md:self-start inline-block px-6 py-3 bg-cta hover:bg-cta/90 text-white font-semibold rounded-lg shadow-md transition duration-300"
//         >
//           Contact Us
//         </Link>
//       </div>
//     </motion.div>
//   );
// }
