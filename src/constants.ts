import { 
  Code2, 
  Database, 
  Cloud, 
  Settings, 
  Bot, 
  Wrench, 
  Layout, 
  Layers 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Anil Ram",
  headline: "Platform Integration Engineer | Full Stack Architect | AI Workflow Builder",
  location: "Hyderabad, Telangana, India",
  email: "anilram295@gmail.com",
  phone: "+91 8019984199",
  linkedin: "https://www.linkedin.com/in/anilram-ls/",
  github: "https://github.com/anilram",
  intro: "I build enterprise platforms, integration-heavy applications, and cloud-enabled solutions across Java, Spring, Angular, Salesforce APIs, AWS, and modern AI-assisted workflows.",
  about: "Anil Ram is a Full Stack Architect with 14+ years of experience building enterprise systems from end to end. His work spans full stack application development, Salesforce metadata and data integrations, DevOps workflow enablement, backup and recovery products, shared authentication services, and AI-assisted internal tooling. He enjoys solving complex platform problems involving architecture, integration, usability, scalability, and engineering productivity."
};

export const SKILLS = [
  {
    category: "Backend",
    icon: Code2,
    items: ["Java", "Spring", "Spring Cloud", "Struts", "REST APIs"]
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["Angular", "TypeScript", "JavaScript", "jQuery", "HTML", "CSS"]
  },
  {
    category: "Platform & Architecture",
    icon: Layers,
    items: ["Microservices", "API design", "HLD", "LLD", "Integration Architecture"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "DynamoDB", "MongoDB"]
  },
  {
    category: "Cloud & Data",
    icon: Cloud,
    items: ["AWS EC2", "S3", "Athena", "Glue", "Apache Drill"]
  },
  {
    category: "Salesforce & DevOps",
    icon: Settings,
    items: ["Salesforce Metadata API", "Data API", "Bulk API", "SF CLI", "Git API Integrations"]
  },
  {
    category: "AI & Workflow Automation",
    icon: Bot,
    items: ["LLM Integrations", "MCP Setups", "Agentic Workflows", "Context-based Masking", "PII Identification"]
  },
  {
    category: "Tools & Integrations",
    icon: Wrench,
    items: ["AccelQ", "Provar", "CodeScan", "Kafka", "Akka"]
  }
];

export const EXPERIENCE = [
  {
    company: "AutoRABIT",
    role: "Full Stack Architect",
    period: "Dec 2018 – Present",
    highlights: [
      "Built platform capabilities across Metadata Aware, Backup / Recovery Solutions, and Common Login Platform",
      "Designed DevOps workflows using Salesforce Metadata APIs, Git APIs, and SF CLI",
      "Built backup/recovery solutions using Salesforce Data APIs, Bulk APIs, S3, Athena, and Apache Drill",
      "Integrated AccelQ, Provar, and CodeScan",
      "Served as Technical Product Owner for Common Login Platform",
      "Worked across 3 teams and 30 members",
      "Redesigned DynamoDB and MySQL access layer",
      "Reduced unnecessary Salesforce API calls using incremental backup strategies",
      "Implemented LLM-based features for commit comments, context masking, Jira/MCP review workflows, and likely PII field identification"
    ]
  },
  {
    company: "HighRadius Technologies",
    role: "Software Engineer II",
    period: "Aug 2016 – Dec 2018",
    highlights: [
      "Worked on electronic invoice presentment and payment workflows",
      "Built multilingual XML/PDF invoice generation",
      "Developed CSV/Excel reporting frameworks",
      "Improved processing efficiency through parallel invoicing and optimized CSV merge logic",
      "Worked with Java, Struts, Spring, ExtJS, MySQL, and AWS"
    ]
  },
  {
    company: "Qison Software Pvt. Ltd.",
    role: "Software Engineer",
    period: "Jul 2013 – Jul 2016",
    highlights: [
      "Developed Qison Social Platform from scratch",
      "Built social and analytics-driven web applications",
      "Used MongoDB, Kafka, Akka, jQuery, REST APIs, HTML5, CSS",
      "Built analytics ingestion flows for gaming and social applications",
      "Improved authorization and framework-level performance"
    ]
  },
  {
    company: "Efftronics Systems Pvt. Ltd.",
    role: "Intern, R&D",
    period: "Jun 2012 – Dec 2012",
    highlights: [
      "Worked on SMIU project in Embedded C",
      "Contributed to circuit design and test jig development"
    ]
  }
];

export const PROJECTS = [
  {
    title: "Metadata Aware / DevOps Platform",
    summary: "Enterprise-grade DevOps platform capabilities for Salesforce ecosystem.",
    tech: ["Salesforce Metadata API", "Git API", "SF CLI", "Java", "Spring"],
    image: "https://picsum.photos/seed/devops/800/600"
  },
  {
    title: "Backup / Recovery Solutions",
    summary: "Scalable backup and recovery system for Salesforce data and metadata.",
    tech: ["Salesforce Data API", "Bulk API", "S3", "Athena", "Apache Drill"],
    image: "https://picsum.photos/seed/backup/800/600"
  },
  {
    title: "Common Login Platform",
    summary: "Shared authentication and authorization service for platform-wide access.",
    tech: ["Java", "Spring Security", "OAuth2", "Microservices"],
    image: "https://picsum.photos/seed/login/800/600"
  },
  {
    title: "EIPP-Kachingg",
    summary: "Electronic Invoice Presentment and Payment system with advanced reporting.",
    tech: ["Java", "Struts", "Spring", "ExtJS", "MySQL", "AWS"],
    image: "https://picsum.photos/seed/invoice/800/600"
  },
  {
    title: "Qison Social Platform",
    summary: "Social and analytics-driven web application built from the ground up.",
    tech: ["MongoDB", "Kafka", "Akka", "jQuery", "REST APIs"],
    image: "https://picsum.photos/seed/social/800/600"
  },
  {
    title: "P4RC",
    summary: "Analytics ingestion and engagement platform for gaming applications.",
    tech: ["Java", "Redis", "Analytics", "API Design"],
    image: "https://picsum.photos/seed/gaming/800/600"
  }
];
