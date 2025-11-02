export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0a" },
      backgroundImage: { 'radial-fade': 'radial-gradient(1200px 400px at 50% 0%, rgba(0,0,0,0.06), rgba(0,0,0,0))' }
    }
  },
  plugins: []
};
