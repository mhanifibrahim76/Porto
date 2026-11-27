"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FigmaIcon, GitHubIcon } from "../Icons";
import { BatikCornerFiligree } from "../Batik/BatikOrnaments";
import TiltCard from "./TiltCard";
import { ShowcaseItem } from "../../types/showcase";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  variant?: "flagship" | "standard";
  reverse?: boolean;
}

const ShowcaseCard = ({
  item,
  variant = "standard",
  reverse = false,
}: ShowcaseCardProps) => {
  const {
    title,
    subtitle,
    desc,
    image,
    tags,
    liveUrl,
    repoUrl,
    designUrl,
    credentialUrl,
  } = item;

  const hasLinks = Boolean(liveUrl || repoUrl || designUrl || credentialUrl);

  const actionLinks = hasLinks ? (
    <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-3">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A0A09] bg-[var(--primary)] hover:bg-[var(--accent-gold-hover)] px-4 rounded-xl transition-colors"
        >
          <ExternalLink size={14} aria-hidden="true" />
          <span>Live Demo</span>
        </a>
      )}
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground)] border border-[var(--border-control)] hover:border-[var(--primary)] px-4 rounded-xl transition-colors"
        >
          <GitHubIcon size={14} />
          <span>Source Code</span>
        </a>
      )}
      {designUrl && (
        <a
          href={designUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground)] border border-[var(--border-control)] hover:border-[var(--primary)] px-4 rounded-xl transition-colors"
        >
          <FigmaIcon size={14} />
          <span>View Figma</span>
        </a>
      )}
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground)] border border-[var(--border-control)] hover:border-[var(--primary)] px-4 rounded-xl transition-colors"
        >
          <ExternalLink size={14} aria-hidden="true" />
          <span>Verify Credential</span>
        </a>
      )}
    </div>
  ) : null;

  if (variant === "flagship") {
    return (
      <TiltCard className="w-full rounded-2xl" maxTilt={4}>
        <article className="group grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--primary)]/70 transition-colors overflow-hidden">
          {/* Preview image half */}
          <div
            className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[300px] bg-[var(--background)] overflow-hidden border-b lg:border-b-0 border-[var(--border-subtle)] ${
              reverse ? "lg:order-2 lg:border-l" : "lg:border-r"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Content half */}
          <div
            className={`relative p-6 sm:p-8 flex flex-col justify-between ${
              reverse ? "lg:order-1" : ""
            }`}
          >
            <BatikCornerFiligree className="absolute top-0 right-0 w-20 h-20 opacity-65 -scale-x-100" />

            <div className="relative z-10">
              <p className="text-xs font-semibold text-[var(--primary)] tracking-wide">
                {subtitle}
              </p>

              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-snug">
                {title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[var(--foreground-secondary)] leading-relaxed">
                {desc}
              </p>
            </div>

            <div className="relative z-10 mt-6">
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[var(--background)] border border-[#3A342B] text-[var(--chip-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {actionLinks}
            </div>
          </div>
        </article>
      </TiltCard>
    );
  }

  return (
    <TiltCard className="h-full rounded-2xl" maxTilt={5}>
      <article className="group h-full flex flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--primary)]/70 transition-colors">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--background)] border-b border-[var(--border-subtle)]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold text-[var(--primary)] tracking-wide">
            {subtitle}
          </p>

          <h3 className="mt-1.5 font-display text-2xl font-bold text-[var(--foreground)] leading-snug">
            {title}
          </h3>

          <p className="mt-2.5 text-sm text-[var(--foreground-secondary)] leading-relaxed flex-1">
            {desc}
          </p>

          {tags && tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[var(--background)] border border-[#3A342B] text-[var(--chip-text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {actionLinks}
        </div>
      </article>
    </TiltCard>
  );
};

export default ShowcaseCard;
