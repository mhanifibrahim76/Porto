"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionConnector } from "./Batik/BatikOrnaments";
import { experiences } from "../data/experiences";
import { ExperienceItem } from "../types/showcase";

const typeLabels: Record<ExperienceItem["type"], string> = {
  work: "Work Experience",
  organization: "Organization",
  education: "Education",
};

const ExperienceSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="no-print bg-transparent overflow-x-clip lg:min-h-[100dvh] flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-24 py-14 sm:py-16">
        <SectionConnector
          index="Chapter II"
          label="Fieldwork"
          title="Building in production, community, and university"
          subtitle="Applying frontend engineering from real estate platforms to campus study groups and formal IT training."
          watermark="II"
        />

        <div className="space-y-6">
          {experiences.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: idx * 0.08, ease: "easeOut" }}
              className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--primary)]/60 transition-colors p-5 sm:p-7"
            >
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[276px_1fr] gap-6 md:gap-8 items-start">
                {/* Left column: fixed 3:2 photo frame preventing horizontal clipping */}
                <div className="flex flex-col gap-3.5">
                  <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-[var(--background)] border border-[var(--border-subtle)]">
                    <Image
                      src={item.image}
                      alt={item.organization}
                      fill
                      sizes="(max-width: 768px) 100vw, 276px"
                      style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 px-1">
                    <span className="text-xs font-semibold text-[var(--primary)]">
                      {typeLabels[item.type]}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[var(--background)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--foreground-secondary)]">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Right column: editorial role details */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-display text-2xl sm:text-[1.7rem] font-bold text-[var(--foreground)] leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--primary)] mt-1">
                      {item.organization}
                    </p>

                    <p className="mt-3.5 text-sm sm:text-base text-[var(--foreground-secondary)] leading-relaxed">
                      {item.desc}
                    </p>

                    {item.highlights.length > 0 && (
                      <ul className="mt-3.5 space-y-1.5 text-sm text-[var(--foreground-secondary)] list-disc list-inside marker:text-[var(--primary)]">
                        {item.highlights.map((point, pointIdx) => (
                          <li key={pointIdx} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-[var(--background)] border border-[#3A342B] text-[var(--chip-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
