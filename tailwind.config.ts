import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        dst: {
          amber: "#dc963c",
          teal: "#2d5055",
          ink: "#050505",
          charcoal: "#101313",
          mist: "#d6d7d2",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
        "light-sweep": {
          "0%": { transform: "translateX(-45%) rotate(10deg)", opacity: "0" },
          "35%": { opacity: "0.42" },
          "100%": { transform: "translateX(140%) rotate(10deg)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 900ms ease-out both",
        "slow-zoom": "slow-zoom 18s ease-in-out infinite",
        "light-sweep": "light-sweep 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
