"use client";

import Image from "next/image";
import { FileText, Mail, MapPin } from "lucide-react";
import { GitHubIcon } from "../Icons";
import { BatikCornerFiligree } from "../Batik/BatikOrnaments";
import TiltCard from "./TiltCard";
import { profile } from "../../data/profile";

interface MyCardProps {
  onOpenResume: () => void;
}

const MyCard = ({ onOpenResume }: MyCardProps) => {
  return (
    <TiltCard className="w-full max-w-[340px] rounded-3xl" maxTilt={6}>
      <div className="relative w-full rounded-3xl overflow-hidden bg-[var(--surface)] border border-[var(--border-subtle)] shadow-2xl">
        {/* Symmetrical batik corner filigree */}
        <BatikCornerFiligree className="absolute top-0 left-0 w-20 h-20 opacity-85" />
        <BatikCornerFiligree className="absolute top-0 right-0 w-20 h-20 opacity-85 -scale-x-100" />

        {/* Profile content */}
        <div className="relative z-10 px-7 pt-8 pb-7 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-control)] text-[var(--foreground)] text-xs font-medium">
            <span
              aria-hidden="true"
              className="w-2 h-2 rotate-45 bg-[var(--primary)]"
            />
            <span>Open to Work</span>
          </div>

          <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-[var(--primary)] bg-[var(--surface-elevated)]">
            <Image
              src="/pp.png"
              alt={profile.name}
              width={128}
              height={128}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="font-display text-[1.65rem] font-bold text-[var(--foreground)] tracking-tight leading-snug">
              {profile.name}
            </h2>

            <div className="w-12 h-px bg-[var(--primary)] mx-auto my-3" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              {profile.headline}
            </p>

            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <MapPin size={13} aria-hidden="true" />
              <span>{profile.location}</span>
            </p>
          </div>
        </div>

        {/* Verified action bar */}
        <div className="bg-[var(--background)]/75 border-t border-[var(--border-subtle)] px-3 py-2">
          <div className="grid grid-cols-3 divide-x divide-[var(--border-subtle)] text-xs font-medium text-[var(--foreground-secondary)]">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 hover:text-[var(--primary)] transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 hover:text-[var(--primary)] transition-colors"
              aria-label="Send email"
            >
              <Mail size={14} aria-hidden="true" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 hover:text-[var(--primary)] transition-colors"
              aria-label="Inspect Resume"
            >
              <FileText size={14} aria-hidden="true" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default MyCard;
