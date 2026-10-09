import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141714',
        forest: '#1b231f',
        paper: '#eeeae0',
        chalk: '#f7f4ec',
        lime: '#d9f568',
        coral: '#fb9073',
        'muted-light': '#abaea7',
        'muted-dark': '#5f665f',
      },
      fontFamily: {
        sans: ['Manrope', 'Arial', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      spacing: {
        gutter: 'clamp(1.25rem, 4.8vw, 5.75rem)',
      },
    },
  },
  plugins: [],
} satisfies Config
