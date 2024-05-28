import { type Config } from 'tailwindcss';
import defaultTheme, { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{mdx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-noto-sans-kr)', ...fontFamily.sans],
    },
    colors: {
      black: '#000',
      white: '#fff',
      bg: '#000',
      main: {
        first: '#e93963',
        second: '#8586db'
      }
    },
    screens: {
      'xs': '480px',
      '3xl': '1740px',
      ...defaultTheme.screens,
    }
  },
  corePlugins: { preflight: false },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'), ({ nocompatible: true })
  ],
};


export default config;
