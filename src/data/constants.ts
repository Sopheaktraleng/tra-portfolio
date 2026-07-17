import type {
  SkillCategory,
  EducationItem,
  ExperienceItem,
} from "@/types";

export const SkillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Vue Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Nuxt Js",
        image: "https://nuxt.com/assets/design-kit/icon-green.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Nest Js",
        image:
          "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
      },
      {
        name: "Express Js",
        image:
          "https://www.manektech.com/storage/developer/1646733543.webp",
      },
      {
        name: "GraphQL",
        image:
          "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "Supabase",
        image:
          "https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png",
      },
      {
        name: "Laravel",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "FastAPI",
        image:
          "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAg1AAZAA0",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        image:
          "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Vercel",
        image:
          "https://pbs.twimg.com/profile_images/1767351110228918272/3Pndc5OT_400x400.png",
      },
      {
        name: "Nginx",
        image:
          "https://www.myqnap.org/wp-content/uploads/nginx-3628948-3030173-1.png",
      },
      {
        name: "Ansible",
        image:
          "https://www.sorint.com/wp-content/uploads/2021/11/AnsibleLogo_workshop.jpg",
      },
      {
        name: "Jenkins",
        image:
          "https://www.jenkins.io/images/logos/jenkins/jenkins.png",
      },
      {
        name: "Kubernetes",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Argo CD",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5e0nHTSWCOVVCjzixLUAuQHevtLNLSEzYg&s",
      },
      {
        name: "Prometheus",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPyUcx9Rqcv7aKhASbNcFHRARX3wsJU0xtg&s",
      },
      {
        name: "Grafana",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwod0EgYh6ixNJuzJAZt413WNM0SX8RrUJsg&s",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
      },
      {
        name: "VsCode",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      {
        name: "Notion",
        image:
          "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg",
      },
      {
        name: "Netlify",
        image:
          "https://jeancochrane.com/static/images/blog/netlify-identity-dealbreakers/netlify-logo.png",
      },
      {
        name: "Postman",
        image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
    ],
  },
];

export const EducationData: EducationItem[] = [
  {
    id: 0,
    img: "https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/sunrise.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvc3VucmlzZS5qcGciLCJpYXQiOjE3NjIxNTI5NzUsImV4cCI6MTc5MzY4ODk3NX0.8Zq_CKYPa-rqrOcfxx22V362i8o7H0UDv02Jd7a-9C4",
    school: "Sunrise Institute",
    date: "Sep 2025 - Oct 2025",
    degree: "DevOps Advance",
    description:
      "Advanced course at Sunrise Institute covering Configuration Management (Ansible), Kubernetes, GitOps (Argo CD & Helm), Log Management, and Infrastructure as Code (IaC) on AWS.",
    highlights: [
      "Ansible Configuration Management: Playbooks, Roles, Vault, and configuration automation.",
      "Kubernetes Container Orchestration: Deployments, Services, Ingress, and Kubernetes Dashboard.",
      "GitOps with Argo CD & Helm: Multi-master Kubernetes Cluster setup with Gitlab.",
      "AWS Infrastructure as Code (IaC): AWS infrastructure provisioning and microservices deployment.",
      "Log Management & Monitoring: Log collection tools and reliability practices.",
      "Capstone Project: End-to-end CI/CD project pipelines integrated with modern DevOps toolchains.",
    ],
    certificate: {
      url: "https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/devops-adv.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZGV2b3BzLWFkdi5wZGYiLCJpYXQiOjE3NzEzMTQ1MTksImV4cCI6MTgwMjg1MDUxOX0.NlSAuqu2ylWWHlpwTVFOPV1I2gQazutPWgBcEv-1-Og",
      label: "View Certificate",
    },
  },
  {
    id: 1,
    img: "https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/sunrise.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvc3VucmlzZS5qcGciLCJpYXQiOjE3NjIxNTM4OTMsImV4cCI6MTc5MzY4OTg5M30.K8aFiiOt5LjGZp45IDGQfpmYVr4ixq61gz_yImZO-0A",
    school: "Sunrise Institute",
    date: "May 2025 - Jul 2025",
    degree: "DevOps Foundation",
    description:
      "I am studying DevOps Academy at Sunrise Institute, specializing in cloud technologies, CI/CD pipelines, AWS, and Docker, with a strong focus on practical implementation and industry-relevant skills.",
    highlights: [
      "Proficient in Git, Bash scripting, and CI/CD practices.",
      "Expertise in Docker, Cluster management, Kubernetes, and container orchestration.",
      "AWS & Networking – Computer Networks, Cloud Computing, and DevOps practices.",
      "CI/CD Jenkins – Continuous Integration and Deployment using Jenkins.",
    ],
    certificate: {
      url: "https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/devops-fund.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZGV2b3BzLWZ1bmQucGRmIiwiaWF0IjoxNzcxMzE0NDE2LCJleHAiOjE4MDI4NTA0MTZ9.-Rbuwj_6mii-wvfnBMgrRCML1Cg4zWL_xnFys65GYUw",
      label: "View Certificate",
    },
  },
  {
    id: 2,
    img: "/icons/rupp_logo.png",
    school: "Royal University of Phnom Penh",
    date: "Mar 2019 - Jun 2024",
    degree: "Computer Science",
    description:
      "I studied Computer Science at RUPP, focusing on software development, AI, cybersecurity, and cloud computing.",
    highlights: [
      "Programming & Software Development – JavaScript, Python, C++, Web & Mobile Development",
      "Data & Algorithms – Data Structures, Algorithms, Database Management (SQL, NoSQL)",
      "Networking & Security – Computer Networks, Cybersecurity, Ethical Hacking",
      "AI & Cloud Computing – Machine Learning, Cloud Services (AWS, Docker, Kubernetes)",
      "Project Development – Agile methodologies, IT Project Management, Final Year Capstone",
    ],
  },
  {
    id: 3,
    img: "https://tfdevs.com/_nuxt/tfd_logo.Qnfrg85Z.jpeg",
    school: "TFDev",
    date: "Apr 2024 - Sep 2024",
    degree: "Nest Js API Development",
    description:
      "I studied backend development with NestJS, focusing on building scalable and high-performance APIs using TypeScript.",
    highlights: [
      "NestJS & TypeScript – Modular architecture, Dependency Injection, and best practices.",
      "Database & APIs – PostgreSQL, MongoDB, Prisma ORM, RESTful & GraphQL APIs.",
      "Microservices & Scalability – Event-driven architecture and message queues.",
      "DevOps & Deployment – Docker, CI/CD pipelines, and cloud hosting.",
    ],
  },
  {
    id: 4,
    img: "https://tfdevs.com/_nuxt/tfd_logo.Qnfrg85Z.jpeg",
    school: "TFDev",
    date: "Feb 2024 - Jun 2024",
    degree: "Full Stack Web Development",
    description:
      "I completed an intensive Full-Stack Bootcamp, gaining hands-on experience in modern web development and deployment.",
    highlights: [
      "Frontend Development – HTML, CSS, JavaScript, Vue.js, TailwindCSS for responsive and dynamic UI/UX.",
      "Backend Development – Express.js, Node.js, and MongoDB for building scalable and efficient APIs.",
      "Database & API Management – Designing databases, handling CRUD operations, and integrating RESTful APIs.",
      "DevOps & Deployment – Docker for containerization, CI/CD pipelines, and cloud deployment strategies.",
    ],
  },
];

export const ExperienceData: ExperienceItem[] = [
  {
    id: 0,
    image:
      "https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/gdde.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZ2RkZS5qcGVnIiwiaWF0IjoxNzYyMTUzMjg0LCJleHAiOjE3OTM2ODkyODR9.zu_tBXo8AmDkp8vXhjHtWF50qePVLdLa8ULTPyMfC8k",
    role: "Full Stack Developer",
    company: "Ministry of Economy and Finance",
    date: "Oct 2025 - Now",
    description:
      "As a Full-stack Developer in the GDDE department, I design, build, and maintain the official MEF Open Data Portal (Data EF) along with custom internal systems to automate workflows and enhance efficiency.",
    skills: [
      "Open Data Portal – Developed and optimized the Data EF platform to serve public economic, financial, and banking datasets.",
      "Database & APIs – Architected robust database schemas and engineered scalable RESTful APIs to deliver data reliably.",
      "Full-Stack Architecture – Built responsive UI components with Next.js and developed high-performance backend APIs using FastAPI.",
      "DevOps & Deployment – Utilized Docker, GitHub Actions, and Linux to containerize, automate deployments, and ensure system reliability.",
    ],
  },
  {
    id: 1,
    image:
      "https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/today-logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvdG9kYXktbG9nby5wbmciLCJpYXQiOjE3NjIxNTMzNTksImV4cCI6MTc5MzY4OTM1OX0.Dq1uRRt39ikWgMxWyT-RgNJoLs6lc-8y80nb8kzTFng",
    role: "Web Developer",
    company: "TODAY Internet",
    date: "Dec 2024 - Oct 2025",
    description:
      "I worked as a Web Developer, designing and deploying custom internal systems to automate workflows and enhance efficiency. My role involved optimizing system performance, ensuring scalability, and adapting solutions to business needs.",
    skills: [
      "System Development – Designed, built, and deployed internal applications to improve business operations.",
      "Performance Optimization – Enhanced system efficiency to improve user experience and business processes.",
      "Technology Stack – Worked with React, Node.js, Express, Laravel, MySQL, and MongoDB for full-stack development.",
      "DevOps & Deployment – Utilized Docker, GitHub Actions, and Linux to streamline deployments and improve system reliability.",
    ],
  },
];
