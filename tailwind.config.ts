import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      backgroundImage: {
        noise: "url('/bg-noise.webp')",
        'noise-30': "url('/bg-noise-30.webp')",
        'noise-20': "url('/bg-noise-20.webp')",
        'noise-10': "url('/bg-noise-10.webp')",
        'hero-pattern-light': "url('/hero-bg-noise-light.webp')",
        'hero-pattern-dark': "url('/hero-bg-noise-dark.webp')",
        'creator-pattern-light': "url('/earn-free-bg-noise-light.webp')",
        'creator-pattern-dark': "url('/earn-free-bg-noise-dark.webp')",
        'faq-pattern-light': "url('/faq-bg-noise-light.webp')",
        'faq-pattern-dark': "url('/faq-bg-noise-dark.webp')",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: 'var(--font-lexend)',
        monument: ['Monument Extended', 'sans-serif'],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        primary: '#FFF500',
        secondary: '#00C2FF',
        dark: '#002026',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
