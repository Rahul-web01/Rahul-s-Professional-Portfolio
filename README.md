# Rahul Singh — Software Engineer Portfolio

A cinematic, dark-themed portfolio showcasing my backend engineering work with Java, Spring Boot and Apache Kafka.

**Live site:** https://rahul-s-professional-portfolio-93kq592qd.vercel.app/

## Tech stack

- [React 19](https://react.dev) + TypeScript, bundled with [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (theme and shared styles in `src/index.css`)
- [Framer Motion](https://motion.dev) for scroll and entrance animations

## Project structure

```
public/            static files served from the site root (hero video, resume, icons)
src/
  assets/          images imported by components
  components/
    ui.tsx         shared Section, SectionHeading and Reveal helpers
    Navbar.tsx     fixed top navigation with mobile menu
    *Section.tsx   one file per page section
  index.css        Tailwind theme (fonts, colors) and reusable classes
```

Content such as projects, skills and experience lives in plain arrays at the top of each section file.

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Contact

- Email: [contact.rahul82@gmail.com](mailto:contact.rahul82@gmail.com)
- GitHub: [github.com/Rahul-web01](https://github.com/Rahul-web01)
- LinkedIn: [linkedin.com/in/rahul-singh-cs](https://www.linkedin.com/in/rahul-singh-cs/)
