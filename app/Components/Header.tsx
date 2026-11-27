"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { House, User, Briefcase, FolderGit2, Mail } from "lucide-react";

const chapters = [
  { id: "home", roman: "00", chapter: "Prologue", name: "Home", icon: House },
  { id: "about", roman: "I", chapter: "Chapter I", name: "Foundations", icon: User },
  { id: "experience", roman: "II", chapter: "Chapter II", name: "Fieldwork", icon: Briefcase },
  { id: "projects", roman: "III", chapter: "Chapter III", name: "Works", icon: FolderGit2 },
  { id: "contact", roman: "IV", chapter: "Epilogue", name: "Contact", icon: Mail },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const trackProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-38% 0px -45% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Desktop Batik Chapter Navigator (sole glassmorphic surface per R-10) */}
      <aside
        aria-label="Primary navigation"
        className="no-print hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
      >
        <div className="group relative bg-[var(--surface)]/88 backdrop-blur-md border border-[var(--border-control)]/70 rounded-[1.5rem] px-2.5 py-4 transition-all duration-300 w-[70px] hover:w-56 focus-within:w-56 overflow-hidden shadow-[0_18px_48px_rgba(0,0,0,0.68)]">
          {/* Top & bottom ornamental canting diamond caps */}
          <div aria-hidden="true" className="flex flex-col items-center mb-3">
            <span className="w-2 h-2 rotate-45 bg-[var(--primary)]" />
            <span className="mt-1.5 h-px w-7 group-hover:w-36 group-focus-within:w-36 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent transition-all duration-300" />
          </div>

          <nav className="relative flex flex-col gap-1.5">
            {/* Continuous vertical reading-progress rail */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[24px] top-5 bottom-5 w-px bg-[var(--border-subtle)]"
            >
              <motion.div
                style={
                  prefersReducedMotion
                    ? undefined
                    : { scaleY: trackProgress, transformOrigin: "50% 0%" }
                }
                className="w-full h-full bg-gradient-to-b from-[#E5C878] via-[#D4AF5A] to-[#9E7B32]"
              />
            </div>

            {chapters.map(({ id, roman, chapter, name, icon: Icon }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center gap-3.5 min-h-[48px] px-2.5 rounded-xl transition-colors duration-200 ${
                    isActive
                      ? "text-[#0A0A09]"
                      : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)]/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktopChapterHighlight"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#E0BE6E] to-[#C8A14B]"
                    />
                  )}

                  {/* Icon + Roman marker */}
                  <span
                    className={`relative z-10 w-8 h-8 rounded-lg flex flex-col items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#0A0A09]/12 text-[#0A0A09]"
                        : "bg-[var(--background)] border border-[var(--border-subtle)] text-[var(--primary)]"
                    }`}
                  >
                    <Icon size={15} />
                  </span>

                  {/* Expanded editorial chapter title */}
                  <span className="relative z-10 flex flex-col leading-tight whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
                    <span
                      className={`font-display italic text-[11px] tracking-wide ${
                        isActive ? "text-[#0A0A09]/80 font-semibold" : "text-[var(--primary)]"
                      }`}
                    >
                      {roman} · {chapter}
                    </span>
                    <span className="text-xs font-semibold tracking-wide">
                      {name}
                    </span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Bottom ornamental diamond seal */}
          <div aria-hidden="true" className="flex flex-col items-center mt-3">
            <span className="mb-1.5 h-px w-7 group-hover:w-36 group-focus-within:w-36 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent transition-all duration-300" />
            <span className="w-2 h-2 rotate-45 border border-[var(--primary)] bg-[var(--background)]" />
          </div>
        </div>
      </aside>

      {/* Mobile and tablet chapter dock */}
      <nav
        aria-label="Mobile navigation"
        className="no-print lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md pb-[env(safe-area-inset-bottom)]"
      >
        <div className="relative grid grid-cols-5 gap-1 bg-[var(--surface)]/92 backdrop-blur-md border border-[var(--border-control)] rounded-2xl p-1.5 shadow-2xl overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/70 to-transparent"
          />
          {chapters.map(({ id, name, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex flex-col items-center justify-center gap-1 min-h-[48px] px-1 rounded-xl text-[11px] font-medium transition-colors ${
                  isActive
                    ? "text-[#0A0A09] font-semibold"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobileChapterHighlight"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#E0BE6E] to-[#C8A14B]"
                  />
                )}
                <Icon size={17} className="relative z-10" />
                <span className="relative z-10">{name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
