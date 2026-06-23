# Cliff Njogu — Portfolio

A modern, animated portfolio built with **React + Vite** (frontend) and **Node.js + Express** (backend).

## Features
- Framer Motion scroll-reveal animations & floating bubble background
- Typewriter hero · Tabbed Projects (Apps / Websites) · Working contact form
- Fully responsive · GitHub-ready structure

## Quick Start

```bash
npm install
npm run dev        # Frontend at http://localhost:5173
```

## Adding Projects

Edit `src/data/projects.js`:
```js
export const apps = [
  {
    id: 1,
    title: "My App",
    description: "What it does.",
    tags: ["React Native", "Firebase"],
    live: "https://...",
    github: "https://github.com/...",
    icon: "📱",
    badge: "Mobile App",
  }
];
```

## Contact Form (EmailJS)
1. Sign up at emailjs.com → create a Service + Template
2. In `src/components/Contact.jsx` replace the three `YOUR_*` constants

## Backend (optional)
```bash
cd server && cp .env.example .env   # fill in Gmail App Password
npm install && npm run dev          # runs at :3001
```

## Deploy
- **Vercel**: `npx vercel` in project root
- **Netlify**: drag `dist/` folder after `npm run build`

## Stack
Frontend: React 19 + Vite | Animations: Framer Motion | Backend: Node.js + Express | Email: EmailJS / Nodemailer
