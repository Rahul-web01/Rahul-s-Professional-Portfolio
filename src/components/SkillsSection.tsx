import { motion } from 'framer-motion';
import { fadeUp, stagger } from './motion';
import { Section, SectionHeading } from './ui';

const categories = [
  {
    title: 'Backend & frameworks',
    badge: 'Core pillar',
    stat: 'REST API focus',
    span: 'lg:col-span-7',
    items: ['Java', 'SQL', 'JavaScript', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'JDBC'],
    description:
      'Building resilient RESTful APIs and backend services in Java on the Spring ecosystem, with ORM-based persistence via Hibernate and JDBC.',
  },
  {
    title: 'Messaging & architecture',
    badge: 'Event-driven',
    stat: 'Kafka-powered',
    span: 'lg:col-span-5',
    items: ['Apache Kafka', 'Microservices', 'Event-driven architecture', 'System design'],
    description: 'Designing event-driven microservices with Apache Kafka for high-throughput, decoupled transaction processing.',
  },
  {
    title: 'Data platforms',
    badge: 'Persistence',
    stat: 'SQL certified',
    span: 'lg:col-span-5',
    items: ['MySQL', 'TiDB Cloud', 'H2', 'SQLite FTS5', 'Indexing'],
    description: 'Relational schemas with JPA entity relationships, cloud MySQL over TLS, and full-text search indexes with BM25 ranking.',
  },
  {
    title: 'Cloud, DevOps & tooling',
    badge: 'Delivery',
    stat: 'AWS in progress',
    span: 'lg:col-span-7',
    items: ['AWS', 'Git', 'GitHub', 'Maven', 'CI/CD', 'Linux', 'JUnit', 'Postman', 'IntelliJ IDEA', 'Agile/Scrum'],
    description: 'Git-based CI/CD workflows and Agile delivery, backed by JUnit testing and Postman-driven API validation.',
  },
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="03 / Tech stack" title="Skills &" accent="toolkit." />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 lg:grid-cols-12"
      >
        {categories.map((c) => (
          <motion.div key={c.title} variants={fadeUp} className={`card p-8 sm:p-9 ${c.span}`}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">{c.badge}</span>
              <span className="border border-bronze/40 bg-[#17130f] px-2.5 py-0.5 font-mono text-[10px] uppercase text-[#c4b5a5]">
                {c.stat}
              </span>
            </div>
            <h3 className="mb-3 font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">{c.title}</h3>
            <p className="mb-7 max-w-xl text-sm font-light leading-relaxed text-muted">{c.description}</p>
            <div className="flex flex-wrap gap-2 border-t border-bronze/20 pt-4">
              {c.items.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
