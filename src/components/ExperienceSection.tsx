import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, SectionHeading } from './ui';

interface Stop {
  year: string;
  title: string;
  org: string;
  description: string;
  link?: [label: string, url: string];
}

const journey: Stop[] = [
  {
    year: 'Jul–Aug 2026',
    title: 'Java Full Stack Intern',
    org: 'Adyapan',
    description:
      'Built an Employee Management System (CRUD) in a 45-day project using Java, Spring Boot, Spring Data JPA, Hibernate, Thymeleaf and MySQL, with JPA entity relationships, bean validation, global exception handling and a Bootstrap UI.',
    link: ['Live demo', 'https://employee-management-system-yuzi.onrender.com/'],
  },
  {
    year: 'May–Jun 2026',
    title: 'Java Intern',
    org: 'Adyapan',
    description:
      'Developed a console-based Retail Store and Order Management System in Java covering billing, payments and reports, applying OOP with interfaces, polymorphism, enums, Collections and custom exceptions.',
  },
  {
    year: 'Jun 2026',
    title: 'Midas Core — Kafka microservice',
    org: 'JPMorgan Chase Software Engineering Simulation (Forage)',
    description:
      'Built a Spring Boot microservice consuming and deserializing high-volume transaction messages via Apache Kafka, with JPA/H2 persistence and a REST balance-query endpoint.',
    link: ['View on GitHub', 'https://github.com/Rahul-web01/midas-core'],
  },
  {
    year: '2023 – 2027',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Babu Banarasi Das University, Lucknow',
    description:
      'Building a strong foundation in data structures, algorithms and object-oriented programming, with hands-on backend engineering across Java, Spring Boot and SQL.',
  },
  {
    year: '2017 – 2019',
    title: 'Class XII (Science — PCM)',
    org: 'Lucknow Public School and Colleges, CBSE',
    description: 'Physics, Chemistry and Mathematics — the analytical groundwork for a career in software engineering.',
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 90%'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section id="experience">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="04 / Experience" title="Experience &" accent="milestones." />

        <div ref={ref} className="relative">
          <div className="absolute bottom-8 left-[19px] top-4 w-px bg-steel/20 md:left-[140px]" />
          <motion.div
            style={{ height }}
            className="absolute left-[19px] top-4 w-[2px] bg-gradient-to-b from-accent to-steel/10 shadow-[0_0_10px_#3b82f6] md:left-[140px]"
          />

          <div className="space-y-12">
            {journey.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                className="group relative flex items-start"
              >
                <div className="hidden w-[140px] shrink-0 pr-8 pt-0.5 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-steel transition-colors group-hover:text-accent md:block">
                  {s.year}
                </div>
                <div className="absolute left-[19px] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-steel bg-[#0d1526] transition-colors group-hover:border-accent group-hover:bg-accent md:left-[140px]" />

                <div className="ml-14 md:ml-12">
                  <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent md:hidden">{s.year}</div>
                  <h3 className="mb-1 font-display text-3xl uppercase leading-none tracking-wide text-white transition-colors group-hover:text-frost sm:text-4xl">
                    {s.title}
                  </h3>
                  <span className="label mb-2 block font-medium">{s.org}</span>
                  <p className="max-w-lg text-[13px] font-light leading-[1.7] text-muted">{s.description}</p>
                  {s.link && (
                    <a
                      href={s.link[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:text-frost"
                    >
                      {s.link[0]} ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
