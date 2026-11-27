"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { GitHubIcon } from "./Icons";
import { BatikFooterSeal, SectionConnector } from "./Batik/BatikOrnaments";
import { profile } from "../data/profile";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || status === "sending") return;

    setStatus("sending");

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_i80kavd";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_rloksjf";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "BIA6EAAvK8hgGStCx";

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="no-print bg-transparent overflow-x-clip lg:min-h-[100dvh] flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-24 py-14 sm:py-16">
        <SectionConnector
          index="04"
          label="Correspondence"
          title="Let's Work Together"
          subtitle="Have a Frontend or Product Engineering role in mind, or want to collaborate on a product build? Send a direct note below."
        />

        {/* Symmetrical 50:50 equal-height dual card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left card: Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.38 }}
            className="h-full flex flex-col justify-between gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--foreground)]">
                  Contact Information
                </h3>
                <p className="mt-1.5 text-sm text-[var(--foreground-secondary)] leading-relaxed">
                  Reach out directly via email or inspect my recent repositories
                  on GitHub.
                </p>
              </div>

              <div className="space-y-3.5">
                <a
                  href={`mailto:${profile.email}`}
                  className="min-h-[68px] flex items-center gap-3.5 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--background)]/75 hover:border-[var(--primary)] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--primary)] flex items-center justify-center shrink-0">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[var(--muted)]">Email</p>
                    <p className="text-sm font-medium text-[var(--foreground)] truncate group-hover:text-[var(--primary)] transition-colors">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <div className="min-h-[68px] flex items-center gap-3.5 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--background)]/75">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--primary)] flex items-center justify-center shrink-0">
                    <MapPin size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Location</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="min-h-[68px] flex items-center gap-3.5 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--background)]/75">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--primary)] flex items-center justify-center shrink-0">
                    <Briefcase size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Availability</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">
                      {profile.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 50:50 verified actions flush with right Send Message button */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="min-h-[48px] px-4 rounded-xl border border-[var(--border-control)] bg-[var(--surface-elevated)] hover:border-[var(--primary)] text-sm font-semibold text-[var(--foreground)] inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Send Email</span>
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-4 rounded-xl border border-[var(--border-control)] bg-[var(--surface-elevated)] hover:border-[var(--primary)] text-sm font-semibold text-[var(--foreground)] inline-flex items-center justify-center gap-2 transition-colors"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right card: Message form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.38, delay: 0.06 }}
            className="h-full flex flex-col justify-between gap-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8"
          >
            <div className="flex flex-1 flex-col gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--foreground)]">
                  Send a Message
                </h3>
                <p className="mt-1.5 text-sm text-[var(--foreground-secondary)] leading-relaxed">
                  Fill out the form and I will respond to your message as soon
                  as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[var(--foreground-secondary)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full min-h-[48px] bg-[var(--background)]/75 border border-[var(--border-control)] rounded-xl px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:border-[var(--primary)] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[var(--foreground-secondary)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    className="w-full min-h-[48px] bg-[var(--background)]/75 border border-[var(--border-control)] rounded-xl px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:border-[var(--primary)] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[var(--foreground-secondary)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your role, team, or project..."
                  required
                  className="w-full flex-1 min-h-[136px] bg-[var(--background)]/75 border border-[var(--border-control)] rounded-xl p-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] resize-none focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:border-[var(--primary)] transition-colors"
                />
              </div>

              {status === "sending" && (
                <div
                  role="status"
                  className="flex items-center gap-2.5 rounded-xl border border-[var(--border-control)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--foreground-secondary)]"
                >
                  <span>Sending message...</span>
                </div>
              )}

              {status === "success" && (
                <div
                  role="status"
                  className="flex items-center gap-2.5 rounded-xl border border-[var(--primary)]/50 bg-[var(--primary)]/12 px-4 py-3 text-sm text-[var(--foreground)]"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[var(--primary)]"
                    aria-hidden="true"
                  />
                  <span>
                    Message sent. I will get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-center gap-2.5 rounded-xl border border-red-400/50 bg-red-950/40 px-4 py-3 text-sm text-red-200"
                >
                  <AlertCircle size={18} className="shrink-0 text-red-300" aria-hidden="true" />
                  <span>
                    Failed to send message. Please email me directly at{" "}
                    {profile.email}.
                  </span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full min-h-[48px] px-6 rounded-xl inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0A0A09] bg-[var(--primary)] hover:bg-[var(--accent-gold-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={15} aria-hidden="true" />
              <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
            </button>
          </motion.form>
        </div>

        <BatikFooterSeal />

        {/* Minimal symmetrical footer */}
        <footer className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js and
            Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.socials.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center px-2 hover:text-[var(--primary)] transition-colors"
            >
              Source on GitHub
            </a>
            <a
              href="#home"
              className="min-h-[44px] inline-flex items-center px-2 hover:text-[var(--primary)] transition-colors"
            >
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
