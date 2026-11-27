import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/philosopher/400.css";
import "@fontsource/philosopher/400-italic.css";
import "@fontsource/philosopher/700.css";
import "./globals.css";
import { profile } from "./data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline} & UI/UX Designer`,
  description:
    "Portfolio of Muhammad Hanif Ibrahim, a Frontend Engineer building accessible, responsive web applications with Next.js, React, TypeScript, and Figma.",
  keywords: [
    "Muhammad Hanif Ibrahim",
    "Frontend Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX Designer",
    "Portfolio",
  ],
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description:
      "Frontend Engineer specializing in Next.js, React, TypeScript, and UI/UX design craft.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.headline}`,
    description:
      "Frontend Engineer building responsive web applications with Next.js, React, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth scroll-pb-28 h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)]/35 selection:text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
