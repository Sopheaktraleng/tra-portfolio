import type { ProjectItem } from "@/types";
import type { Language } from "@/i18n/messages";

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

const khmerProjectCopy: Record<number, Partial<ProjectItem>> = {
  1: {
    category: "វេទិកាទិន្នន័យសាធារណៈ",
    description: "វេទិកាសាធារណៈសម្រាប់ស្វែងរកសំណុំទិន្នន័យសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុកម្ពុជាដែលអាចទុកចិត្តបាន ប្រភពទិន្នន័យ ការទាញយក និង API ជាក់ស្តែង។",
    liveLabel: "ចូលមើលវេទិកា",
    note: "គម្រោងសាធារណៈ · កូដប្រភពមិនបើកជាសាធារណៈ",
    imageAlt: "រូបភាពវេទិកាទិន្នន័យសាធារណៈ Data EF",
  },
  2: {
    category: "ប្រតិបត្តិការអាជីវកម្ម",
    description: "ប្រព័ន្ធស្តុកផ្ទៃក្នុងសម្រាប់គ្រប់គ្រងឧបករណ៍បណ្តាញ បរិមាណស្តុក ទីតាំងផ្ទុក អ្នកផ្គត់ផ្គង់ ប្រតិបត្តិការ អ្នកប្រើប្រាស់ និងសិទ្ធិប្រើប្រាស់។",
    liveLabel: "បើកប្រព័ន្ធ",
    note: "ប្រព័ន្ធអាជីវកម្មផ្ទៃក្នុង · កូដប្រភពមិនបើកជាសាធារណៈ",
    imageAlt: "ផ្ទាំងគ្រប់គ្រងស្តុកឧបករណ៍បណ្តាញ",
  },
  3: {
    category: "ផលិតផល Serverless",
    description: "កម្មវិធីកត់ត្រាចំណាយដ៏សាមញ្ញក្នុង Telegram ដែលអាចបញ្ចូលទិន្នន័យបានលឿន មើលប្រវត្តិប្រតិបត្តិការ សង្ខេបប្រចាំថ្ងៃ និងប្រចាំខែ ព្រមទាំងបែងចែកតាមប្រភេទ។",
    liveLabel: "បើក Bot",
    note: "ស្ថាបត្យកម្ម Serverless Webhook",
    imageAlt: "ការសន្ទនាជាមួយ Telegram Bot សម្រាប់កត់ត្រាចំណាយ",
  },
  4: {
    category: "គម្រោងបញ្ចប់ DevOps",
    description: "គម្រោងបណ្តុះបណ្តាលពេញលេញដែលភ្ជាប់ការគ្រប់គ្រង Configuration, CI/CD, GitOps ជាមួយ Helm, Kubernetes, AWS និងការត្រួតពិនិត្យប្រតិបត្តិការ។",
    note: "គម្រោងបណ្តុះបណ្តាល · ហេដ្ឋារចនាសម្ព័ន្ធបណ្តោះអាសន្ន",
    imageAlt: "រូបភាពស្ថាបត្យកម្ម GitOps Delivery Pipeline",
  },
};

export const getProjectsData = (language: Language): ProjectItem[] =>
  language === "km"
    ? projectsData.map((project) => ({ ...project, ...khmerProjectCopy[project.id] }))
    : projectsData;
