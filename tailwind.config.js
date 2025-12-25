/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        singapore: {
          red: "#EE2536",
          white: "#FFFFFF",
          crescent: "#FFFFFF",
          lion: "#EE2536",
        },
      },
      fontFamily: {
        // Chinese font for text
        chinese: ["var(--font-long-cang)", "cursive"],
        // English Display font for headings (BBH Bogle)
        display: ["var(--font-bbh-bogle)", "serif"],
        // English Text font for body text
        text: ["var(--font-lato)", "system-ui", "sans-serif"],
        // Fallback sans
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
