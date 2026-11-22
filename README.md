# Abhishek N K - Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lenis (frontend only).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Edit your content
Everything is in `src/data/data.js`: profile, socials, projects, experience, skills, certificates.

## Enable the contact form (Formspree)
1. Create a free form at https://formspree.io
2. Copy the form ID (the part after `/f/` in the endpoint URL)
3. Paste it into `contact.formspreeId` in `src/data/data.js`

## Before you deploy
- Replace the `#` LinkedIn / GitHub links in `data.js`
- Add `github` / `live` links to your projects
- Replace `public/Abhishek_Resume.pdf` when your resume changes

## Deploy
Push to GitHub and import into Vercel or Netlify (build command `npm run build`, output `dist`).
