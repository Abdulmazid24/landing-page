# Nexus - AI-Native Developer Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-7042f8?style=for-the-badge&logo=netlify)](https://nexus-ai-native-developer-platform.netlify.app/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.02-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0_Beta-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

![Project Preview](https://via.placeholder.com/1200x630.png?text=Nexus+Landing+Page+Preview)

> **Note**: This project represents a **production-grade**, high-performance landing page for a fictional enterprise SaaS product. It demonstrates advanced frontend engineering skills, including 3D visualizations, complex animations, and responsive design systems.

---

## 🚀 Overview

**Nexus** is a concept for a next-generation developer platform. The goal of this project was to build a landing page that feels "futuristic" and "premium," similar to industry leaders like Vercel or Stripe.

It features a **deep-space aesthetic**, **glassmorphism**, **bento-grid layouts**, and **interactive 3D elements** to create an immersive user experience.

### ✨ Key Features

- **Interactive 3D Globe**: A real-time, WebGL-rendered globe (`cobe`) visualizing a global edge network.
- **AI Code Simulation**: A custom-built animated IDE that simulates code autocompletion and AI fixing, strictly using React state and Framer Motion.
- **Dynamic Star Background**: A performance-optimized particle system running on HTML5 Canvas.
- **Bento Grid Layout**: A modern, CSS Grid-based features showcase.
- **Responsive Design**: Fully fluid typography and layout adapting from mobile to 4K desktops.
- **Performance Optimized**: Lazy loading of heavy components and optimized assets.

---

## 🛠️ Tech Stack & Architecture

This project is built with a focus on scalar performance and maintainability.

| Category | Technology | Reason |
|----------|------------|--------|
| **Core** | React 18 + Vite | Fast HMR and optimal production bundling. |
| **Language** | TypeScript | Type safety for enterprise-grade reliability. |
| **Styling** | Tailwind CSS v4 | Zero-runtime CSS with the latest composition features. |
| **Animation** | Framer Motion | complex layout transitions and scroll-triggered effects. |
| **3D / WebGL** | React Three Fiber / Cobe | For high-performance 3D visualizations. |
| **Icons** | Lucide React | Clean, consistent SVG iconography. |

---

## 🧩 Component Architecture

The codebase follows a modular structure for maximum readability and reuse:

```bash
src/
├── components/
│   ├── layout/       # Navbar, Footer (Global implementation)
│   ├── sections/     # Hero, Features, Pricing, CodeDemo, Globe, FAQ
│   └── ui/           # Reusable atoms (Button, StarBackground, Cards)
├── lib/              # Utility functions (cn, animations)
└── App.tsx           # Main composition layer
```

---

## 🏃‍♂️ Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdulmazid24/landing-page.git
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Hire Me

I am a **Full Stack MERN Developer** specializing in building high-end, scalable web applications. I focus on clean code, modern design, and exceptional user experience.

- **GitHub**: [Abdulmazid24](https://github.com/Abdulmazid24)
- **Portfolio**: [https://abdulmazid-portfolio.vercel.app/](https://abdulmazid-portfolio.vercel.app/)
- **Email**: [Your Email Here]

---

*This project is deployed on [Netlify](https://nexus-ai-native-developer-platform.netlify.app/).*
