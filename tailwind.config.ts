import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"]
      },
      colors: {
        main: '#2C6DFF',
        gray: {
          0: '#FFFFFF',
          100: '#F3F5F9',
          150: '#F8F8F8',
          200: '#EBEEF1',
          300: '#D1D4D6',
          400: '#A3A8AC',
          500: '#6A6F75',
          600: '#41454A',
          700: '#2C2F32',
          800: '#17181A',
        },
        blue: {
          20: '#E8EDFF',
          40: '#B7C7FF',
          60: '#89A2FF',
          80: '#5F7FFF',
          100: '#2961FF',
          600: '#0D296F'
        },
        shadow: {
          1: 'rgba(21, 24, 27, 0.7)',
          2: 'rgba(21, 24, 27, 0.3)',
          blue: 'rgba(41, 97, 255, 0.5)'
        }
      },
    },
    screens: {
      'desktop': '1024',
      'tablet': {'max': '1023px'},
      'mobile': {'max': '767px'},
    }
  },
  plugins: [

  ],
};
export default config;
