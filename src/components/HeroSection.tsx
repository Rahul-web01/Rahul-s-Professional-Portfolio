import { useState } from 'react';
import { motion } from 'framer-motion';
import { ease, fadeUp, stagger } from './motion';
import emblem from '../assets/emblem.webp';

export function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex h-svh min-h-[600px] w-full items-center overflow-hidden px-6 sm:px-12 lg:px-20">
      {/* Background video, anchored right */}
      <div className="pointer-events-none absolute inset-0 flex justify-end">
        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
            className="h-full w-auto max-w-none object-contain opacity-70 md:opacity-100"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black via-black/80 to-transparent md:w-2/3" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Headline */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <motion.h1
          variants={fadeUp}
          className="mb-5 font-display text-6xl uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          <span className="gradient-silver block">I build</span>
          <span className="gradient-gold block drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">backend</span>
          <span className="gradient-gold block">systems</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#c4b29e] md:text-xs">
          Software Engineer <span className="mx-1 text-bronze">•</span> Spring Boot{' '}
          <span className="mx-1 text-bronze">•</span> Apache Kafka
        </motion.p>

        <motion.p variants={fadeUp} className="mb-8 max-w-md text-sm font-light leading-[1.8] text-muted">
          I turn business logic into resilient, event-driven services — clean architecture and fault-tolerant
          systems, built to scale.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <a href="#work" className="btn btn-solid">
            View my work ↗
          </a>
          <a href="/resume.pdf" download="Rahul_Singh_Resume.pdf" className="btn">
            Download resume ↓
          </a>
        </motion.div>
      </motion.div>

      {/* Quote + signature */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease }}
        className="absolute right-[34%] top-1/2 z-10 hidden -translate-y-1/2 select-none xl:block"
      >
        <span className="mb-2 block font-serif text-xl leading-none text-[#c99e5d]">“</span>
        <p className="mb-3 space-y-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[#e0d3c5]">
          Code is my craft.
          <br />
          Scale is my goal.
        </p>
        <div className="mb-2 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
        <span className="font-script text-4xl text-[#d8ab64]">Rahul</span>
      </motion.div>

      {/* Floating emblem */}
      <motion.img
        src={emblem}
        alt=""
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 right-6 z-10 w-24 drop-shadow-[0_0_15px_rgba(212,175,55,0.25)] lg:right-12 lg:w-28"
      />
    </section>
  );
}
