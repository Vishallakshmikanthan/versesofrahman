import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: "#0A0A1A",
          surface: "#0F0F2A",
          purple: "#6C63FF",
          cyan: "#00D4FF",
          gold: "#FFD700",
          teal: "#1D9E75",
          coral: "#D85A30",
          gray: "#888780",
          graylt: "#D3D1C7",
        },
      },
      keyframes: {
        "glow-pulse": {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 20px rgba(108,99,255,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
