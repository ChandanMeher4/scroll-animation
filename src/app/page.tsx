"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // --- 1. Initial Load Animation ---
    const tl = gsap.timeline();

    tl.from(headlineRef.current, {
      y: -30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
    .from(statsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.6");

    // --- 2. Scroll-Based Animation ---
    gsap.to(visualRef.current, {
      // Move from off-screen left to off-screen right
      x: "140vw", 
      ease: "none", 
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        // 'bottom bottom' finishes the animation right before the section scrolls up
        end: "bottom bottom", 
        scrub: 1, 
      },
    });
  }, { scope: container });

  const addToStatsRef = (el: HTMLDivElement | null) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Increased to 300vh for a longer, smoother scroll duration */}
      <main ref={container} className="relative w-full h-[300vh] bg-[#0a0a0a] text-white">
        
        {/* Sticky wrapper */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8 overflow-hidden">
          
          {/* Headline - Fixed spacing, wrapping, and centering offset */}
          <h1 
            ref={headlineRef} 
            className="text-4xl md:text-7xl font-bold tracking-[0.3em] md:tracking-[0.5em] text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 whitespace-nowrap pl-[0.3em] md:pl-[0.5em]"
          >
            WELCOME ITZFIZZ
          </h1>

          {/* Impact Metrics */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 z-10">
            <div ref={addToStatsRef} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-500">98%</h2>
              <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">Performance</p>
            </div>
            <div ref={addToStatsRef} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-500">60fps</h2>
              <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">Motion Polish</p>
            </div>
            <div ref={addToStatsRef} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-500">Zero</h2>
              <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">Layout Reflows</p>
            </div>
          </div>

          {/* Main Visual Element - Starts securely off-screen to the left */}
          <div 
            ref={visualRef} 
            className="absolute bottom-20 left-[-20vw] w-64 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.4)] flex items-center justify-center backdrop-blur-md border border-white/10"
          >
            <p className="font-bold tracking-widest text-white/80">MAIN VISUAL</p>
          </div>

        </div>
      </main>

      {/* Example Next Section to demonstrate natural scroll flow */}
      <section className="h-screen w-full bg-white text-black flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-widest">NEXT SECTION</h2>
      </section>
    </>
  );
}