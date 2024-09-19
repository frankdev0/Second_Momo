// import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "kashmir-blue": {
          DEFAULT: '#1F58A3',  
          50: '#90B7EA',
          100: '#7FACE7',
          200: '#5C95E0',
          300: '#3A7FDA',
          400: '#266BC5',
          500: '#1F58A3',
          600: '#163F74',
          700: '#0D2545',
          800: '#040C16',
          900: '#000000'
        },
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
};

export default config;
