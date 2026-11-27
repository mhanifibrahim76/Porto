"use client";

import React, { useId, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

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
        className={`relative w-[320px] sm:w-[440px] lg:w-[520px] h-[145px] sm:h-[190px] lg:h-[215px] select-none pointer-events-none ${className}`}
      >
        <motion.div
          {...floatMotion(-6, 3, 7.2, 0.4)}
          className="absolute left-0 top-7 sm:top-9 w-[170px] sm:w-[235px] lg:w-[275px] opacity-60 -rotate-3"
        >
          <MegaMendungCloud className="w-full h-auto" />
        </motion.div>

        <motion.div
          {...floatMotion(6, 3, 7.6, 0.9)}
          className="absolute right-0 top-7 sm:top-9 w-[170px] sm:w-[235px] lg:w-[275px] opacity-60 rotate-3 -scale-x-100"
        >
          <MegaMendungCloud className="w-full h-auto" />
        </motion.div>

        <motion.div
          {...floatMotion(0, -6, 6.4, 0)}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[230px] sm:w-[310px] lg:w-[360px] opacity-95 drop-shadow-[0_12px_28px_rgba(0,0,0,0.72)]"
        >
          <MegaMendungCloud className="w-full h-auto" />
        </motion.div>

        <motion.div
          {...floatMotion(4, 3, 6.9, 0.7)}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[135px] sm:w-[175px] lg:w-[200px] opacity-80"
        >
          <MegaMendungCloud className="w-full h-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative w-[520px] sm:w-[680px] lg:w-[820px] h-[300px] sm:h-[380px] lg:h-[440px] select-none pointer-events-none ${className}`}
    >
      <motion.div
        {...floatMotion(-8, -6, 9.2, 0.2)}
        className="absolute left-4 top-4 w-[260px] sm:w-[340px] lg:w-[410px] opacity-55 -rotate-3"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      <motion.div
        {...floatMotion(8, -5, 8.6, 1.1)}
        className="absolute right-4 top-2 w-[250px] sm:w-[330px] lg:w-[400px] opacity-60 rotate-3 -scale-x-100"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      <motion.div
        {...floatMotion(-10, 5, 8, 0.6)}
        className="absolute -left-6 bottom-12 w-[285px] sm:w-[375px] lg:w-[450px] opacity-75 rotate-2"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      <motion.div
        {...floatMotion(10, 6, 8.4, 1.4)}
        className="absolute -right-6 bottom-10 w-[285px] sm:w-[375px] lg:w-[450px] opacity-75 -rotate-2 -scale-x-100"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      <motion.div
        {...floatMotion(0, -8, 7, 0)}
        className="absolute left-1/2 -translate-x-1/2 top-14 sm:top-16 w-[350px] sm:w-[455px] lg:w-[540px] opacity-95 drop-shadow-[0_18px_36px_rgba(0,0,0,0.8)]"
      >
        <MegaMendungCloud className="w-full h-auto" />
      </motion.div>

      <motion.div
        {...floatMotion(5, 5, 7.4, 0.8)}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[195px] sm:w-[250px] lg:w-[300px] opacity-85"
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
  watermark?: string;
}

export const SectionConnector = ({
  index,
  label,
  title,
  subtitle,
  watermark,
}: SectionConnectorProps) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const stemScale = useTransform(scrollYProgress, [0, 0.8], [0.15, 1]);
  const cloudScale = useTransform(scrollYProgress, [0, 0.85], [0.9, 1]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [28, -14]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center mb-10 sm:mb-12"
    >
      {watermark && (
        <motion.span
          aria-hidden="true"
          style={prefersReducedMotion ? undefined : { y: watermarkY }}
          className="pointer-events-none select-none absolute -top-2 font-display font-bold text-[7.5rem] sm:text-[10rem] leading-none text-[var(--primary)]/[0.045]"
        >
          {watermark}
        </motion.span>
      )}

      {/* Golden thread draws downward as the reader enters the chapter */}
      <motion.div
        aria-hidden="true"
        style={
          prefersReducedMotion
            ? undefined
            : { scaleY: stemScale, transformOrigin: "50% 0%" }
        }
        className="w-px h-12 sm:h-14 bg-gradient-to-b from-[var(--primary)]/20 via-[var(--primary)]/75 to-[var(--primary)]"
      />

      <motion.div
        style={prefersReducedMotion ? undefined : { scale: cloudScale }}
        className="-my-3 sm:-my-4"
      >
        <MegaMendungCluster compact />
      </motion.div>

      <div
        aria-hidden="true"
        className="w-px h-6 bg-gradient-to-b from-[var(--primary)]/80 to-transparent mb-3"
      />

      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
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
    </div>
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
    <MegaMendungCluster compact className="-mt-2 scale-90" />
  </div>
);
