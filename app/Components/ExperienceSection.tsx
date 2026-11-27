import React from "react";
import Image from "next/image";
import { SectionConnector } from "./Batik/BatikOrnaments";
import { experiences } from "../data/experiences";
import { ExperienceItem } from "../types/showcase";

const typeLabels: Record<ExperienceItem["type"], string> = {
  work: "Work Experience",
  organization: "Organization",
  education: "Education",
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="no-print bg-transparent overflow-x-clip"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-24 pb-16 sm:pb-20">
        <SectionConnector
          index="02"
          label="Track Record"
          title="Experience & Education"
          subtitle="Hands-on frontend engineering in production, community leadership, and formal IT training."
        />

        <div className="space-y-6">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--primary)]/60 transition-colors p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-6 md:gap-8">
                {/* Left column: institution crest, category, and period */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:border-r md:border-[var(--border-subtle)] md:pr-6">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[var(--border-control)] shrink-0 bg-[var(--background)]">
                    <Image
                      src={item.image}
                      alt={item.organization}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-[var(--primary)]">
                      {typeLabels[item.type]}
                    </p>
                    <p className="text-sm font-medium text-[var(--foreground)]">
                      {item.period}
                    </p>
                  </div>
                </div>

                {/* Right column: role details and verified contributions */}
                <div>
                  <h3 className="font-display text-2xl sm:text-[1.7rem] font-bold text-[var(--foreground)] leading-snug">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-[var(--primary)] mt-1">
                    {item.organization}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-[var(--foreground-secondary)] leading-relaxed">
                    {item.desc}
                  </p>

                  {item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-[var(--foreground-secondary)] list-disc list-inside marker:text-[var(--primary)]">
                      {item.highlights.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
