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
          index="02"
          label="Track Record"
          title="Experience & Education"
          subtitle="Hands-on frontend engineering in production, community leadership, and formal IT training."
        />

        <div className="space-y-6">
          {experiences.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--primary)]/60 transition-colors overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] lg:grid-cols-[310px_1fr]">
                {/* Left visual showcase frame */}
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[220px] bg-[var(--background)] border-b md:border-b-0 md:border-r border-[var(--border-subtle)] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.organization}
                    fill
                    sizes="(max-width: 768px) 100vw, 310px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/85 via-[#0A0A09]/20 to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#0A0A09]/85 border border-[var(--border-control)] text-[11px] font-semibold text-[var(--primary)]">
                      {typeLabels[item.type]}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#0A0A09]/85 border border-[var(--border-subtle)] text-[11px] font-medium text-[var(--foreground)]">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Right editorial role details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between">
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
