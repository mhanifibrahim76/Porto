"use client";

import Image from "next/image";

interface ShowcaseCardProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

const ShowcaseCard = ({ title, subtitle, desc, image }: ShowcaseCardProps) => {
  return (
    <div
      className="
        group
        relative
        h-[275px]
        overflow-hidden
        rounded-[0.5rem]
        border
        border-white/10
        hover:border-[var(--primary)]
        transition-all
        duration-500
        hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]
      "
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[var(--primary)]
          to-[var(--secondary)]
          opacity-0
          group-hover:opacity-20
          blur-3xl
          transition-all
          duration-500
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/75
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          flex
          flex-col
          justify-end
          p-8
        "
      >
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>

        <h3 className="text-[var(--secondary)] text-sm uppercase tracking-[0.2em] mb-4">
          {subtitle}
        </h3>

        <p className="text-gray-300 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ShowcaseCard;
