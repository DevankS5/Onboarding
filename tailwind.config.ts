import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
          section: '#0A0A0A',
          card: '#111111',
          altCard: '#141414'
        },
        border: {
          DEFAULT: '#2A2A2A'
        },
        gold: {
          DEFAULT: '#F5B82E',
          hover: '#E6A91F',
          highlight: '#FFC83D'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1A1',
          muted: '#6B6B6B'
        },
        btn: {
          primary: '#F5B82E',
          primaryText: '#000000',
          secondary: '#1A1A1A',
          secondaryBorder: '#2A2A2A',
          secondaryText: '#A1A1A1'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-manrope)', 'sans-serif']
      },
      boxShadow: {
        gold: '0 0 20px rgba(245,184,46,0.25)',
        'gold-sm': '0 0 10px rgba(245,184,46,0.15)'
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #2B1405, #4A260A)'
      },
      borderRadius: {
        card: '16px',
        input: '12px',
        pill: '9999px'
      }
    }
  },
  plugins: []
};

export default config;
