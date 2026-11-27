import React from "react";
import { SectionConnector } from "./Batik/BatikOrnaments";
import { profile } from "../data/profile";

const AboutSection = () => {
  return (
    <section id="about" className="no-print bg-transparent overflow-x-clip">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-24 pb-16 sm:pb-20">
        <SectionConnector
          index="01"
          label="Profile & Craft"
          title="Engineering clarity paired with visual craft"
          subtitle="Combining component discipline in Next.js and TypeScript with structured product design."
        />

        {/* Editorial 2-column narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 text-[var(--foreground-secondary)] text-base sm:text-[1.05rem] leading-relaxed mb-12">
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
            applications using Next.js, React, TypeScript, and Tailwind CSS.
          </p>

          <p>
            Alongside engineering, I bring practical UI/UX design experience in
            Figma. That overlap lets me translate design systems accurately into
            production components, spot usability friction early, and collaborate
            clearly with both product designers and backend engineers.
          </p>
        </div>

        {/* Unified 3-column architectural capability ledger */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
