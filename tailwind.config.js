/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        "navy-2": "var(--navy-2)",
        electric: "var(--electric)",
        cyan: "var(--cyan)",
        "on-dark": "var(--on-dark)",
        "on-dark-muted": "var(--on-dark-muted)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Sora"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
        "fade-up": "fade-up .9s cubic-bezier(.2,.7,.2,1) both",
        "float": "float-y 6s ease-in-out infinite",
        "logo-enter": "logo-enter .9s cubic-bezier(.2,.7,.2,1) backwards, logo-glow 3.5s ease-in-out .9s infinite",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "logo-enter": {
          "0%": { opacity: "0", transform: "scale(.65) rotate(-10deg)" },
          "70%": { transform: "scale(1.05) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0)" },
        },
        "logo-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 2px oklch(82% .14 210 / .2))" },
          "50%": { filter: "drop-shadow(0 0 18px oklch(82% .14 210 / .7))" },
        },
      },
    },
  },
  plugins: [],
}
