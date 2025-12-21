import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        /* Logo-based color palette - Calm & Clean */
        sky: {
          DEFAULT: "hsl(197, 44%, 85%)",
          light: "hsl(197, 44%, 95%)",
          dark: "hsl(197, 40%, 75%)",
        },
        steel: {
          DEFAULT: "hsl(200, 40%, 45%)",
          light: "hsl(200, 35%, 55%)",
          dark: "hsl(200, 45%, 35%)",
        },
        navy: {
          DEFAULT: "hsl(210, 55%, 25%)",
          light: "hsl(210, 50%, 35%)",
          dark: "hsl(210, 60%, 18%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 4px 20px hsl(205 50% 42% / 0.2), 0 8px 30px hsl(200 40% 45% / 0.1)" 
          },
          "50%": { 
            boxShadow: "0 4px 25px hsl(205 50% 42% / 0.3), 0 8px 40px hsl(200 40% 45% / 0.2)" 
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "counter": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "water-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "light-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "75%": { opacity: "1" },
          "90%": { opacity: "0.9" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.8s ease-out forwards",
        "fade-in-right": "fade-in-right 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "counter": "counter 0.5s ease-out forwards",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "water-flow": "water-flow 3s ease-in-out infinite",
        "light-flicker": "light-flicker 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(135deg, hsl(200, 40%, 45%) 0%, hsl(205, 50%, 42%) 50%, hsl(210, 55%, 25%) 100%)",
        "gradient-navy": "linear-gradient(135deg, hsl(210, 55%, 25%) 0%, hsl(210, 50%, 18%) 100%)",
        "gradient-sky": "linear-gradient(180deg, hsl(197, 44%, 95%) 0%, hsl(200, 40%, 90%) 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow": "0 4px 30px hsl(205 50% 42% / 0.2)",
        "glow-lg": "0 8px 40px hsl(205 50% 42% / 0.25)",
        "glow-xl": "0 12px 50px hsl(205 50% 42% / 0.3)",
        "soft": "0 4px 20px hsl(210 50% 20% / 0.08)",
        "deep": "0 25px 50px -12px hsl(210 50% 20% / 0.15)",
        "card": "0 10px 40px hsl(210 50% 20% / 0.08)",
        "inner-glow": "inset 0 2px 10px hsl(200 40% 45% / 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
