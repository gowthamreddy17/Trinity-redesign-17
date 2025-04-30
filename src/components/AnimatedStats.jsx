import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, BarChart3, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Clients Served", value: 1200, icon: Users },
  { label: "Projects Completed", value: 340, icon: Briefcase },
  { label: "Business Growth", value: 87, suffix: "%", icon: BarChart3 },
  { label: "Partner Companies", value: 25, icon: Building2 },
];

const AnimatedStats = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      numberRefs.current.forEach((el, index) => {
        const target = stats[index].value;
        const suffix = stats[index].suffix || "";

        gsap.to(el, {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          modifiers: {
            innerText: (val) => `${Math.floor(val).toLocaleString()}${suffix}`,
          },
        });
      });
    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#F5EEDC] text-white py-16 px-6 md:px-12 rounded-xl max-w-[1] mx-auto"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-gray-800 p-4 sm:p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-2" />
              <div
                ref={(el) => (numberRefs.current[i] = el)}
                className="text-xl sm:text-3xl font-bold"
              >
                0{stat.suffix || ""}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default AnimatedStats;

// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { motion, useInView } from 'framer-motion';
// import {
//   Users,
//   Briefcase,
//   BarChart3,
//   Building2,
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const stats = [
//   { label: 'Clients Served', value: 1200, icon: Users },
//   { label: 'Projects Completed', value: 340, icon: Briefcase },
//   { label: 'Business Growth', value: 87, suffix: '%', icon: BarChart3 },
//   { label: 'Partner Companies', value: 25, icon: Building2 },
// ];

// const AnimatedStats = () => {
//   const sectionRef = useRef(null);
//   const numberRefs = useRef([]);
//   const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

//   useEffect(() => {
//     if (isInView) {
//       numberRefs.current.forEach((el, index) => {
//         const target = stats[index].value;
//         const suffix = stats[index].suffix || '';

//         gsap.to(el, {
//           innerText: target,
//           duration: 2,
//           ease: 'power1.out',
//           snap: { innerText: 1 },
//           modifiers: {
//             innerText: (val) => `${Math.floor(val).toLocaleString()}${suffix}`,
//           },
//         });
//       });
//     }
//   }, [isInView]);

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       className="bg-gray-900 text-white py-16 px-6 md:px-12 rounded-xl max-w-6xl mx-auto"
//     >
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
//         {stats.map((stat, i) => {
//           const Icon = stat.icon;
//           return (
//             <div key={i} className="space-y-2">
//               <Icon className="w-10 h-10 text-accent mx-auto" />
//               <div
//                 ref={(el) => (numberRefs.current[i] = el)}
//                 className="text-4xl font-extrabold"
//               >
//                 0{stat.suffix || ''}
//               </div>
//               <p className="text-sm text-gray-400">{stat.label}</p>
//             </div>
//           );
//         })}
//       </div>
//     </motion.section>
//   );
// };

// export default AnimatedStats;
