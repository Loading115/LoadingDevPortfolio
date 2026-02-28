import type { Config } from "tailwindcss"

export default {
  darkMode: "class", // ✅ en v4 es string
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config