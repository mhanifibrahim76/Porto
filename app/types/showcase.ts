export interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  featured?: boolean;
  tags?: string[];
  category?: "web" | "mobile" | "design";
  liveUrl?: string;
  repoUrl?: string;
  designUrl?: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "work" | "organization" | "education";
  desc: string;
  highlights: string[];
  image: string;
  tags?: string[];
}
