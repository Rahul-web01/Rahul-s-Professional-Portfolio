<div align="center">

# Rahul Singh — Developer Portfolio

**A dark, animated single-page portfolio presenting my backend engineering work with Java, Spring Boot and Apache Kafka.**

[![Live site](https://img.shields.io/badge/Live_site-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://rahul-s-professional-portfolio.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

> **Live site:** https://rahul-s-professional-portfolio.vercel.app/

## What it does

A static React site that introduces who I am, the projects I've built, the tools I use and my experience, with a direct way to get in touch. There is no backend: everything is bundled by Vite and served from Vercel.

## Sections

| # | Section | Contents |
|---|---|---|
| — | **Hero** | Headline over a looping background video, links to my work and a resume download |
| 01 | **About** | Portrait with a cursor-following 3D tilt and a short stats row |
| 02 | **Projects** | Featured project cards with description, tech chips, key facts, GitHub and live-demo links |
| 03 | **Skills** | Skill groups: backend & frameworks, messaging & architecture, data platforms, cloud & tooling |
| 04 | **Experience** | Timeline of internships, simulations and education, with a line that fills as you scroll |
| 05 | **Contact** | Contact details and a form that opens the visitor's email app with the message pre-filled |

## Features

- Fixed navbar that gains a blurred background on scroll, with a mobile menu
- Scroll and entrance animations with Framer Motion (`whileInView`, scroll-linked transforms)
- Project cards that stick and stack while scrolling on large screens, done in pure CSS
- Hero video falls back gracefully if it fails to load
- Resume served from `public/resume.pdf` and downloaded as `Rahul_Singh_Resume.pdf`
- Contact form works without a server by building a `mailto:` link
- Open Graph and Twitter card meta tags with a 1200×630 preview image
- Custom Tailwind v4 theme (gold/bronze palette; Bebas Neue, Montserrat and Herr Von Muellerhoff fonts) defined in `src/index.css`

## Getting started

Requires Node.js `^20.19.0` or `>=22.12.0` (needed by Vite 8).

```bash
git clone https://github.com/Rahul-web01/Rahul-s-Professional-Portfolio.git
cd Rahul-s-Professional-Portfolio
npm install
npm run dev
```

Then open the local URL Vite prints (http://localhost:5173 by default).

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with oxlint |

## Editing content

Projects, skills, experience and contact details are plain arrays at the top of each file in `src/components/`, so updating the site means editing data rather than markup. Replace `public/resume.pdf` to update the resume.

## Deployment

The site is deployed on Vercel. To deploy your own copy, import the repository in Vercel; it detects Vite automatically and uses `npm run build` with `dist` as the output directory.

## Tech stack

| Purpose | Technology |
|---|---|
| UI | React 19 |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Animation | Framer Motion 13 |
| Build tool | Vite 8 |
| Linting | oxlint |
| Hosting | Vercel |

## Project structure

```
public/                 Static files served from the site root (hero video, resume, icons, OG image)
src/
├── assets/             Images imported by components
├── components/
│   ├── Navbar.tsx      Fixed top navigation with mobile menu
│   ├── *Section.tsx    One file per page section
│   ├── ui.tsx          Shared Section, SectionHeading and Reveal helpers
│   └── motion.ts       Shared animation variants
├── App.tsx             Page layout
├── main.tsx            Entry point
└── index.css           Tailwind theme and reusable classes
```

## Roadmap

- Add screenshots of each section to this README
- Add a project detail view for longer case studies
- Set up GitHub Actions to run lint and build on every pull request

## Author

**Rahul Singh**, Software Engineer, Lucknow, India

[![GitHub](https://img.shields.io/badge/GitHub-Rahul--web01-181717?style=flat-square&logo=github)](https://github.com/Rahul-web01)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rahul--singh--cs-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/rahul-singh-cs)
[![Email](https://img.shields.io/badge/Email-contact.rahul82%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:contact.rahul82@gmail.com)

---

<div align="center">

If you found this useful, consider giving it a ⭐

</div>
