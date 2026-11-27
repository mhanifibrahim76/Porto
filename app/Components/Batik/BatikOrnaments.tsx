"use client";

import React, { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CLOUD_OUTER_PATH =
  "M 10 108 " +
  "C 42 98, 66 56, 108 54 " +
  "C 128 52, 138 40, 154 34 " +
  "C 172 24, 198 24, 218 38 " +
  "C 242 52, 266 54, 294 60 " +
  "C 334 68, 368 88, 410 86 " +
  "C 374 108, 344 128, 314 156 " +
  "C 292 174, 260 166, 238 152 " +
  "C 214 176, 178 182, 146 164 " +
  "C 112 148, 72 132, 10 108 Z";

// Concentric inner depth layers echoing the stepped paper-cut relief in the reference artwork.
const CLOUD_LAYER_2 =
  "M 36 108 " +
  "C 66 98, 86 68, 122 66 " +
  "C 142 64, 152 52, 168 46 " +
  "C 184 38, 206 38, 224 50 " +
  "C 246 64, 268 66, 294 72 " +
  "C 326 78, 354 92, 384 90 " +
  "C 352 108, 326 126, 300 146 " +
  "C 280 160, 252 152, 232 140 " +
  "C 210 162, 178 166, 150 150 " +
  "C 118 136, 84 124, 36 108 Z";

const CLOUD_LAYER_3 =
  "M 70 108 " +
  "C 96 98, 114 78, 144 76 " +
  "C 162 74, 174 64, 188 58 " +
  "C 202 52, 218 54, 234 64 " +
  "C 252 76, 272 78, 294 82 " +
  "C 316 86, 336 96, 354 96 " +
  "C 328 110, 306 124, 282 136 " +
  "C 266 146, 242 138, 224 128 " +
  "C 206 146, 180 148, 156 136 " +
  "C 130 124, 102 118, 70 108 Z";

const CLOUD_LAYER_4 =
  "M 116 108 " +
  "C 138 98, 154 84, 178 82 " +
  "C 194 80, 208 74, 224 80 " +
  "C 242 88, 264 90, 298 98 " +
  "C 278 110, 258 122, 236 124 " +
  "C 218 126, 204 134, 182 130 " +
  "C 158 124, 138 116, 116 108 Z";

// Signature opposing diagonal gold spiral ribbons from the reference Mega Mendung motif.
const TOP_SPIRAL_RIBBON =
  "M 148 38 " +
  "C 162 52, 166 74, 150 86 " +
  "C 136 96, 118 86, 122 72 " +
  "C 125 60, 140 60, 142 70 " +
  "C 144 78, 134 80, 132 74 " +
  "M 164 62 " +
  "C 188 52, 214 58, 236 74 " +
  "C 258 88, 286 92, 316 96";

const BOTTOM_SPIRAL_RIBBON =
  "M 234 152 " +
  "C 226 136, 232 116, 250 108 " +
  "C 266 100, 282 112, 276 126 " +
  "C 272 138, 256 136, 256 126 " +
  "C 256 118, 266 118, 266 124 " +
  "M 226 130 " +
  "C 200 138, 174 132, 150 118 " +
  "C 128 106, 102 104, 78 104";

interface MegaMendungCloudProps {
  className?: string;
}

export const MegaMendungCloud = ({ className = "" }: MegaMendungCloudProps) => {
  const rawId = useId().replace(/:/g, "");
  const goldGradId = `mm-gold-${rawId}`;
  const shadowGradId = `mm-shade-${rawId}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id={goldGradId} x1="10" y1="30" x2="410" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9E7B32" />
          <stop offset="30%" stopColor="#E5C878" />
          <stop offset="55%" stopColor="#D4AF5A" />
          <stop offset="85%" stopColor="#E5C878" />
          <stop offset="100%" stopColor="#B68D3B" />
        </linearGradient>

        <linearGradient id={shadowGradId} x1="210" y1="24" x2="210" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#261F14" />
          <stop offset="100%" stopColor="#120F0A" />
        </linearGradient>
      </defs>

      {/* Stepped obsidian-to-amber body layers */}
      <path
        d={CLOUD_OUTER_PATH}
        fill={`url(#${shadowGradId})`}
        stroke={`url(#${goldGradId})`}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d={CLOUD_LAYER_2}
        fill="#19140E"
        stroke="#8F7135"
        strokeOpacity="0.65"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d={CLOUD_LAYER_3}
        fill="#130F0A"
        stroke="#735A28"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d={CLOUD_LAYER_4}
        fill="#0B0907"
        stroke="#D4AF5A"
        strokeOpacity="0.32"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Signature diagonal opposing spiral ribbons */}
      <path
        d={TOP_SPIRAL_RIBBON}
        stroke={`url(#${goldGradId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={BOTTOM_SPIRAL_RIBBON}
        stroke={`url(#${goldGradId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface MegaMendungClusterProps {
  className?: string;
  compact?: boolean;
}

export const MegaMendungCluster = ({
  className = "",
  compact = false,
}: MegaMendungClusterProps) => {
  const prefersReducedMotion = useReducedMotion();

  const floatMotion = (dx: number, dy: number, duration: number, delay = 0) =>
    prefersReducedMotion
      ? undefined
      : {
          animate: {
            x: [0, dx, 0],
            y: [0, dy, 0],
          },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  if (compact) {
    return (
      <div
        aria-hidden="true"
        className={`relative w-[260px] sm:w-[320px] h-[110px] sm:h-[128px] select-none pointer-events-none ${className}`}
      >
        <motion.div
          {...floatMotion(-4, 2, 7, 0.4)}
          className="absolute left-0 top-5 w-[135px] sm:w-[160px] opacity-55 -rotate-3"
        >
          <MegaMendungCloud className="w-full h-auto" />
        </motion.div>

        <motion.div
          {...floatMotion(4, 2, 7.5, 0.9)}
          className="absolute right-0 top-5 w-[135px] sm:w-[160px] opacity-55 rotate-3 -scale-x-100"
        >
          <MegaMendungCloud className="w-full h-auto" />
        </motion.div>

        <motion.div
          {...floatMotion(0, -4, 6.2, 0)}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[185px] sm:w-[225px] opacity-95 drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)]"
        >
          <MegaMendungCloud className="w-full h-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative w-[360px] sm:w-[460px] h-[220px] sm:h-[260px] select-none pointer-events-none ${className}`}
    >
      {/* Back upper-left & upper-right clouds */}
      <motion.div
        {...floatMotion(-5, -4, 9, 0.2)}
        className="absolute left-2 top-3 w-[180px] sm:w-[220px] opacity-50 -rotate-3"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      <motion.div
        {...floatMotion(5, -3, 8.5, 1.1)}
        className="absolute right-2 top-1 w-[175px] sm:w-[215px] opacity-55 rotate-3 -scale-x-100"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      {/* Mid outer wing clouds */}
      <motion.div
        {...floatMotion(-6, 3, 7.8, 0.6)}
        className="absolute -left-4 bottom-8 w-[195px] sm:w-[240px] opacity-70 rotate-2"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      <motion.div
        {...floatMotion(6, 4, 8.2, 1.4)}
        className="absolute -right-4 bottom-6 w-[195px] sm:w-[240px] opacity-70 -rotate-2 -scale-x-100"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      {/* Foreground centerpiece cloud */}
      <motion.div
        {...floatMotion(0, -5, 6.8, 0)}
        className="absolute left-1/2 -translate-x-1/2 top-11 w-[240px] sm:w-[300px] opacity-95 drop-shadow-[0_12px_28px_rgba(0,0,0,0.75)]"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      {/* Small lower crest cloud */}
      <motion.div
        {...floatMotion(3, 3, 7.2, 0.8)}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[130px] sm:w-[160px] opacity-80"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

interface SectionConnectorProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}

export const SectionConnector = ({
  index,
  label,
  title,
  subtitle,
}: SectionConnectorProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-col items-center text-center mb-10 sm:mb-12"
    >
      <div
        aria-hidden="true"
        className="w-px h-10 sm:h-12 bg-gradient-to-b from-[var(--primary)]/20 via-[var(--primary)]/70 to-[var(--primary)]"
      />

      <MegaMendungCluster compact className="-my-2" />

      <div
        aria-hidden="true"
        className="w-px h-5 bg-gradient-to-b from-[var(--primary)]/75 to-transparent mb-3"
      />

      <p className="font-display italic text-lg sm:text-xl text-[var(--primary)] tracking-wide">
        {index} · {label}
      </p>

      <h2 className="mt-2 font-display font-bold text-[clamp(2rem,3.6vw,3.05rem)] leading-[1.12] tracking-tight text-[var(--foreground)] max-w-2xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[var(--foreground-secondary)] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export const BatikCornerFiligree = ({ className = "" }: { className?: string }) => {
  const rawId = useId().replace(/:/g, "");
  const gradId = `mm-corner-${rawId}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id={gradId} x1="6" y1="104" x2="104" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9E7B32" />
          <stop offset="50%" stopColor="#E5C878" />
          <stop offset="100%" stopColor="#D4AF5A" />
        </linearGradient>
      </defs>

      <path
        d="M6 104 C10 74, 24 68, 22 46 C20 26, 40 20, 56 22 C74 24, 80 8, 104 6"
        stroke={`url(#${gradId})`}
        strokeOpacity="0.5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M14 104 C18 80, 30 74, 28 54 C26 36, 44 30, 58 32 C74 34, 80 18, 104 14"
        stroke={`url(#${gradId})`}
        strokeOpacity="0.35"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M18 32 C14 26, 22 18, 28 22 C33 25, 29 33, 24 31"
        stroke={`url(#${gradId})`}
        strokeOpacity="0.45"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const BatikFooterSeal = () => (
  <div aria-hidden="true" className="flex flex-col items-center mt-12 mb-4">
    <div className="w-px h-8 bg-gradient-to-b from-[var(--primary)]/40 to-[var(--primary)]/85" />
    <MegaMendungCluster compact className="-mt-1 scale-90" />
  </div>
);
