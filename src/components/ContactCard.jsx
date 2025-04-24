// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import contactImage from "/contact.jpg"; // replace with your actual image path

export default function ContactCard() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animation on every scroll
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12 rounded-2xl bg-white shadow-lg"
    >
      {/* Left Side Image */}
      <img
        src={contactImage}
        alt="Contact Us"
        className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl"
      />

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          We Create for You
        </h2>
        <h3 className="text-xl font-semibold text-gray-800">
          Entrust Your Project to Our Best Team of Professionals
        </h3>
        <p className="text-gray-600">
          Have any project on mind? For immediate support:
        </p>
        <div className="text-base md:text-lg text-accent font-medium">
          📞 +91-9959887550<br />
          📧 trinityconsultancy.2025@gmail.com
        </div>
        <Link
          to="/contact"
          className="self-center md:self-start inline-block px-6 py-3 bg-cta hover:bg-cta/90 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}
