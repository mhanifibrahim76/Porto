"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

const TiltCard = ({ children, className = "", maxTilt = 6 }: TiltCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [enableTilt, setEnableTilt] = useState(false);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 24 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 24 });

  const sheenBackground = useMotionTemplate`radial-gradient(380px circle at ${glareX}% ${glareY}%, rgba(212, 175, 90, 0.16), rgba(212, 175, 90, 0.04) 38%, transparent 72%)`;

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnableTilt(hoverQuery.matches && !motionQuery.matches);
    };

    update();
    hoverQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      hoverQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;

    rawRotateY.set((xRatio - 0.5) * maxTilt * 2);
    rawRotateX.set((0.5 - yRatio) * maxTilt * 2);
    glareX.set(xRatio * 100);
    glareY.set(yRatio * 100);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt
          ? {
              transformPerspective: 1100,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {enableTilt && (
        <motion.div
          aria-hidden="true"
          style={{
            background: sheenBackground,
            opacity: glareOpacity,
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
