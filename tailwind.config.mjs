/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#7CC142',
        'brand-dark': '#111312',
        'brand-white': '#FFFFFF',
        ink: '#111312',
        muted: '#6B6F6E',
        line: '#E6E6E3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem,5vw,4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(2rem,3.5vw,2.5rem)', { lineHeight: '1.2' }],
        'card-title': ['1.25rem', { lineHeight: '1.3' }],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(17,19,18,0.07)',
        'card-hover': '0 8px 24px 0 rgba(17,19,18,0.12)',
      },
    },
  },
  plugins: [],
};
