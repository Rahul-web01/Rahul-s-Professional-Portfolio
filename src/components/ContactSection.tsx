import { useState } from 'react';
import { Reveal, Section, SectionHeading } from './ui';

const EMAIL = 'contact.rahul82@gmail.com';

const channels = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Phone', value: '+91 94523 33000', href: 'tel:+919452333000' },
  { label: 'Location', value: 'Lucknow, Uttar Pradesh, India' },
  { label: 'GitHub', value: 'github.com/Rahul-web01', href: 'https://github.com/Rahul-web01' },
  { label: 'LinkedIn', value: 'linkedin.com/in/rahul-singh-cs', href: 'https://linkedin.com/in/rahul-singh-cs' },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  // No backend needed: opens the visitor's email app with the message pre-filled.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${f.get('name')}`;
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <footer>
      <Section id="contact" className="!pb-12">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="05 / Contact" title="Let's build" accent="something great." />
            <p className="mb-10 max-w-md text-sm font-light leading-relaxed text-muted">
              Have a backend system to build, an engineering role, or a project to collaborate on? Send a message
              or reach me directly.
            </p>
            <dl className="space-y-3 border-t border-bronze/25 pt-6">
              {channels.map((c) => (
                <div key={c.label} className="flex items-center justify-between gap-4">
                  <dt className="label shrink-0 font-mono">{c.label}</dt>
                  <dd className="truncate text-right text-[13px]">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-gold"
                      >
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal className="card p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] sm:p-10 lg:col-span-7 lg:mt-24">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="label mb-2 block font-mono">Name</span>
                  <input name="name" required placeholder="Your name" className="input" />
                </label>
                <label className="block">
                  <span className="label mb-2 block font-mono">Email</span>
                  <input name="email" type="email" required placeholder="you@company.com" className="input" />
                </label>
              </div>
              <label className="block">
                <span className="label mb-2 block font-mono">Message</span>
                <textarea name="message" required rows={5} placeholder="Tell me about your project or role…" className="input resize-none" />
              </label>
              <button type="submit" className="btn btn-solid w-full">
                Send message ↗
              </button>
              {sent && (
                <p className="text-center text-xs text-muted">
                  Your email app should open with the message ready to send. If it didn't, email me at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-gold">
                    {EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-bronze/15 pt-10 font-mono text-[10px] uppercase tracking-widest text-bronze sm:flex-row">
          <span>Rahul Singh — Software Engineer</span>
          <span>© {new Date().getFullYear()} · Built with React &amp; Tailwind CSS</span>
        </div>
      </Section>
    </footer>
  );
}
