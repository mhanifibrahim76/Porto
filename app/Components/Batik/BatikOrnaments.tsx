import React, { useId } from "react";

const MEGA_MENDUNG_CLOUD_PATH =
  "M 24 166 " +
  "C 56 164, 72 120, 114 120 " +
  "C 132 120, 140 136, 152 138 " +
  "C 148 96, 178 66, 218 70 " +
  "C 236 72, 244 88, 252 92 " +
  "C 254 52, 274 30, 300 30 " +
  "C 326 30, 346 52, 348 92 " +
  "C 356 88, 364 72, 382 70 " +
  "C 422 66, 452 96, 448 138 " +
  "C 460 136, 468 120, 486 120 " +
  "C 528 120, 544 164, 576 166 " +
  "C 536 184, 492 192, 454 178 " +
  "C 434 170, 418 164, 404 172 " +
  "C 378 196, 342 204, 300 204 " +
  "C 258 204, 222 196, 196 172 " +
  "C 182 164, 166 170, 146 178 " +
  "C 108 192, 64 184, 24 166 Z";

function buildSpiralPath(
  cx: number,
  cy: number,
  startR: number,
  endR: number,
  turns: number,
  mirror = false
): string {
  const steps = 42;
  const startAngle = -Math.PI * 0.55;
  const points: string[] = [];

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const r = startR + (endR - startR) * t;
    const baseAngle = startAngle + t * turns * Math.PI * 2;
    const angle = mirror ? Math.PI - baseAngle : baseAngle;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return points.join(" ");
}

const CENTER_SPIRAL_LEFT = buildSpiralPath(282, 134, 20, 2.5, 1.55, false);
const CENTER_SPIRAL_RIGHT = buildSpiralPath(318, 134, 20, 2.5, 1.55, true);
const SHOULDER_SPIRAL_LEFT = buildSpiralPath(206, 134, 16, 2.2, 1.45, false);
const SHOULDER_SPIRAL_RIGHT = buildSpiralPath(394, 134, 16, 2.2, 1.45, true);

interface MegaMendungCloudProps {
  className?: string;
}

export const MegaMendungCloud = ({ className = "" }: MegaMendungCloudProps) => {
  const rawId = useId().replace(/:/g, "");
  const clipId = `mm-clip-${rawId}`;
  const maskId = `mm-mask-${rawId}`;
  const gradId = `mm-grad-${rawId}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="30" x2="600" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9E7B32" />
          <stop offset="30%" stopColor="#E5C878" />
          <stop offset="55%" stopColor="#D4AF5A" />
          <stop offset="85%" stopColor="#E5C878" />
          <stop offset="100%" stopColor="#B68D3B" />
        </linearGradient>

        <clipPath id={clipId}>
          <path d={MEGA_MENDUNG_CLOUD_PATH} />
        </clipPath>

        {/* Alternating white/black strokes clipped inside the cloud path yield 6 crisp parallel inward contours. */}
        <mask id={maskId}>
          <rect width="600" height="240" fill="black" />
          <g clipPath={`url(#${clipId})`} fill="none" strokeLinejoin="round" strokeLinecap="round">
            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="white" strokeOpacity="0.28" strokeWidth="67" />
            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="black" strokeWidth="64.4" />

            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="white" strokeOpacity="0.38" strokeWidth="54" />
            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="black" strokeWidth="51.4" />

            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="white" strokeOpacity="0.50" strokeWidth="41" />
            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="black" strokeWidth="38.2" />

            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="white" strokeOpacity="0.64" strokeWidth="28" />
            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="black" strokeWidth="25" />

            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="white" strokeOpacity="0.80" strokeWidth="15" />
            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="black" strokeWidth="11.8" />

            <path d={MEGA_MENDUNG_CLOUD_PATH} stroke="white" strokeOpacity="1" strokeWidth="3.6" />
          </g>
        </mask>
      </defs>

      <rect width="600" height="240" fill={`url(#${gradId})`} mask={`url(#${maskId})`} />

      {/* Inner spiral ukel volutes and isen cecek dots */}
      <g
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.72"
      >
        <path d={CENTER_SPIRAL_LEFT} />
        <path d={CENTER_SPIRAL_RIGHT} />
        <path d={SHOULDER_SPIRAL_LEFT} opacity="0.78" />
        <path d={SHOULDER_SPIRAL_RIGHT} opacity="0.78" />
      </g>

      <g fill={`url(#${gradId})`} opacity="0.82">
        <circle cx="292" cy="85" r="1.6" />
        <circle cx="300" cy="80" r="2" />
        <circle cx="308" cy="85" r="1.6" />
      </g>
    </svg>
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
  return (
    <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
      <div
        aria-hidden="true"
        className="w-px h-12 sm:h-16 bg-gradient-to-b from-[var(--primary)]/20 via-[var(--primary)]/70 to-[var(--primary)]"
      />

      <MegaMendungCloud className="w-[220px] sm:w-[270px] h-auto opacity-80 -my-2" />

      <div
        aria-hidden="true"
        className="w-px h-6 bg-gradient-to-b from-[var(--primary)]/75 to-transparent mb-4"
      />

      <p className="font-display italic text-lg sm:text-xl text-[var(--primary)] tracking-wide">
        {index} · {label}
      </p>

      <h2 className="mt-2 font-display font-bold text-[clamp(2rem,3.6vw,3.05rem)] leading-[1.12] tracking-tight text-[var(--foreground)] max-w-2xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[var(--foreground-secondary)] max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
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
        strokeOpacity="0.38"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M22 104 C26 86, 36 80, 34 62 C32 46, 48 40, 60 42 C74 44, 80 28, 104 22"
        stroke={`url(#${gradId})`}
        strokeOpacity="0.28"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M30 104 C34 90, 42 86, 40 70 C38 56, 52 50, 62 52 C74 54, 80 38, 104 30"
        stroke={`url(#${gradId})`}
        strokeOpacity="0.18"
        strokeWidth="0.95"
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
  <div aria-hidden="true" className="flex flex-col items-center mt-14 mb-6">
    <div className="w-px h-10 bg-gradient-to-b from-[var(--primary)]/40 to-[var(--primary)]/85" />
    <MegaMendungCloud className="w-44 sm:w-52 h-auto opacity-75 -mt-1" />
  </div>
);
