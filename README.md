# KeerTech Technologies

KeerTech Technologies is a founder-led software and technology company building websites, web applications, software solutions, AI integrations and digital products.

## Website

This repository contains the official website source code for KeerTech Technologies.

## Tech Stack

The project is built using the following technologies:

- **React** (v19) - Component architecture and reactive UI
- **TypeScript** - Strict type-safety across all components and configurations
- **Vite** (v8) - Frontend tooling and optimized production bundler
- **Tailwind CSS** (v4) - Utility-first modern CSS styling
- **React Router** (v7) - Client-side routing with route-level code splitting
- **Lucide React** - Accessible and lightweight icon library

## Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Footer, ContactForm, etc.)
├── config/         # Central configuration and static content (siteConfig.ts)
├── context/        # React context providers (ThemeContext)
├── pages/          # Page views (Home, Services, Projects, About, FAQ, Contact, etc.)
├── App.tsx         # Root application component with routing and Suspense
├── index.css       # Tailwind CSS imports and global styles
└── main.tsx        # Application entry point
```

## Local Development

To run the project locally on your machine:

1. Clone or download this repository.
2. Install the project dependencies:

```bash
npm install
```

3. Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Production Build

To create an optimized production build:

```bash
npm run build
```

This compiles TypeScript, bundles client assets with code-splitting via Rollup/Vite, and outputs production-ready static files into the `dist/` directory.

To locally preview the production build:

```bash
npm run preview
```

## Deployment

The project is configured for deployment on Vercel. Static routing and security header rules are defined in `vercel.json`.

## Environment Variables

No environment variables are currently required for the public website.

## Notes

This repository is maintained as the official web presence of KeerTech Technologies, founded by Manoj Keer.
