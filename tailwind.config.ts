import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',

        xl: '1280px', // laptop normal
        '2xl': '1440px', // desktop / macbook pro
        '3xl': '1680px', // desktop grande / monitor externo
      },
    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Danmark STD Light', 'Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'h1-sm': ['32px', { lineHeight: '38px', letterSpacing: '-0.2px' }],
        'h1-md': ['48px', { lineHeight: '54px', letterSpacing: '-0.3px' }],
        'h1-lg': ['64px', { lineHeight: '70px', letterSpacing: '-0.5px' }],
        'h2-sm': ['24px', { lineHeight: '60px' }],
        'h2-md': ['28px', { lineHeight: '60px' }],
        'h2-lg': ['40px', { lineHeight: '60px' }],
        navbar_text: ['18px', { lineHeight: '10px' }],
        body: ['18px', { lineHeight: '28px' }],
        cta_text: ['50px', { lineHeight: '48px', letterSpacing: '3px' }],
        cta_bottn: ['18px', { lineHeight: '10px', letterSpacing: '-0.5px' }],
      },
      colors: {
        piel: '#A67753',
        arena: '#E6DCCF',
        nieve: '#F7F5F1',
        mar: '#2B3E4E',
        noche: '#343839',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
