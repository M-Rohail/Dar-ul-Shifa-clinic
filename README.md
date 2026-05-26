<div align="center">

# 🌿 Dar-ul-Shifa Homoeopathic Clinic

### *A Professional Healthcare Website — Est. 1999*

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)

<br />

> **Authentic Homeopathic Treatment · Hijama & Cupping Therapy · Rohani Ilaaj · Home Service**  
> Dr. Abdul Moeed — PHC Reg. R-90753 · NCHP Reg. 116249 · Rawalpindi, Pakistan

<br />

---

</div>

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📄 Pages](#-pages)
- [🎨 Design System](#-design-system)
- [📱 Mobile Responsive](#-mobile-responsive)
- [⚡ Performance](#-performance)
- [🔗 Links](#-links)
- [👨‍💻 Developer](#-developer)

---

## 🌟 Overview

A **complete, production-ready clinic website** for **Dar-ul-Shifa Homoeopathic Clinic** — a professional healthcare practice established in 1999 by Dr. Abdul Moeed in Rawalpindi, Pakistan.

The site features advanced animations, parallax effects, 3D flip card interactions, and a fully responsive mobile layout — designed to look stunning on every device while remaining fast and SEO-optimised.

All bookings are handled exclusively via **WhatsApp** — no forms, no friction.

---

## ✨ Features

### 🎞️ Animations & Interactions
- **Parallax hero carousel** — 4-slide auto-rotating hero with smooth fade transitions
- **3D flip cards** — Hadith cards with `rotateY` backface-hidden flip animation
- **Animated counting stats** — Numbers count up on scroll into view
- **Floating particle effects** — Gold particles rising in hero sections
- **Scroll-triggered animations** — Every section fades/slides in using Framer Motion's `whileInView`
- **3D hover cards** — Cup types lift and scale on hover with `rotateX` entry animation
- **Scroll-to-top** — Instant scroll to top on every page navigation

### 🕌 Islamic & Sunnah Content
- **Hadith quotes** on cupping therapy with Arabic text (Amiri font)
- **Sunnah dates** for Hijama — 17th, 19th, 21st of Islamic lunar month
- **Days-of-week grid** with Sunnah-recommended days highlighted
- **Quranic verses** on the Rohani Ilaaj page with Arabic calligraphy
- **Arabic typography** throughout using Google Fonts Amiri

### 📱 Fully Responsive
- Mobile-first layout — tested down to 360px width
- Stacked CTAs, centered headings, safe floating badges on mobile
- Responsive font scaling with `clamp()` and Tailwind breakpoints
- Touch-friendly buttons (full-width on small screens)

### 🔍 SEO Optimised
- Full `<meta>` tags (title, description, keywords, author)
- Open Graph & Twitter Card meta tags
- **Schema.org JSON-LD** structured data (`MedicalClinic` type)
- Semantic HTML5 elements throughout
- Canonical URL configured

### 🔒 Trust & Credibility
- PHC Reg. No. **R-90753** displayed prominently
- NCHP Reg. No. **116249** with verified badge
- 25+ years experience, 10,000+ patients served
- Legal disclaimer in footer

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.3 | UI framework |
| **Vite** | 5.4 | Build tool & dev server |
| **React Router DOM** | 6.26 | Client-side routing (SPA) |
| **Framer Motion** | 11.11 | Animations & transitions |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **React Icons** | 5.3 | Icon library (FA, MD, GI, HI) |
| **PostCSS** | 8.4 | CSS processing |
| **Autoprefixer** | 10.4 | CSS vendor prefixes |

**Fonts:** Playfair Display · Inter · Amiri (Arabic)  
**Images:** Unsplash CDN (no local images except doctor photo)  
**Deployment:** Netlify (SPA redirect configured)

---

## 📂 Project Structure

```
dar-ul-shifa/
├── public/
│   ├── favicon.svg          # Custom SVG favicon (navy + gold crescent)
│   └── _redirects           # Netlify SPA redirect rule
│
├── src/
│   ├── assets/
│   │   └── doctor.png       # Dr. Abdul Moeed photo
│   │
│   ├── components/
│   │   ├── Footer.jsx        # Footer with links, contact, disclaimer
│   │   ├── Logo.jsx          # SVG clinic logo
│   │   ├── Navbar.jsx        # Sticky nav with mobile drawer
│   │   ├── ScrollToTop.jsx   # Scroll-to-top on route change
│   │   └── WhatsAppButton.jsx # Fixed floating WhatsApp CTA
│   │
│   ├── pages/
│   │   ├── Home.jsx          # Homepage (imports 9 sections)
│   │   ├── ServicesPage.jsx  # All 7 services with alternating layout
│   │   ├── CuppingPage.jsx   # Advanced Hijama page (parallax + 3D)
│   │   ├── RohaniPage.jsx    # Rohani Ilaaj spiritual healing page
│   │   ├── AboutPage.jsx     # Dr. Abdul Moeed profile
│   │   └── ContactPage.jsx   # WhatsApp contact + clinic info
│   │
│   ├── sections/             # Homepage section components
│   │   ├── HeroSection.jsx       # 4-slide animated carousel
│   │   ├── StatsSection.jsx      # Animated counting stats
│   │   ├── ServicesOverview.jsx  # 6 service cards
│   │   ├── CuppingPreview.jsx    # Cupping teaser (dark navy)
│   │   ├── DoctorSection.jsx     # Doctor profile with badges
│   │   ├── RohaniPreview.jsx     # Starfield Rohani section
│   │   ├── HomeServiceSection.jsx # Home visit section
│   │   ├── TestimonialsSection.jsx # 6 patient reviews
│   │   └── AppointmentCTA.jsx    # Final call-to-action
│   │
│   ├── App.jsx              # Router + layout wrapper
│   ├── main.jsx             # React 18 createRoot entry
│   └── index.css            # Tailwind + custom component layer
│
├── index.html               # SEO meta, fonts, Schema.org JSON-LD
├── tailwind.config.js       # Custom navy/gold palette + fonts
├── vite.config.js           # Vite config
├── postcss.config.js        # PostCSS config
└── netlify.toml             # Netlify build settings
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18+`
- npm `9+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/M-Rohail/Dar-ul-Shifa-clinic.git
cd dar-ul-shifa

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`**

### Build for Production

```bash
npm run build
```

Output goes to `dist/` — ready to deploy on Netlify, Vercel, or any static host.

### Preview Production Build

```bash
npm run preview
```

---

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero carousel, stats, services overview, doctor, testimonials |
| `/services` | **Services** | 7 services with alternating full-width layout |
| `/cupping-therapy` | **Cupping Therapy** | Parallax hero, Hadith quotes (3D flip), Sunnah dates, cup types |
| `/rohani-ilaaj` | **Rohani Ilaaj** | Starfield background, Quranic healing, spiritual services |
| `/about` | **About Doctor** | Full profile of Dr. Abdul Moeed |
| `/contact` | **Contact** | WhatsApp quick-message buttons, address, hours |

---

## 🎨 Design System

### Colour Palette

| Name | Hex | Usage |
|---|---|---|
| `navy-950` | `#080f3a` | Primary background, navbar |
| `navy-800` | `#0f1a6e` | Sections, cards |
| `gold-500` | `#f59e0b` | Accents, highlights |
| `gold-400` | `#fbbf24` | Tags, Arabic text |
| `white` | `#ffffff` | Card backgrounds, text |

### Typography

| Font | Weight | Usage |
|---|---|---|
| **Playfair Display** | 700, 900 | Headings, titles |
| **Inter** | 400, 600, 700 | Body, UI elements |
| **Amiri** | 400, 700 | Arabic / Urdu text |

### Custom CSS Classes

```css
.btn-whatsapp      /* Green WhatsApp button */
.btn-navy          /* Navy primary button */
.btn-gold          /* Gold accent button */
.section-tag       /* Eyebrow label with side lines */
.section-title     /* Responsive heading (clamp-based) */
.bg-navy-gradient  /* Navy diagonal gradient */
.bg-hero-grid      /* Subtle cross-hatch overlay */
.text-gold-gradient /* Gold shimmer text */
```

---

## 📱 Mobile Responsive

The website is fully optimised for all screen sizes:

- **360px+** — Minimum supported (budget Android phones in Pakistan)
- **390px+** — iPhone 12/13/14 — fully tested
- **768px+** — Tablet layout
- **1024px+** — Desktop full layout

Key mobile improvements:
- Hero text scales from `2.1rem` → `7xl` using responsive Tailwind classes
- CTA buttons stack vertically on `< sm` screens
- Floating badges repositioned to stay within safe area
- Sunnah days grid goes `4 columns` on mobile, `7 columns` on desktop
- All section padding uses `px-4 sm:px-6` pattern
- Images height reduced on mobile to save vertical space

---

## ⚡ Performance

```
dist/index.html           3.23 kB │ gzip:   1.29 kB
dist/assets/index.css    50.72 kB │ gzip:   9.25 kB
dist/assets/index.js    412.83 kB │ gzip: 127.85 kB
```

- ✅ All images use `loading="lazy"` (except hero)
- ✅ Google Fonts loaded with `display=swap`
- ✅ No unused CSS (Tailwind purges in production)
- ✅ Vite tree-shaking removes dead code
- ✅ Netlify CDN with edge caching

---

## 🏥 Clinic Information

| | |
|---|---|
| **Clinic** | Dar-ul-Shifa Homoeopathic Clinic |
| **Doctor** | Dr. Abdul Moeed |
| **Established** | 1999 |
| **Registration** | PHC Reg. No. R-90753 |
| **Qualification** | NCHP Reg. No. 116249 |
| **Address** | H.No. S/85, Chaklala Railway Scheme 1, Chaklala Cantt., Rawalpindi 46000, Pakistan |
| **WhatsApp** | [+92 341 5412125](https://wa.me/923415412125) |
| **Hours** | Mon–Sat: 9 AM – 9 PM · Sunday: 10 AM – 6 PM |

### Services Offered
- 🌿 Homeopathic Treatment
- 🩸 Wet Cupping — Hijama (الحجامة)
- 💨 Dry Cupping Therapy
- 🎋 Bamboo Cup Therapy
- 💉 Fusud — Phlebotomy (الفصد)
- 🌙 Rohani Ilaaj (روحانی علاج)
- 🏠 Home Service — Rawalpindi

---

## ⚠️ Disclaimer

The information and services described on this website are intended for general wellness and complementary health support only. They do not replace the advice, diagnosis, or treatment of a qualified medical doctor. Results may vary by individual. Patients with serious or emergency medical conditions should seek conventional medical care immediately.

---

## 🔗 Links

- 🌐 **Live Website** — *(deploy to Netlify and update here)*
- 📱 **WhatsApp** — [wa.me/923415412125](https://wa.me/923415412125)
- 🏥 **PHC Registration** — R-90753
- 🏥 **NCHP Registration** — 116249

---

## 👨‍💻 Developer

<div align="center">

**Muhammad Rohail**

[![Portfolio](https://img.shields.io/badge/Portfolio-muhammadrohail.netlify.app-navy?style=for-the-badge&logo=netlify&logoColor=white)](https://muhammadrohail.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/M-Rohail)

*Full-Stack Developer — React · Node.js · Firebase · Tailwind CSS*

</div>

---

<div align="center">

**Built with ❤️ for Dar-ul-Shifa Homoeopathic Clinic**

*"وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ"*  
*"And when I am ill, it is He who cures me." — Al-Quran 26:80*

</div>
