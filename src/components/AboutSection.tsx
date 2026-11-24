import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Reveal, Section, SectionHeading } from './ui';
import portrait from '../assets/about.webp';

const stats = [
  { value: '5', label: 'Projects shipped' },
  { value: '750+', label: 'Study files on ScholarSpace' },
  { value: 'JPMC', label: 'Software engineering simulation' },
  { value: 'SQL', label: 'HackerRank certified (Adv.)' },
];

export function AboutSection() {
  // Gentle 3D tilt on the portrait that follows the cursor.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 200 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Section id="about" className="overflow-hidden">
      <div className="pointer-events-none absolute left-1/6 top-1/4 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[160px]" />

      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="01 / About me" title="I don't just write code." accent="I build what's next." />

          <Reveal>
            <p className="mb-10 max-w-xl text-sm font-light leading-[1.85] text-[#b3a497] md:text-[15px]">
              I'm <span className="font-medium text-[#f3dbb3]">Rahul Singh</span>, a Software Engineer focused on
              RESTful APIs, event-driven microservices and relational databases with Java, Spring Boot and Apache
              Kafka. With a strong foundation in data structures, algorithms and OOP, I turn complex requirements
              into scalable, production-ready backend systems.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-6 border-t border-bronze/25 pt-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label}>
                <div className={`font-display text-4xl ${i % 2 ? 'text-gold' : 'text-[#f4ebe2]'}`}>{s.value}</div>
                <div className="label mt-1 !text-muted">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="flex justify-center [perspective:1200px] lg:col-span-5">
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="card group p-3 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
          >
            {['left-0 top-0 border-l-2 border-t-2', 'right-0 top-0 border-r-2 border-t-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'].map(
              (pos) => (
                <span key={pos} className={`absolute h-6 w-6 border-gold ${pos}`} />
              ),
            )}
            <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden bg-black">
              <img
                src={portrait}
                alt="Portrait of Rahul Singh"
                loading="lazy"
                className="h-full w-full object-cover object-top brightness-95 transition duration-700 group-hover:scale-[1.03] group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <span className="absolute bottom-4 right-5 font-script text-3xl text-[#f2d8a7]">Rahul</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
