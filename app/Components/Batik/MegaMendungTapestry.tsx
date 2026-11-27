"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MegaMendungCloud } from "./BatikOrnaments";

const TAPESTRY_HORIZONS = [
  { topClass: "top-[16%]", widthClass: "w-[260px] sm:w-[360px] lg:w-[440px]" },
  { topClass: "top-[42%]", widthClass: "w-[240px] sm:w-[340px] lg:w-[420px]" },
  { topClass: "top-[68%]", widthClass: "w-[260px] sm:w-[360px] lg:w-[440px]" },
  { topClass: "top-[90%]", widthClass: "w-[240px] sm:w-[320px] lg:w-[400px]" },
];

const SideSulurThread = ({ mirror = false }: { mirror?: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 60 1000"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-full w-8 sm:w-12 opacity-20 ${mirror ? "-scale-x-100" : ""}`}
  >
    <path
      d="M 18 0 C 38 62, 6 125, 22 188 C 40 250, 8 312, 24 375 C 40 438, 8 500, 22 562 C 38 625, 8 688, 24 750 C 40 812, 6 875, 22 938 C 32 968, 22 986, 18 1000"
      stroke="#D4AF5A"
      strokeWidth="1"
    />
    <path
      d="M 28 0 C 46 62, 16 125, 32 188 C 48 250, 18 312, 34 375 C 48 438, 18 500, 32 562 C 46 625, 18 688, 34 750 C 48 812, 16 875, 32 938 C 40 968, 32 986, 28 1000"
      stroke="#D4AF5A"
      strokeOpacity="0.45"
      strokeWidth="0.75"
    />
  </svg>
);

const MegaMendungTapestry = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const driftY = useTransform(scrollYProgress, [0, 1], [-42, 42]);

  return (
    <div
      aria-hidden="true"
      className="no-print pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Continuous symmetrical vertical sulur lines linking all horizons down both margins */}
      <div className="absolute inset-y-0 left-2 sm:left-5 lg:left-8">
        <SideSulurThread />
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-5 lg:right-8">
        <SideSulurThread mirror />
      </div>

      {/* Symmetrical pairs of layered Mega Mendung clouds flowing between sections */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: driftY }}
        className="relative w-full h-full"
      >
        {TAPESTRY_HORIZONS.map((horizon) => (
          <React.Fragment key={horizon.topClass}>
            <div
              className={`absolute ${horizon.topClass} -left-36 sm:-left-28 lg:-left-24 xl:-left-12 opacity-[0.14] sm:opacity-[0.19]`}
            >
              <MegaMendungCloud className={`${horizon.widthClass} h-auto`} />
            </div>

            <div
              className={`absolute ${horizon.topClass} -right-36 sm:-right-28 lg:-right-24 xl:-right-12 opacity-[0.14] sm:opacity-[0.19] -scale-x-100`}
            >
              <MegaMendungCloud className={`${horizon.widthClass} h-auto`} />
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default MegaMendungTapestry;
