import type { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    category: "Public Data Platform",
    title: "Data EF Open Data Portal",
    description:
      "A public platform for discovering trusted Cambodian economic and financial datasets, collections, data sources, downloads, and real-time APIs.",
    image: "/projects/data-ef-cover.svg",
    imageAlt: "Illustrated Data EF open data portal interface",
    technologies: [
      "Next.js",
      "FastAPI",
      "REST APIs",
      "Docker",
      "GitHub Actions",
    ],
    year: "2025–Present",
    liveUrl: "https://data.mef.gov.kh/",
    liveLabel: "Visit Platform",
    note: "Public project · source code is private",
  },
  {
    id: 2,
    category: "Business Operations",
    title: "Network Stock Management System",
    description:
      "An internal inventory platform for managing network equipment, availability, storage, vendors, transactions, users, and permissions.",
    image:
      "https://raw.githubusercontent.com/Sopheaktraleng/devops_level_1/main/src/components/assets/stocksystem.png",
    imageAlt: "Network stock management inventory dashboard",
    technologies: ["Laravel", "Filament", "MySQL", "Bootstrap 5"],
    year: "2025",
    liveUrl: "https://nss.today.com.kh/",
    liveLabel: "Open System",
    note: "Internal business system · source code is private",
  },
  {
    id: 3,
    category: "Serverless Product",
    title: "Cashflow Telegram Bot",
    description:
      "A lightweight expense tracker with quick entry, transaction history, daily and monthly summaries, and category breakdowns inside Telegram.",
    image:
      "https://raw.githubusercontent.com/Sopheaktraleng/devops_level_1/main/src/components/assets/telegrambot.png",
    imageAlt: "Telegram expense-tracking bot conversation",
    technologies: [
      "JavaScript",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Telegram API",
      "Wrangler",
    ],
    year: "2025–2026",
    liveUrl: "https://t.me/broke_bill_bot",
    liveLabel: "Open Bot",
    note: "Serverless webhook architecture",
  },
  {
    id: 4,
    category: "DevOps Capstone",
    title: "GitOps Kubernetes Capstone",
    description:
      "An end-to-end training project connecting configuration management, CI/CD, Helm-based GitOps, Kubernetes, AWS, and operational monitoring.",
    image: "/projects/gitops-capstone.svg",
    imageAlt: "GitOps delivery pipeline architecture illustration",
    technologies: [
      "Kubernetes",
      "Argo CD",
      "Helm",
      "Ansible",
      "GitLab CI/CD",
      "AWS",
    ],
    year: "2025",
    note: "Training capstone · temporary infrastructure",
  },
];
