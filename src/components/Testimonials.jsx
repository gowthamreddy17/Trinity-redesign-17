import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";

const testimonials = [
  {
    text: "We’ve been working with this company for years. Their software services have streamlined our workflow, while their BPO support has allowed us to focus on growth. Truly dependable.",
    author: "Thomas",
  },
  {
    text: "The team delivered top-notch financial services. Their expertise in compliance and tax management gave us confidence and saved us time.",
    author: "Priya",
  },
  {
    text: "Their digital marketing strategies helped us boost online visibility and lead generation. Transparent, creative, and effective team!",
    author: "Ravi",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 text-center bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#1e293b]"
    >
      <h2 className="text-4xl font-bold text-white mb-2">What Clients Say</h2>
      <p className="text-secondary text-lg text-gray-300 mb-10">
        Hear feedback from our satisfied partners
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-2xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1e293b]/80 border border-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <p className="text-gray-100 text-lg mb-5 italic leading-relaxed">
                “{item.text}”
              </p>
              <div className="flex items-center justify-center gap-1 text-accent mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent stroke-accent" />
                ))}
              </div>
              <div className="text-base font-semibold text-gray-200">
                — {item.author}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     text: "We’ve been working with this company for years. Their software services have streamlined our workflow, while their BPO support has allowed us to focus on growth. Truly dependable.",
//     author: "Thomas",
//   },
//   {
//     text: "The team delivered top-notch financial services. Their expertise in compliance and tax management gave us confidence and saved us time.",
//     author: "Priya",
//   },
//   {
//     text: "Their digital marketing strategies helped us boost online visibility and lead generation. Transparent, creative, and effective team!",
//     author: "Ravi",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-background text-center px-6">
//       <h2 className="text-3xl font-bold text-primary mb-2">Clients Testimonial</h2>
//       <p className="text-secondary text-lg mb-8">
//         Check what our clients say about us
//       </p>

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         pagination={{ clickable: true }}
//         spaceBetween={20}
//         slidesPerView={1}
//         className="max-w-3xl mx-auto"
//       >
//         {testimonials.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
//               <p className="text-gray-700 text-base md:text-lg mb-4 italic">
//                 “{item.text}”
//               </p>
//               <div className="flex items-center justify-center gap-1 text-accent mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-accent stroke-accent" />
//                 ))}
//               </div>
//               <div className="text-sm font-semibold text-gray-600">
//                 — {item.author}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
