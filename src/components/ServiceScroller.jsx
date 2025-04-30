import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger, Observer);

const defaultServices = [
  {
    title: 'Modern & Responsive Design',
    description: 'Modern, Responsive Web Designs Tailored for Your Business.',
    bgImage: 'url(https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?auto=format&fit=crop&w=1920&q=75)',
  },
  {
    title: 'Optimize Your BPO Operations',
    description: 'Enhance Your BPO Services with Expert Support & Seamless Operations.',
    bgImage: 'url(https://images.unsplash.com/photo-1617128734662-66da6c1d3505?auto=format&fit=crop&w=1920&q=75)',
  },
  {
    title: 'Build Your Website Professionally',
    description: 'Build Your Website Professionally with Expert Design & Support.',
    bgImage: 'url(https://images.unsplash.com/photo-1617438817509-70e91ad264a5?auto=format&fit=crop&w=1920&q=75)',
  },
];

const ServiceScroller = ({ services = defaultServices }) => {
  const wrapperRef = useRef(null);
  const sectionsRef = useRef([]);
  const outerWrappers = useRef([]);
  const innerWrappers = useRef([]);
  const headingsRef = useRef([]);
  const bgRefs = useRef([]);
  const currentIndex = useRef(-1);
  const animating = useRef(false);
  const wrap = gsap.utils.wrap(0, services.length);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Watch if the scroller section is in the middle of screen
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px', // triggers only when middle is visible
        threshold: 0.3,
      }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    const splitHeadings = headingsRef.current.map((heading) =>
      new SplitType(heading, { types: 'lines, words, chars' })
    );

    gsap.set(outerWrappers.current, { yPercent: 100 });
    gsap.set(innerWrappers.current, { yPercent: -100 });

    const gotoSection = (index, direction) => {
      index = wrap(index);
      animating.current = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.1, ease: 'power2.inOut' },
        onComplete: () => (animating.current = false),
      });

      if (currentIndex.current >= 0) {
        gsap.set(sectionsRef.current[currentIndex.current], { zIndex: 0 });
        tl.to(bgRefs.current[currentIndex.current], { yPercent: -15 * dFactor }).set(
          sectionsRef.current[currentIndex.current],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers.current[index], innerWrappers.current[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      )
        .fromTo(
          bgRefs.current[index],
          { yPercent: 15 * dFactor },
          { yPercent: 0 },
          0
        )
        .fromTo(
          splitHeadings[index].chars,
          {
            autoAlpha: 0,
            yPercent: 150 * dFactor,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: {
              each: 0.015,
              from: 'random',
            },
          },
          0.2
        );

      currentIndex.current = index;
    };

    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => !animating.current && gotoSection(currentIndex.current - 1, -1),
      onUp: () => !animating.current && gotoSection(currentIndex.current + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);

    return () => {
      Observer.getAll().forEach((obs) => obs.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [active]);

  return (
    <div ref={wrapperRef} className="relative w-screen overflow-hidden font-sans" style={{ height: '60vh' }}>
      {services.map((service, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="fixed top-0 left-0 h-[60vh] w-full opacity-0 pointer-events-none"
        >
          <div
            ref={(el) => (outerWrappers.current[index] = el)}
            className="w-full h-full overflow-hidden"
          >
            <div
              ref={(el) => (innerWrappers.current[index] = el)}
              className="w-full h-full overflow-hidden"
            >
              <div
                ref={(el) => (bgRefs.current[index] = el)}
                className="absolute top-0 left-0 h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), ${service.bgImage}`,
                }}
              >
                <div className="text-center px-4">
                  <h2
                    ref={(el) => (headingsRef.current[index] = el)}
                    className="text-white text-3xl md:text-5xl font-bold tracking-widest"
                  >
                    {service.title}
                  </h2>
                  <p className="text-white text-lg mt-4">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServiceScroller;
