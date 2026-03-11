# Sorawit Siamhong - Full-Stack Developer Portfolio

A modern, responsive, and highly interactive developer portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. This portfolio is designed to showcase enterprise-level experience, technical skills, case studies, and project history with a premium user experience.

![Portfolio Preview](public/preview.png) *(You can add a screenshot of your portfolio here later and save it as `public/preview.png`)*

## ✨ Key Features

- **Modern UI/UX**: Sleek design with smooth micro-interactions.
- **Dark/Light Mode**: Full theme support with system preference detection (`next-themes`).
- **Internationalization (i18n)**: Fully bilingual support (English & Thai) with custom language provider and caching.
- **Interactive Animations**: Premium scroll animations, page transitions, and a custom "Jelly Curtain Pull" loading sequence powered by `framer-motion`.
- **Dynamic Projects & Case Studies**: Data-driven project rendering with detailed case study expansions (Problem, Solution, Impact).
- **SEO Optimized**: Dynamically generated `sitemap.xml` and `robots.txt` for enhanced search engine visibility.
- **Fully Responsive**: Optimized for seamless viewing across mobile, tablet, and desktop devices.
- **Type-Safe**: Developed entirely with TypeScript to ensure secure and robust code structure.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Library:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** `next-themes`
- **Deployment:** Vercel

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Nuksaker/Sorawit.git
   ```
2. Navigate to the project directory
   ```sh
   cd Sorawit
   ```
3. Install dependencies
   ```sh
   npm install
   # or yarn install / pnpm install
   ```
4. Start the development server
   ```sh
   npm run dev
   # or yarn dev / pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (pages, layout, sitemap, robots)
├── components/           # Reusable UI components (Hero, About, Projects, Loader, etc.)
├── data/                 # Static data sources (e.g., projects.ts)
├── translations/         # i18n translation files (en.json, th.json)
├── types/                # TypeScript interface and type definitions
├── public/               # Static assets (images, CV files)
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌐 Localization

The portfolio supports multiple languages dynamically. To edit or add content, modify the JSON files located in the `translations/` directory:
- `translations/en.json` (English)
- `translations/th.json` (Thai)

## 📞 Contact

**Sorawit Siamhong**
- **Email:** nukker.srw@gmail.com
- **LinkedIn:** [linkedin.com/in/nukkersrw](https://www.linkedin.com/in/nukkersrw)
- **GitHub:** [github.com/Nuksaker](https://github.com/Nuksaker)
- **Website:** [sorawit.vercel.app](https://sorawit.vercel.app/)

---

*Designed and developed by Sorawit Siamhong.*