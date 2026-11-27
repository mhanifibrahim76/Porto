"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { MegaMendungCluster } from "./BatikOrnaments";

const TAPESTRY_HORIZONS = [
  { topClass: "top-[15%]" },
  { topClass: "top-[40%]" },
  { topClass: "top-[66%]" },
  { topClass: "top-[88%]" },
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, restDelta: 0.001 });
  const driftY = useTransform(scrollYProgress, [0, 1], [-55, 55]);

  return (
    <>
      {/* Top golden scroll progress thread */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="no-print fixed top-0 left-0 right-0 h-[2px] z-50 bg-gradient-to-r from-[#9E7B32] via-[#E5C878] to-[#D4AF5A] pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="no-print pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-y-0 left-2 sm:left-5 lg:left-8">
          <SideSulurThread />
        </div>
        <div className="absolute inset-y-0 right-2 sm:right-5 lg:right-8">
          <SideSulurThread mirror />
        </div>

        <motion.div
          style={prefersReducedMotion ? undefined : { y: driftY }}
          className="relative w-full h-full"
        >
          {TAPESTRY_HORIZONS.map((horizon) => (
            <React.Fragment key={horizon.topClass}>
              <div
                className={`absolute ${horizon.topClass} -left-48 sm:-left-40 lg:-left-36 xl:-left-24 opacity-[0.16] sm:opacity-[0.22]`}
              >
                <MegaMendungCluster />
              </div>

              <div
                className={`absolute ${horizon.topClass} -right-48 sm:-right-40 lg:-right-36 xl:-right-24 opacity-[0.16] sm:opacity-[0.22] -scale-x-100`}
              >
                <MegaMendungCluster />
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default MegaMendungTapestry;
