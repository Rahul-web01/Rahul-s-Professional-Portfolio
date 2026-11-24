import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ease } from './motion';

/** Fades its children up the first time they scroll into view. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent: string;
  children?: ReactNode;
}

/** Numbered eyebrow + two-line headline (silver line, gold line) used by every section. */
export function SectionHeading({ eyebrow, title, accent, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <div className="mb-5 flex items-center gap-4">
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-20 bg-gradient-to-r from-gold/80 to-transparent" />
        </div>
        <h2 className="font-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.4rem]">
          <span className="gradient-silver block">{title}</span>
          <span className="gradient-gold block">{accent}</span>
        </h2>
      </div>
      {children && <p className="max-w-sm text-sm font-light leading-relaxed text-muted">{children}</p>}
    </Reveal>
  );
}

export function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-6 py-24 sm:px-12 lg:px-20 ${className}`}>
      <div className="relative z-10 mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
