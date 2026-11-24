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
    title: 'Employee Management System',
    category: 'Full-stack / Secured CRUD',
    description:
      'Employee and department management app built during a Java Full Stack internship at Adyapan, with a layered Controller → Service → Repository design. Spring Security login with Admin, HR and Viewer roles, BCrypt passwords, CSRF protection, bean validation and a global exception handler. Tested with JUnit 5, Mockito and MockMvc, and deployed as a Docker image on Render with a TiDB Cloud (MySQL) database.',
    githubUrl: 'https://github.com/Rahul-web01/Employee-Management-System',
    liveUrl: 'https://employee-management-system-yuzi.onrender.com/',
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Thymeleaf', 'MySQL', 'Docker'],
    metrics: [
      ['Access control', '3 roles (Admin · HR · Viewer)'],
      ['Testing', 'JUnit 5 · Mockito · MockMvc'],
      ['Deployment', 'Docker on Render + TiDB'],
    ],
  },
  {
    title: 'ScholarSpace',
    category: 'Search / Ed-tech',
    description:
      'Free study-material hub for university students: notes, previous-year papers and practice sets organised by college, course and year. Its "Ask Notes" feature is a Python serverless search API with an SQLite FTS5 index and BM25 ranking that searches inside every PDF, Word and PowerPoint file, including OCR\'d handwritten pages. Python tools crawl Google Drive to build the catalogue, and student uploads are moderated.',
    githubUrl: 'https://github.com/Rahul-web01/Scholarspace-main',
    liveUrl: 'https://scholarspace-main.vercel.app/',
    tech: ['Python', 'SQLite FTS5', 'BM25 search', 'JavaScript', 'Google Drive', 'Vercel'],
    metrics: [
      ['Library', '750+ files · 90 subjects'],
      ['Search', 'Full-text, BM25 ranked'],
      ['Extras', 'SGPA calculator · uploads'],
    ],
  },
  {
    title: 'Live Currency Converter',
    category: 'Frontend / API integration',
    description:
      'Currency converter for 160+ currencies at live market rates that refresh every 60 seconds, with a 30-day trend chart (percent change, low and high) from ECB data. Cancels stale requests, retries automatically on failure, remembers your last pair, and is built to be accessible with labelled inputs, live-region announcements and reduced-motion support.',
    githubUrl: 'https://github.com/Rahul-web01/Currency-Exchange-App',
    liveUrl: 'https://currency-exchange-dackf2w6x-rahuls-projects-98687e81.vercel.app/',
    tech: ['React', 'Vite', 'Tailwind CSS', 'REST APIs', 'SVG charts'],
    metrics: [
      ['Coverage', '160+ currencies'],
      ['Freshness', 'Live, every 60 s'],
      ['History', '30-day trend chart'],
    ],
  },
];

export function ProjectsSection() {
  return (
    <Section id="work">
      <SectionHeading eyebrow="02 / Featured work" title="Selected works." accent="Engineered value.">
        Products I've designed and shipped, from Kafka microservices and secured Spring apps to local-AI automation.
      </SectionHeading>

      {/* On large screens the cards stick and stack on top of each other as you scroll (pure CSS). */}
      <div className="space-y-8">
        {projects.map((p, i) => (
          <article
            key={p.title}
            style={{ top: `calc(6rem + ${i * 1.5}rem)` }}
            className="card group overflow-hidden p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.9)] sm:p-12 lg:sticky"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
            <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-9xl leading-none text-[#dbe4f0]/5">
              0{i + 1}
            </span>

            <div className="relative grid gap-8 lg:grid-cols-12">
              <div className="flex flex-col lg:col-span-7">
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.25em] text-muted">
                  <span className="font-bold text-accent">0{i + 1} //</span> {p.category}
                </p>
                <h3 className="mb-4 font-display text-4xl uppercase leading-[0.9] text-white transition-colors group-hover:text-frost sm:text-5xl lg:text-6xl">
                  {p.title}
                </h3>
                <p className="mb-8 max-w-2xl text-sm font-light leading-[1.85] text-[#aab6c6]">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-steel/25 pt-6">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5 lg:border-l lg:border-steel/25 lg:pl-8">
                <span className="label mb-1 font-mono">// Key metrics</span>
                {p.metrics.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 border border-steel/25 bg-[#04070d] p-3.5 font-mono">
                    <span className="text-[10px] uppercase text-muted">{label}</span>
                    <span className="text-right text-[11px] font-medium text-frost">{value}</span>
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
