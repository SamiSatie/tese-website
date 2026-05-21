/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        tese: {
          navy: "#0F172A",
          blue: "#2563EB",
          cyan: "#06B6D4",
          bg: "#F8FAFC",
          muted: "#64748B"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)"
      }
    },
  },
  plugins: [],
};
