import { ExperienceItem } from "../types/showcase";

export const experiences: ExperienceItem[] = [
  {
    id: "propertree-intern",
    role: "Frontend Developer Intern",
    organization: "PROPERTREE GROUP",
    period: "2025",
    type: "work",
    desc: "Contributed to the production real estate listing platform, translating product specifications into responsive, maintainable frontend interfaces.",
    highlights: [
      "Built responsive property listing views and reusable UI components with React and Next.js patterns.",
      "Worked with designers and backend engineers to integrate API endpoints and improve page rendering speed.",
      "Standardized layout spacing and mobile usability across primary property discovery flows.",
    ],
    image: "/experience/Intern_Propertree.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "REST API"],
  },
  {
    id: "komandro-staff",
    role: "Web Development Staff",
    organization: "Komandro Study Group, CCIT FTUI",
    period: "2023 - 2025",
    type: "organization",
    desc: "Served as Web Development Staff building community web applications and supporting peer technical workshops.",
    highlights: [
      "Developed responsive web applications with Next.js, React, and Tailwind CSS for organization initiatives.",
      "Collaborated in student engineering teams using Git workflows and UI/UX design handoffs from Figma.",
    ],
    image: "/experience/Komandro_staff.png",
    tags: ["Next.js", "React", "Git", "Figma"],
  },
  {
    id: "ccit-ftui",
    role: "Graduate of Information Technology",
    organization: "CCIT FTUI (Faculty of Engineering, Universitas Indonesia)",
    period: "2023 - 2025",
    type: "education",
    desc: "Completed IT program centered on software engineering, web and mobile application development, and user-centered interface design.",
    highlights: [
      "Delivered multi-platform web, Flutter mobile, and UI/UX capstone projects.",
      "Competed in national UI/UX design competitions (CITE UP and INVENTION).",
    ],
    image: "/experience/ccit.png",
    tags: ["Software Engineering", "Web & Mobile", "UI/UX"],
  },
];
