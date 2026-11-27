"use client";

import React, { useEffect, useRef } from "react";
import { Printer, X } from "lucide-react";
import { profile } from "../data/profile";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import { certificates } from "../data/certificates";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 print:static print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="print-sheet relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[var(--border-control)] bg-[var(--surface)] text-[var(--foreground)] shadow-2xl"
      >
        {/* Top Action Bar */}
        <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[var(--surface)] border-b border-[var(--border-subtle)]">
          <div>
            <p className="font-display italic text-base text-[var(--primary)]">
              Curriculum Vitae
            </p>
            <h2 id="resume-modal-title" className="text-sm font-semibold text-[var(--foreground)]">
              {profile.name}
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-[44px] px-4 rounded-xl bg-[var(--primary)] hover:bg-[var(--accent-gold-hover)] text-[#0A0A09] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close resume dialog"
              className="min-w-[44px] min-h-[44px] rounded-xl border border-[var(--border-control)] bg-[var(--surface-elevated)] text-[var(--foreground)] hover:border-[var(--primary)] inline-flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Header */}
          <header className="border-b border-[var(--border-subtle)] pb-6">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              {profile.name}
            </h3>
            <p className="mt-1 text-base font-medium text-[var(--primary)]">
              {profile.headline} &amp; UI/UX Designer
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-[var(--foreground-secondary)]">
              <span>{profile.location}</span>
              <span>·</span>
              <a
                href={`mailto:${profile.email}`}
                className="underline decoration-[var(--border-control)] hover:text-[var(--primary)]"
              >
                {profile.email}
              </a>
              <span>·</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--border-control)] hover:text-[var(--primary)]"
              >
                github.com/mhanifibrahim76
              </a>
            </div>
          </header>

          {/* Experience & Education */}
          <section>
            <h4 className="font-display text-xl font-bold text-[var(--foreground)] border-b border-[var(--border-subtle)] pb-2 mb-4">
              Experience &amp; Education
            </h4>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <p className="font-semibold text-sm sm:text-base text-[var(--foreground)]">
                      {exp.role}, <span className="text-[var(--primary)]">{exp.organization}</span>
                    </p>
                    <span className="text-xs text-[var(--muted)] shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs sm:text-sm text-[var(--foreground-secondary)] list-disc list-inside">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h4 className="font-display text-xl font-bold text-[var(--foreground)] border-b border-[var(--border-subtle)] pb-2 mb-4">
              Technical Capabilities
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {profile.skills.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold text-[var(--primary)] mb-1.5">
                    {group.label}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--foreground-secondary)] leading-relaxed">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section>
            <h4 className="font-display text-xl font-bold text-[var(--foreground)] border-b border-[var(--border-subtle)] pb-2 mb-4">
              Selected Projects
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--background)]/50 p-3.5"
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {proj.title}
                  </p>
                  <p className="text-xs text-[var(--primary)] mt-0.5">
                    {proj.subtitle}
                  </p>
                  <p className="text-xs text-[var(--foreground-secondary)] mt-1.5 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h4 className="font-display text-xl font-bold text-[var(--foreground)] border-b border-[var(--border-subtle)] pb-2 mb-3">
              Certifications &amp; Awards
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[var(--foreground-secondary)]">
              {certificates.map((cert) => (
                <li key={cert.id}>
                  <span className="text-[var(--foreground)] font-medium">{cert.title}</span>{" "}
                  ({cert.subtitle})
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
