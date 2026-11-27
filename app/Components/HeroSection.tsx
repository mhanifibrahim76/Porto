"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MyCard from "./Card/MyCard";
import HeroGoldMist3D from "./Batik/HeroGoldMist3D";
import ResumeModal from "./ResumeModal";
import { profile } from "../data/profile";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % profile.roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-transparent overflow-x-clip lg:min-h-[100dvh] flex flex-col justify-center"
    >
      {/* Flowing 3D gold mist faded smoothly at bottom so the scroll tapestry shows seamlessly */}
      <div
        aria-hidden="true"
        className="no-print pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_0%,black_76%,transparent_100%)]"
      >
        <HeroGoldMist3D />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 58% at 62% 48%, rgba(10, 10, 9, 0.78) 0%, rgba(10, 10, 9, 0.34) 68%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 no-print w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-24 py-14 sm:py-20 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] items-center gap-10 lg:gap-16">
          {/* Left column: 3D Tilt Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <MyCard onOpenResume={() => setResumeOpen(true)} />
          </motion.div>

          {/* Right column: Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col gap-5 text-center lg:text-left"
          >
            <p className="font-display italic text-lg text-[var(--primary)] tracking-wide">
              Prologue · {profile.name}
            </p>

            <h1 className="font-display font-bold text-[clamp(2.35rem,4.6vw,3.65rem)] leading-[1.08] tracking-tight text-[var(--foreground)]">
              Crafting fast, intuitive web products.
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-center lg:justify-start gap-1.5 sm:gap-3 min-h-[2rem]">
              <span className="text-base sm:text-lg font-medium text-[var(--foreground)]">
                {profile.shortName},
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="font-display italic text-xl sm:text-2xl text-[var(--primary)]"
                >
                  {profile.roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-[var(--foreground-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-[1.075rem]">
              I build responsive, maintainable web applications with{" "}
              <span className="text-[var(--foreground)] font-medium">
                Next.js, React, TypeScript, and Tailwind CSS
              </span>
              , pairing clean frontend architecture with deliberate UI/UX
              design in Figma.
            </p>

            {/* Symmetrical equal-height CTA actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto sm:min-w-[188px] min-h-[48px] px-6 rounded-xl inline-flex items-center justify-center text-sm font-semibold text-[#0A0A09] bg-[var(--primary)] hover:bg-[var(--accent-gold-hover)] transition-colors"
              >
                View Selected Work
              </a>

              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="w-full sm:w-auto sm:min-w-[188px] min-h-[48px] px-6 rounded-xl inline-flex items-center justify-center text-sm font-semibold text-[var(--foreground)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border-control)] hover:border-[var(--primary)] transition-colors"
              >
                Inspect Resume
              </button>
            </div>
          </motion.div>
        </div>

        {/* Storytelling cue leading reader into Chapter I */}
        <div className="mt-12 sm:mt-14 flex flex-col items-center">
          <a
            href="#about"
            className="min-h-[44px] px-4 inline-flex flex-col items-center gap-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <span>Scroll to begin Chapter I</span>
            <span
              aria-hidden="true"
              className="w-2.5 h-2.5 rotate-45 border border-[var(--primary)] bg-[var(--background)]"
            />
          </a>
          <div
            aria-hidden="true"
            className="w-px h-10 bg-gradient-to-b from-[var(--primary)]/70 to-[var(--primary)]/20"
          />
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

export default HeroSection;
