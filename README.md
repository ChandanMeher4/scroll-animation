# Scroll-Driven Hero Section Animation hahaha

A performant, scroll-driven hero section built to demonstrate advanced frontend animation techniques, responsive UI development, and smooth scroll interactions.

**Live Demo:** https://scroll-animation-sigma.vercel.app/  
**Repository:** https://github.com/ChandanMeher4/scroll-animation

---

## ⚡ Project Overview

This project was developed as an internship assignment focusing on motion quality, smoothness, and scroll-based interaction logic. The goal was to recreate a premium scroll-animation experience while maintaining strict performance standards.

### Key Features

- **Initial Load Stagger:** Smooth, staggered entrance animations for the headline and statistics using GSAP timelines to avoid abrupt visual loading.
- **Scrubbed Scroll Animation:** The main visual element's movement is tied directly to the user's scroll progress (`scrub: 1`) rather than a time-based autoplay, creating a natural and fluid interaction.
- **Zero Layout Reflows:** Animations heavily utilize CSS `transform` properties (`translate`, `scale`) via GSAP to ensure smooth 60fps performance without triggering expensive browser layout recalculations.
- **Sticky Context:** Utilizes CSS `position: sticky` within a `300vh` container to keep the hero section firmly in the viewport while the scroll triggers the horizontal animation.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **Language:** TypeScript (for strict type-safety and better developer experience)
- **Styling:** Tailwind CSS (for rapid, utility-first styling and responsive design)
- **Animation:** GSAP & ScrollTrigger (`@gsap/react`)

---

## 🚀 Running Locally

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ChandanMeher4/scroll-animation.git
    ```

2. **Navigate into the directory:**
    ```bash
    cd scroll-animation
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

5. **View the project:** Open http://localhost:3000 in your browser.

---

## 🧠 Technical Decisions & Challenges

**Text Wrapping & Tracking:** Combining CSS tracking (letter-spacing) with manual spaces in the DOM can cause uneven centering and awkward line breaks. This was resolved by using a continuous string (WELCOME ITZFIZZ), applying Tailwind's `tracking-[0.5em]`, preventing line breaks with `whitespace-nowrap`, and applying an offset padding to ensure mathematically perfect centering.

**Scroll Exhaustion:** To ensure the animated element successfully completes its trajectory before the hero section scrolls out of view, the trigger end point was carefully mapped to "bottom bottom", syncing the end of the animation with the exact moment the sticky container releases.

hello, this is a test line
