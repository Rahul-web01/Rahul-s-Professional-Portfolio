import { Section, SectionHeading } from './ui';

interface Project {
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  tech: string[];
  metrics: [label: string, value: string][];
}

const projects: Project[] = [
  {
    title: 'JobPilot',
    category: 'Automation / AI job-search assistant',
    description:
      'Free, private job-search assistant that runs on your own machine. Pulls openings from Greenhouse, Lever and Remotive, scores each one 0–100 against your skills, titles and locations, and uses a local LLM (Ollama) to tailor a resume summary and cover letter as PDFs. Playwright auto-fills real application forms but never submits, and an HR outreach module finds published hiring emails, drafts a note and sends it from your Gmail with follow-up reminders.',
    githubUrl: 'https://github.com/Rahul-web01/job-pilot',
    liveUrl: 'https://github.com/Rahul-web01/job-pilot#demo',
    liveLabel: 'See demo',
    tech: ['Java 21', 'Spring Boot', 'H2', 'Thymeleaf', 'Playwright', 'Ollama (local LLM)', 'PDFBox', 'Gmail SMTP'],
    metrics: [
      ['Job sources', 'Greenhouse · Lever · Remotive'],
      ['Matching', '0–100 fit score'],
      ['Privacy', '100% local, no API keys'],
    ],
  },
  {
    title: 'Midas Core',
    category: 'Microservices / Fintech',
    description:
      'Kafka-based transaction-processing microservice built during the JPMorgan Chase Software Engineering Job Simulation (Forage). Consumes and deserializes high-volume transaction messages, models relational entities for validation and balance updates, and exposes a JSON balance-query endpoint via a REST controller.',
    githubUrl: 'https://github.com/Rahul-web01/midas-core',
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Spring Data JPA', 'H2', 'RestTemplate', 'JUnit'],
    metrics: [
      ['Messaging', 'Apache Kafka'],
      ['Persistence', 'Spring Data JPA / H2'],
      ['Integration', 'REST incentive API'],
    ],
  },
  {
    title: 'ScholarSpace',
    category: 'Full-stack / Ed-tech',
    description:
      'Academic resource management platform with a scalable multi-role REST API backend for admins, faculty and students. Designed a normalized MySQL schema in 3NF and boosted high-frequency query performance by 40%+ through indexing and optimized joins, backed by role-based access control.',
    githubUrl: 'https://github.com/Rahul-web01/Scholarspace-main',
    liveUrl: 'https://scholarspace-main.vercel.app/',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'RBAC', 'Query optimization'],
    metrics: [
      ['Users', '500+ concurrent'],
      ['Schema', 'Normalized MySQL (3NF)'],
      ['Performance', '+40% query speed'],
    ],
  },
  {
    title: 'Employee Management System',
    category: 'Full-stack / Enterprise CRUD',
    description:
      'Employee record management application built during a 45-day Java Full Stack internship at Adyapan. Models employee data with JPA entities and foreign-key relationships in MySQL, enforces input integrity with bean validation and global exception handling, and serves a Bootstrap UI through Thymeleaf.',
    githubUrl: 'https://github.com/Rahul-web01/Employee-Management-System',
    liveUrl: 'https://employee-management-system-yuzi.onrender.com/',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Thymeleaf', 'MySQL', 'Bootstrap'],
    metrics: [
      ['Build', '45-day project'],
      ['Persistence', 'Spring Data JPA / MySQL'],
      ['Reliability', 'Validation + global errors'],
    ],
  },
  {
    title: 'Real-Time Currency Exchange API',
    category: 'Backend / API integration',
    description:
      'Java backend integrating third-party exchange-rate APIs for real-time multi-currency conversion. Implements fault-tolerant JSON parsing with structured exception handling and retry logic for reliable API communication under unstable network conditions.',
    githubUrl: 'https://github.com/Rahul-web01/Currency-Exchange-App',
    liveUrl: 'https://currency-exchange-dackf2w6x-rahuls-projects-98687e81.vercel.app/',
    tech: ['Java', 'REST API integration', 'JSON parsing', 'Exception handling'],
    metrics: [
      ['Integration', 'Third-party FX API'],
      ['Reliability', 'Retry + fault tolerance'],
      ['Format', 'JSON'],
    ],
  },
];

export function ProjectsSection() {
  return (
    <Section id="work">
      <SectionHeading eyebrow="02 / Featured work" title="Selected works." accent="Engineered value.">
        Backend systems I've designed and shipped — from Kafka microservices to multi-role REST platforms.
      </SectionHeading>

      {/* On large screens the cards stick and stack on top of each other as you scroll (pure CSS). */}
      <div className="space-y-8">
        {projects.map((p, i) => (
          <article
            key={p.title}
            style={{ top: `calc(6rem + ${i * 1.5}rem)` }}
            className="card group overflow-hidden p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.9)] sm:p-12 lg:sticky"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
            <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-9xl leading-none text-[#ead8c7]/5">
              0{i + 1}
            </span>

            <div className="relative grid gap-8 lg:grid-cols-12">
              <div className="flex flex-col lg:col-span-7">
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.25em] text-muted">
                  <span className="font-bold text-gold">0{i + 1} //</span> {p.category}
                </p>
                <h3 className="mb-4 font-display text-4xl uppercase leading-[0.9] text-white transition-colors group-hover:text-cream sm:text-5xl lg:text-6xl">
                  {p.title}
                </h3>
                <p className="mb-8 max-w-2xl text-sm font-light leading-[1.85] text-[#bdb0a4]">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-bronze/25 pt-6">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5 lg:border-l lg:border-bronze/25 lg:pl-8">
                <span className="label mb-1 font-mono">// Key metrics</span>
                {p.metrics.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 border border-bronze/25 bg-[#050403] p-3.5 font-mono">
                    <span className="text-[10px] uppercase text-muted">{label}</span>
                    <span className="text-right text-[11px] font-medium text-cream">{value}</span>
                  </div>
                ))}
                <div className="mt-auto grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-1">
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                    View on GitHub ↗
                  </a>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                      {p.liveLabel ?? 'Live demo'} ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
