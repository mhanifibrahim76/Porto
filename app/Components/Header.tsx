"use client";

import React, { useEffect, useState } from "react";
import { House, User, Briefcase, FolderGit2, Mail } from "lucide-react";

const menus = [
  { id: "home", name: "Home", icon: House },
  { id: "about", name: "About", icon: User },
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "projects", name: "Work", icon: FolderGit2 },
  { id: "contact", name: "Contact", icon: Mail },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    menus.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -45% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Desktop floating obsidian-glass rail (sole glassmorphic surface per R-10) */}
      <aside
        aria-label="Primary navigation"
        className="no-print hidden lg:block fixed left-5 top-1/2 -translate-y-1/2 z-40"
      >
        <div className="group bg-[var(--surface)]/85 backdrop-blur-md border border-[var(--border-subtle)] rounded-2xl p-2 transition-all duration-300 w-[62px] hover:w-44 focus-within:w-44 overflow-hidden shadow-xl">
          <nav className="flex flex-col gap-1.5">
            {menus.map(({ id, name, icon: Icon }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3.5 min-h-[44px] px-3 rounded-xl transition-colors duration-200 ${
                    isActive
                      ? "bg-[var(--primary)] text-[#0A0A09] font-semibold"
                      : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                  }`}
                >
                  <Icon size={19} className="shrink-0" />
                  <span className="text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
                    {name}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile and tablet compact bottom navigation */}
      <nav
        aria-label="Mobile navigation"
        className="no-print lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-5 gap-1 bg-[var(--surface)]/92 backdrop-blur-md border border-[var(--border-control)] rounded-2xl p-1.5 shadow-2xl">
          {menus.map(({ id, name, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 min-h-[48px] px-1 rounded-xl text-[11px] font-medium transition-colors ${
                  isActive
                    ? "bg-[var(--primary)] text-[#0A0A09] font-semibold"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                <Icon size={17} />
                <span>{name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
