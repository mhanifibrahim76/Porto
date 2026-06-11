"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ShowcaseCard from "./Card/ShowcaseCard";

import { projects } from "../data/projects";
import { certificates } from "../data/certificates";
import { experiences } from "../data/experiences";

type TabType = "projects" | "certificates" | "experience";

const ShowcaseSection = () => {
  const [activeTab, setActiveTab] =
    useState<TabType>("projects");

  const tabs: TabType[] = [
    "projects",
    "certificates",
    "experience",
  ];

  const currentData =
    activeTab === "projects"
      ? projects
      : activeTab === "certificates"
      ? certificates
      : experiences;

  return (
    <section
      id="projects"
      className="min-h-screen bg-[var(--background)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-[var(--secondary)] uppercase tracking-[0.3em] text-sm font-medium">
            Showcase
          </h2>

          <div className="relative inline-block mt-4">
            <div className="absolute w-[60%] h-[120%] -left-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-40 blur-2xl rounded-full" />

            <h1 className="relative text-5xl md:text-6xl font-black">
              My Work
            </h1>
          </div>
        </div>

        {/* TAB BUTTONS */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-3
                rounded-full
                font-semibold
                border
                capitalize
                transition-all
                duration-300
                ${
                  activeTab === tab
                    ? "bg-[var(--primary)] border-[var(--primary)] shadow-[0_0_30px_rgba(124,58,237,0.35)]"
                    : "border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-black"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative">
          
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10 blur-3xl rounded-[2rem]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative z-10 grid md:grid-cols-2 gap-8"
            >
              {currentData.map((item) => (
                <ShowcaseCard
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                  desc={item.desc}
                  image={item.image}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;