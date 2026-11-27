"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionConnector } from "./Batik/BatikOrnaments";
import { profile } from "../data/profile";

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="no-print bg-transparent overflow-x-clip lg:min-h-[100dvh] flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-24 py-14 sm:py-16">
        <SectionConnector
          index="Chapter I"
          label="Foundations"
          title="Where engineering clarity meets visual craft"
          subtitle="Every product begins with clear structure, readable code, and interfaces people understand immediately."
          watermark="I"
        />

        {/* Symmetrical centered editorial narrative */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center space-y-5 text-[var(--foreground-secondary)] text-base sm:text-[1.06rem] leading-relaxed mb-12"
        >
          <p>
            I am{" "}
            <span className="text-[var(--foreground)] font-semibold">
              {profile.name}
            </span>
            , an Information Technology graduate from{" "}
            <span className="text-[var(--foreground)] font-medium">
              CCIT FTUI
            </span>{" "}
            and former Frontend Developer Intern at{" "}
            <span className="text-[var(--foreground)] font-medium">
              Propertree Group
            </span>
            . I focus on building fast, responsive, and maintainable web
            applications with Next.js, React, TypeScript, and Tailwind CSS.
          </p>

          <p>
            Alongside engineering, I bring practical UI/UX design experience in
            Figma. That overlap lets me translate design systems accurately into
            production components, spot usability friction early, and collaborate
            clearly with both product designers and backend engineers.
          </p>
        </motion.div>

        {/* Unified 3-column architectural capability ledger */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]"
        >
          {profile.skills.map((group) => (
            <div key={group.label} className="p-6 sm:p-7 flex flex-col">
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <h3 className="font-display text-2xl font-bold text-[var(--foreground)]">
                  {group.label}
                </h3>
                <span className="font-display italic text-lg text-[var(--primary)]">
                  {group.roman}
                </span>
              </div>

              <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed mb-5">
                {group.scope}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[#3A342B] bg-[var(--background)] text-[var(--chip-text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
