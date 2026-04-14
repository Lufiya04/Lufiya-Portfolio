# Lufiya Banu — UI/UX & Web Design Portfolio

A modern, responsive portfolio showcasing UI/UX design, web design, and graphic design work. Built with Vite, React, TypeScript, and Tailwind CSS for optimal performance and visual impact.

## Features

- ✨ **Modern Design** — Sleek, glassmorphic UI with interactive animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Lightning Fast** — Built with Vite for instant load times
- 🎨 **Smooth Animations** — Scroll reveal effects and interactive gradients
- 💬 **Contact Form** — EmailJS integration for direct client inquiries
- 🌙 **Dark Theme** — Eye-friendly design with CSS variables

## Setup

```bash
npm install
npm run dev
```
## Build for Production

```bash
npm run build
```
The output will be in the `dist/` folder — upload this to any static host.

## Deploying to Production

### Option 1: Vercel (Recommended) — Zero Config
1. Push this repository to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Import Project** and select this repository
4. Vercel auto-detects the Vite config — click **Deploy**
5. Custom domain available in Settings → Domains

### Option 2: Netlify — Drag & Drop or Git
**Via Git:**
1. Connect your GitHub repo to [netlify.com](https://netlify.com)
2. Build command: `npm run build` | Publish: `dist`

**Via Drag & Drop:**
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder into the drop zone

### Option 3: GitHub Pages — Free Hosting
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository Settings → Pages

All deployments include automatic HTTPS and CDN acceleration.

