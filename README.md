# Auronex Tech Park — Software Development & AI Excellence Center

A complete, premium, production-ready website recreation for **Auronex Tech Park — Software Development & AI Excellence Center**, built faithfully to match the reference design (`https://auronex-tech-park.lovable.app`).

---

## 🚀 Key Features & Visual Fidelities Recreated

1. **Exact Visual Identity & Color System:**
   - Deep night gradient background (`bg-night`: OKLCH deep navy radial gradient mesh).
   - Cyberpunk cyan & electric indigo brand gradients (`--gradient-brand`, `--electric`, `--cyan`).
   - Dynamic grid pattern overlays (`.grid-lines` with mask falloff).
   - Frosted glassmorphism cards (`.glass`: backdrop blur 18px, saturation 140%).
   - Precision typography using **Manrope** (body) and **Sora** (display headings).

2. **Animations & Micro-interactions:**
   - **Interactive Constellation Canvas**: Live HTML5 canvas drawing drifting nodes with proximity-based glowing connections, respecting `prefers-reduced-motion`.
   - **3D Tilt Cards**: Mouse-tracking perspective tilt (`rotateX`, `rotateY`, `translateY`) with glowing edge borders on hover.
   - **Concentric Rotating Orbital Hero Graphic**: Multi-ring animated orbits with orbiting cyan satellite nodes and floating code pills (`model.train(data)`, `Deploy · cloud-ready`, `<Software /> + AI`).
   - **Logo Enter & Glow**: Custom keyframe animations for the official Auronex logo on load and hover.
   - **Underline Link Transitions**: Expanding gradient underline for nav links on hover and active routes.

3. **Complete Multipage Structure (React Router):**
   - **Home (`/`)**: Hero with constellation, animated graphic, 4 stat highlights, Brand Film video player, 6 TiltCards for core capabilities, "Why Auronex Tech Park?" 6-card grid, and interactive tabbed service spectrum.
   - **About Us (`/about`)**: Story, Mission & Vision cards, "Four Pillars, One Ecosystem" (Engineer, Advise, Educate, Empower), and Core Values (Curiosity, Integrity, Quality, Partnership, Inclusion).
   - **Industries & Services (`/services`)**: All 8 service domains with detailed feature lists, 8 industry sector badges, and 5-step delivery process (Discover, Design, Build, Deploy, Evolve).
   - **Careers & Opportunities (`/careers`)**: 4 offering cards (Training, Internships, Careers, Innovation/Startups), 4-step pathway from skills to employment, and open positions callout.
   - **Contact (`/contact`)**: Direct contact cards, business hours, interactive enquiry form with selectable interest pills, input validation, and real-time status feedback.

4. **Accurate Business Information:**
   - **Name**: Auronex Tech Park
   - **Description**: Software Development & AI Excellence Center
   - **Phones**: `+91 91002 02247` and `+91 95025 58565` (clickable `tel:` protocols)
   - **Email**: `auronextechpark@gmail.com` (clickable `mailto:` protocol)
   - **Address**: D.No: 4-339/14, R.K Towers, Swaroop Nagar, Rajamahendravaram 5, Andhra Pradesh, India.
   - **Instagram**: [auronex_techpark](https://www.instagram.com/auronex_techpark?exln=YXJud3RrODkxZm84)
   - **Business Hours**: Mon–Sat: 9:00 AM – 5:00 PM | Sun: Holiday
   - **WhatsApp Action**: Direct pre-filled message action link.

---

## 🛠 Tech Stack

- **React 18** with **Vite**
- **React Router DOM 6**
- **Tailwind CSS 3** with custom OKLCH design tokens
- **Lucide React** icons

---

## 💻 Development & Deployment Commands

```bash
# Start local development server (already running on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
