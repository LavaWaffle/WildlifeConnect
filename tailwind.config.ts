import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'background': '#DAD7CD',
        'wild': {
          100: '#CAD2C5',
          200: '#84A98C',
          300: '#52796F',
          400: '#354F52',
          500: '#2F3E46',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
