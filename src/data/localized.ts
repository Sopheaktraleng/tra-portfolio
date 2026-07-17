import { EducationData, ExperienceData } from "@/data/constants";
import type { EducationItem, ExperienceItem } from "@/types";
import type { Language } from "@/i18n/messages";

const educationKm: Record<number, Partial<EducationItem>> = {
  0: {
    date: "កញ្ញា 2025 - តុលា 2025",
    degree: "DevOps កម្រិតខ្ពស់",
    description: "វគ្គកម្រិតខ្ពស់នៅ Sunrise Institute ដែលគ្របដណ្តប់លើ Configuration Management ជាមួយ Ansible, Kubernetes, GitOps ជាមួយ Argo CD និង Helm, ការគ្រប់គ្រង Log និង Infrastructure as Code លើ AWS។",
    highlights: [
      "គ្រប់គ្រង Configuration ជាមួយ Ansible៖ Playbooks, Roles, Vault និងស្វ័យប្រវត្តិកម្ម។",
      "គ្រប់គ្រង Container ជាមួយ Kubernetes៖ Deployments, Services, Ingress និង Dashboard។",
      "GitOps ជាមួយ Argo CD និង Helm៖ បង្កើត Kubernetes Cluster ប្រភេទ Multi-master ជាមួយ GitLab។",
      "Infrastructure as Code លើ AWS៖ បង្កើតហេដ្ឋារចនាសម្ព័ន្ធ និងដាក់ Microservices ឱ្យដំណើរការ។",
      "ការគ្រប់គ្រង Log និង Monitoring៖ ឧបករណ៍ប្រមូល Log និងការអនុវត្តដើម្បីធានាភាពជឿជាក់។",
      "គម្រោងបញ្ចប់៖ CI/CD Pipeline ពេញលេញជាមួយឧបករណ៍ DevOps ទំនើប។",
    ],
    certificate: { ...EducationData[0].certificate, label: "មើលវិញ្ញាបនបត្រ" } as EducationItem["certificate"],
  },
  1: {
    date: "ឧសភា 2025 - កក្កដា 2025",
    degree: "មូលដ្ឋានគ្រឹះ DevOps",
    description: "វគ្គ DevOps Academy នៅ Sunrise Institute ដែលផ្តោតលើ Cloud, CI/CD Pipeline, AWS និង Docker តាមរយៈការអនុវត្តជាក់ស្តែង។",
    highlights: [
      "ការប្រើ Git, Bash Scripting និងការអនុវត្ត CI/CD។",
      "Docker, ការគ្រប់គ្រង Cluster, Kubernetes និង Container Orchestration។",
      "AWS និងបណ្តាញ៖ Computer Networks, Cloud Computing និងការអនុវត្ត DevOps។",
      "CI/CD ជាមួយ Jenkins៖ Continuous Integration និង Deployment។",
    ],
    certificate: { ...EducationData[1].certificate, label: "មើលវិញ្ញាបនបត្រ" } as EducationItem["certificate"],
  },
  2: {
    school: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
    date: "មីនា 2019 - មិថុនា 2024",
    degree: "វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    description: "បានសិក្សាវិទ្យាសាស្ត្រកុំព្យូទ័រនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ដោយផ្តោតលើការអភិវឌ្ឍកម្មវិធី AI សន្តិសុខសាយប័រ និង Cloud Computing។",
    highlights: [
      "Programming និង Software Development៖ JavaScript, Python, C++, Web និង Mobile Development។",
      "ទិន្នន័យ និង Algorithm៖ Data Structures, Algorithms និង Database Management។",
      "បណ្តាញ និងសន្តិសុខ៖ Computer Networks, Cybersecurity និង Ethical Hacking។",
      "AI និង Cloud Computing៖ Machine Learning, AWS, Docker និង Kubernetes។",
      "ការអភិវឌ្ឍគម្រោង៖ Agile, IT Project Management និងគម្រោងបញ្ចប់ការសិក្សា។",
    ],
  },
  3: {
    date: "មេសា 2024 - កញ្ញា 2024",
    degree: "ការអភិវឌ្ឍ API ជាមួយ NestJS",
    description: "បានសិក្សាការអភិវឌ្ឍ Backend ជាមួយ NestJS ដោយផ្តោតលើការបង្កើត API ដែលអាចពង្រីកបាន និងមានល្បឿនលឿនដោយប្រើ TypeScript។",
    highlights: [
      "NestJS និង TypeScript៖ Modular Architecture, Dependency Injection និងការអនុវត្តល្អៗ។",
      "Database និង API៖ PostgreSQL, MongoDB, Prisma ORM, RESTful និង GraphQL API។",
      "Microservices និង Scalability៖ Event-driven Architecture និង Message Queues។",
      "DevOps និង Deployment៖ Docker, CI/CD Pipeline និង Cloud Hosting។",
    ],
  },
  4: {
    date: "កុម្ភៈ 2024 - មិថុនា 2024",
    degree: "ការអភិវឌ្ឍ Web Full-Stack",
    description: "បានបញ្ចប់វគ្គ Full-Stack Bootcamp ដែលផ្តល់បទពិសោធន៍អនុវត្តលើការអភិវឌ្ឍ Web ទំនើប និងការដាក់ឱ្យដំណើរការ។",
    highlights: [
      "Frontend៖ HTML, CSS, JavaScript, Vue.js និង TailwindCSS សម្រាប់ UI/UX ដែលឆ្លើយតបគ្រប់អេក្រង់។",
      "Backend៖ Express.js, Node.js និង MongoDB សម្រាប់បង្កើត API។",
      "Database និង API៖ រចនា Database, CRUD និងភ្ជាប់ RESTful API។",
      "DevOps និង Deployment៖ Docker, CI/CD Pipeline និងយុទ្ធសាស្ត្រដាក់ឱ្យដំណើរការលើ Cloud។",
    ],
  },
};

const experienceKm: Record<number, Partial<ExperienceItem>> = {
  0: {
    role: "អ្នកអភិវឌ្ឍន៍ Full-Stack",
    company: "ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ",
    date: "តុលា 2025 - បច្ចុប្បន្ន",
    description: "ក្នុងតួនាទីជាអ្នកអភិវឌ្ឍន៍ Full-Stack នៅនាយកដ្ឋាន GDDE ខ្ញុំរចនា បង្កើត និងថែទាំវេទិកាទិន្នន័យបើកទូលាយផ្លូវការរបស់ក្រសួង (Data EF) ព្រមទាំងប្រព័ន្ធផ្ទៃក្នុងសម្រាប់ធ្វើឱ្យលំហូរការងារមានស្វ័យប្រវត្តិកម្ម។",
    skills: [
      "Open Data Portal៖ អភិវឌ្ឍ និងកែលម្អ Data EF ដើម្បីផ្តល់ទិន្នន័យសេដ្ឋកិច្ច ហិរញ្ញវត្ថុ និងធនាគារជាសាធារណៈ។",
      "Database និង API៖ រចនា Database Schema និងបង្កើត RESTful API ដែលអាចពង្រីកបាន។",
      "Full-Stack Architecture៖ បង្កើត UI ជាមួយ Next.js និង Backend API ជាមួយ FastAPI។",
      "DevOps និង Deployment៖ ប្រើ Docker, GitHub Actions និង Linux សម្រាប់ Containerization និងស្វ័យប្រវត្តិកម្ម Deployment។",
    ],
  },
  1: {
    role: "អ្នកអភិវឌ្ឍន៍ Web",
    date: "ធ្នូ 2024 - តុលា 2025",
    description: "ខ្ញុំបានរចនា និងដាក់ឱ្យដំណើរការប្រព័ន្ធផ្ទៃក្នុងដើម្បីធ្វើឱ្យលំហូរការងារមានស្វ័យប្រវត្តិកម្ម បង្កើនប្រសិទ្ធភាព និងកែសម្រួលដំណោះស្រាយតាមតម្រូវការអាជីវកម្ម។",
    skills: [
      "ការអភិវឌ្ឍប្រព័ន្ធ៖ រចនា បង្កើត និងដាក់ឱ្យដំណើរការកម្មវិធីផ្ទៃក្នុងសម្រាប់ប្រតិបត្តិការអាជីវកម្ម។",
      "ការកែលម្អ Performance៖ បង្កើនប្រសិទ្ធភាពប្រព័ន្ធ បទពិសោធន៍អ្នកប្រើ និងដំណើរការអាជីវកម្ម។",
      "បច្ចេកវិទ្យា៖ React, Node.js, Express, Laravel, MySQL និង MongoDB។",
      "DevOps និង Deployment៖ ប្រើ Docker, GitHub Actions និង Linux ដើម្បីសម្រួលការដាក់ឱ្យដំណើរការ។",
    ],
  },
};

export const getEducationData = (language: Language): EducationItem[] =>
  language === "km" ? EducationData.map((item) => ({ ...item, ...educationKm[item.id] })) : EducationData;

export const getExperienceData = (language: Language): ExperienceItem[] =>
  language === "km" ? ExperienceData.map((item) => ({ ...item, ...experienceKm[item.id] })) : ExperienceData;
