"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MyCard from "./Card/MyCard";

const roles = [
  "Web Developer",
  "Web Designer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[var(--background)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20 min-h-screen">
          
          {/* LEFT SIDE - CARD */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              
              {/* BACKGROUND DECORATION */}
              <div className="absolute -left-20 -top-20 w-72 h-72 bg-[var(--primary)] opacity-20 blur-3xl rounded-full"></div>

              {/* MAIN GLOW */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-30 blur-3xl rounded-[2rem]"></div>

              {/* CARD */}
              <div className="relative z-10">
                <MyCard />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - DESCRIPTION */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
            
            <div className="flex flex-col gap-4">
              
              {/* ROLE SLIDER */}
              <div className="h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentRole}
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -20,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="text-[var(--secondary)] uppercase tracking-[0.3em] text-sm font-medium"
                  >
                    {roles[currentRole]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              {/* HELLO */}
              <div className="relative inline-block">
                
                {/* TEXT GLOW */}
                <div className="absolute w-[55%] h-[120%] -left-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-50 blur-2xl rounded-full"></div>

                <h1 className="relative text-5xl md:text-7xl font-black leading-tight">
                  Hello
                </h1>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold">
                Here&apos;s who I am & what I do
              </h3>
            </div>

            <p className="text-gray-400 max-w-xl leading-relaxed text-base md:text-lg">
              I am a Web Developer and Web Designer passionate about creating
              modern, responsive websites and intuitive user experiences.
              I enjoy turning ideas into functional, visually appealing digital
              products using Next.js, React, and Tailwind CSS.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <button className="px-8 py-3 rounded-full bg-[var(--primary)] hover:opacity-90 transition-all duration-300 font-semibold shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                Resume
              </button>

              <button className="px-8 py-3 rounded-full border border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-black transition-all duration-300 font-semibold">
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;