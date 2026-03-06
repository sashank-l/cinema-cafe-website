import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vintage-red": "#B32400",
        "vintage-yellow": "#E5A910",
        "vintage-blue": "#004B87",
        "vintage-orange": "#D95C14",
        "vintage-brown": "#4A2E15",
        "vintage-cream": "#F4EBD9",
        "vintage-paper": "#E8DCC4",
        "vintage-ink": "#1A1512",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        baloo: ["var(--font-baloo)", "sans-serif"],
      },
      backgroundImage: {
        "poster-gradient": "linear-gradient(135deg, #B32400 0%, #D95C14 50%, #E5A910 100%)",
        "spotlight-warm": "radial-gradient(circle at center, rgba(229,169,16,0.15) 0%, rgba(26,21,18,0) 70%)",
      },
      boxShadow: {
        "poster-heavy": "12px 12px 0px rgba(26, 21, 18, 0.9)",
        "poster-hover": "20px 20px 0px rgba(26, 21, 18, 0.9)",
        "poster-border-red": "0 0 0 6px #B32400",
        "poster-border-yellow": "0 0 0 6px #E5A910",
        "poster-border-blue": "0 0 0 6px #004B87",
      },
      animation: {
        ticker: "ticker 20s linear infinite",
        "float-tilt": "float-tilt 6s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-tilt": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
