/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FBFCFE",
        surface: "#FFFFFF",
        border: "#E8EDF5",
        "border-light": "#D8E0EE",
        text: "#33405E",
        muted: "#7C89A4",
        blue: "#2F6DB0",
        "blue-dim": "#7EA8D8",
        purple: "#6A5AD1",
        signal: "#0E9E86",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
      animation: {
        "signal-pulse": "signal 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        signal: {
          "0%, 100%": { opacity: "0.4", transform: "scaleX(1)" },
          "50%": { opacity: "1", transform: "scaleX(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
