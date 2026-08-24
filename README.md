# Portfolio

A personal portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Includes a downloadable resume, and dedicated desktop/mobile views for each section.

## ✨ Features

- **Hero Section** – introduction / landing area
- **Tech Stack** – showcase of tools and technologies used
- **Experience** – work history / experience timeline
- **Projects** – featured project showcase
- **Navbar** – site navigation
- **Theme support** – light/dark theme via React Context
- **Responsive design** – separate Desktop and Mobile views per component
- **Dockerized** – run the entire app with a single command

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Docker](https://www.docker.com/)

## 📁 Project Structure

```
.
├── public/                     # Static assets (e.g. resume, openly accessible)
├── src/
│   ├── components/
│   │   ├── Experience/
│   │   │   ├── Views/
│   │   │   │   ├── DesktopView.tsx
│   │   │   │   └── MobileView.tsx
│   │   │   └── Experience.tsx
│   │   ├── HeroSection/
│   │   │   ├── Views/
│   │   │   │   ├── DesktopView.tsx
│   │   │   │   └── MobileView.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── Navbar/
│   │   │   ├── Views/
│   │   │   │   ├── DesktopView.tsx
│   │   │   │   └── MobileView.tsx
│   │   │   └── Navbar.tsx
│   │   ├── Projects/
│   │   │   ├── Views/
│   │   │   │   ├── DesktopView.tsx
│   │   │   │   └── MobileView.tsx
│   │   │   └── Projects.tsx
│   │   └── TechStack/
│   │       ├── Views/
│   │       │   ├── DesktopView.tsx
│   │       │   └── MobileView.tsx
│   │       └── TechStack.tsx
│   ├── contextx/
│   │   └── ThemeContext.tsx    # Theme (light/dark) context provider
│   ├── page/
│   │   └── Home_page.tsx       # Main page composing all sections
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── docker-compose.yml
├── dockerfile
├── eslint.config.ts
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.ts
├── tsconfig.node.json
└── vite.config.ts
```

Each major component follows the same pattern: a top-level `<Component>.tsx` that decides which view to render, and a `Views/` folder containing separate `DesktopView.tsx` and `MobileView.tsx` implementations for responsive layouts.

## 🚀 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose installed
  - _(or, for local development without Docker: Node.js and npm)_

### Run with Docker (recommended)

```bash
sudo docker compose up --build
```

The app will build and start automatically.

### Run locally (without Docker)

```bash
npm install
npm run dev -- --host
```

The app will be available at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

## 📄 Resume

The resume is stored in the `public/` folder and is publicly accessible via the deployed site.

## 🎨 Theming

Theme state (light/dark mode) is managed globally via `src/contextx/ThemeContext.tsx` using React Context.

## 📦 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |


