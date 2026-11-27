"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShowcaseCard from "./Card/ShowcaseCard";
import { SectionConnector } from "./Batik/BatikOrnaments";
import { projects } from "../data/projects";
import { certificates } from "../data/certificates";
import { ShowcaseItem } from "../types/showcase";

type TabType = "projects" | "certificates";
type CategoryFilter = "all" | "web" | "mobile" | "design";

const categoryOptions: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile" },
  { value: "design", label: "UI/UX" },
];

function splitProjectsSymmetrically(
  items: ShowcaseItem[],
  category: CategoryFilter
): { flagshipItems: ShowcaseItem[]; gridItems: ShowcaseItem[] } {
  if (items.length === 0) {
    return { flagshipItems: [], gridItems: [] };
  }

  if (category === "all") {
    const flagshipItems = items.filter((item) => item.featured);
    const gridItems = items.filter((item) => !item.featured);
    return { flagshipItems, gridItems };
  }

  // Keep every grid row evenly filled with zero dangling single cards.
  if (items.length % 2 === 1) {
    return {
      flagshipItems: [items[0]],
      gridItems: items.slice(1),
    };
  }

  return { flagshipItems: [], gridItems: items };
}

const ShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((item) => item.category === category);

  const { flagshipItems, gridItems } = splitProjectsSymmetrically(
    filteredProjects,
    category
  );

  return (
    <section
      id="projects"
      className="no-print bg-transparent overflow-x-clip"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-24 pb-16 sm:pb-20">
        <SectionConnector
          index="03"
          label="Selected Works"
          title="Projects & Certifications"
          subtitle="Production web applications, cross-platform Flutter builds, and interactive UI/UX design systems."
        />

        {/* Symmetrical tab and category control bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div
            role="tablist"
            aria-label="Work categories"
            className="inline-flex p-1 rounded-xl bg-[var(--surface)] border border-[var(--border-control)] self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "projects"}
              onClick={() => setActiveTab("projects")}
              className={`min-h-[44px] px-5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "projects"
                  ? "bg-[var(--primary)] text-[#0A0A09]"
                  : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
              }`}
            >
              Projects ({projects.length})
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "certificates"}
              onClick={() => setActiveTab("certificates")}
              className={`min-h-[44px] px-5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "certificates"
                  ? "bg-[var(--primary)] text-[#0A0A09]"
                  : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
              }`}
            >
              Certificates ({certificates.length})
            </button>
          </div>

          {activeTab === "projects" && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {categoryOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setCategory(opt.value)}
                  className={`min-h-[44px] px-4 rounded-xl text-xs font-semibold border transition-colors ${
                    category === opt.value
                      ? "border-[var(--primary)] bg-[var(--primary)]/15 text-[var(--primary)]"
                      : "border-[var(--border-control)] bg-[var(--surface)] text-[var(--foreground-secondary)] hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid content */}
        <AnimatePresence mode="wait">
          {activeTab === "projects" ? (
            <motion.div
              key={`projects-${category}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="space-y-6"
            >
              {filteredProjects.length === 0 ? (
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-10 text-center">
                  <p className="font-display text-2xl font-bold text-[var(--foreground)]">
                    No projects in this category yet
                  </p>
                  <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
                    Reset the category filter to view all projects.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCategory("all")}
                    className="mt-5 min-h-[44px] px-5 rounded-xl bg-[var(--primary)] hover:bg-[var(--accent-gold-hover)] text-[#0A0A09] text-sm font-semibold transition-colors"
                  >
                    Show All Projects
                  </button>
                </div>
              ) : (
                <>
                  {flagshipItems.length > 0 && (
                    <div className="space-y-6">
                      {flagshipItems.map((item, idx) => (
                        <ShowcaseCard
                          key={item.id}
                          item={item}
                          variant="flagship"
                          reverse={idx % 2 === 1}
                        />
                      ))}
                    </div>
                  )}

                  {gridItems.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {gridItems.map((item) => (
                        <ShowcaseCard
                          key={item.id}
                          item={item}
                          variant="standard"
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((item) => (
                <ShowcaseCard key={item.id} item={item} variant="standard" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ShowcaseSection;
