import { useEffect, useState } from 'react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'border-b border-steel/20 bg-black/75 backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-20">
        <a href="#" className="text-sm font-semibold uppercase tracking-[0.35em] text-[#dbe4f0]">
          Rahul<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-9 text-[11px] font-light uppercase tracking-[0.28em] text-[#b6c2d4] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative py-1 transition-colors hover:text-white">
              {l.name}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent/60 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn hidden !px-4 !py-2 md:inline-flex">
          Let&apos;s talk ↗
        </a>

        <button
          className="text-[11px] uppercase tracking-[0.28em] text-[#dbe4f0] md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 px-6 pb-6 text-xs uppercase tracking-[0.28em] text-[#b6c2d4] md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-white">
              {l.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
