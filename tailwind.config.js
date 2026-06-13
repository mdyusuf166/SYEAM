module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#070a16",
        obsidian: "#0f172a",
        neon: "#7c3aed",
        cyan: "#22d3ee",
        electric: "#2563eb"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.2)",
        panel: "0 20px 80px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top right, rgba(56, 189, 248, 0.16), transparent 30%), radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.14), transparent 25%)"
      }
    }
  },
  plugins: []
};
