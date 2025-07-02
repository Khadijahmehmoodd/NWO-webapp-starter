import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // CANVAS
        'canvas-on-canvas': 'var(--canvas-on-canvas)',
        'canvas-base': 'var(--canvas-base)',
        'canvas-bg-subtle': 'var(--canvas-bg-subtle)',
        'canvas-bg': 'var(--canvas-bg)',
        'canvas-bg-hover': 'var(--canvas-bg-hover)',
        'canvas-bg-active': 'var(--canvas-bg-active)',
        'canvas-line': 'var(--canvas-line)',
        'canvas-border': 'var(--canvas-border)',
        'canvas-border-hover': 'var(--canvas-border-hover)',
        'canvas-solid': 'var(--canvas-solid)',
        'canvas-solid-hover': 'var(--canvas-solid-hover)',
        'canvas-text': 'var(--canvas-text)',
        'canvas-text-contrast': 'var(--canvas-text-contrast)',

        // PRIMARY
        'primary-base': 'var(--primary-base)',
        'primary-bg-subtle': 'var(--primary-bg-subtle)',
        'primary-bg': 'var(--primary-bg)',
        'primary-bg-hover': 'var(--primary-bg-hover)',
        'primary-bg-active': 'var(--primary-bg-active)',
        'primary-line': 'var(--primary-line)',
        'primary-border': 'var(--primary-border)',
        'primary-border-hover': 'var(--primary-border-hover)',
        'primary-solid': 'var(--primary-solid)',
        'primary-solid-hover': 'var(--primary-solid-hover)',
        'primary-text': 'var(--primary-text)',
        'primary-text-contrast': 'var(--primary-text-contrast)',
        'primary-on-primary': 'var(--primary-on-primary)',

        // SUCCESS
        'success-base': 'var(--success-base)',
        'success-bg-subtle': 'var(--success-bg-subtle)',
        'success-bg': 'var(--success-bg)',
        'success-bg-hover': 'var(--success-bg-hover)',
        'success-bg-active': 'var(--success-bg-active)',
        'success-line': 'var(--success-line)',
        'success-border': 'var(--success-border)',
        'success-border-hover': 'var(--success-border-hover)',
        'success-solid': 'var(--success-solid)',
        'success-solid-hover': 'var(--success-solid-hover)',
        'success-text': 'var(--success-text)',
        'success-text-contrast': 'var(--success-text-contrast)',
        'success-on-success': 'var(--success-on-success)',

        // WARNING
        'warning-base': 'var(--warning-base)',
        'warning-bg-subtle': 'var(--warning-bg-subtle)',
        'warning-bg': 'var(--warning-bg)',
        'warning-bg-hover': 'var(--warning-bg-hover)',
        'warning-bg-active': 'var(--warning-bg-active)',
        'warning-line': 'var(--warning-line)',
        'warning-border': 'var(--warning-border)',
        'warning-border-hover': 'var(--warning-border-hover)',
        'warning-solid': 'var(--warning-solid)',
        'warning-solid-hover': 'var(--warning-solid-hover)',
        'warning-text': 'var(--warning-text)',
        'warning-text-contrast': 'var(--warning-text-contrast)',
        'warning-on-warning': 'var(--warning-on-warning)',

        // ALERT
        'alert-base': 'var(--alert-base)',
        'alert-bg-subtle': 'var(--alert-bg-subtle)',
        'alert-bg': 'var(--alert-bg)',
        'alert-bg-hover': 'var(--alert-bg-hover)',
        'alert-bg-active': 'var(--alert-bg-active)',
        'alert-line': 'var(--alert-line)',
        'alert-border': 'var(--alert-border)',
        'alert-border-hover': 'var(--alert-border-hover)',
        'alert-solid': 'var(--alert-solid)',
        'alert-solid-hover': 'var(--alert-solid-hover)',
        'alert-text': 'var(--alert-text)',
        'alert-text-contrast': 'var(--alert-text-contrast)',
        'alert-on-alert': 'var(--alert-on-alert)',
      },

      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },

      fontSize: {
        xxs: [
          '0.5625rem',
          {
            lineHeight: '0.75rem',
            letterSpacing: '-0.00563rem',
          },
        ],
        input: ['0.9375rem', { lineHeight: '1.5rem' }],
        badge: ['0.625rem', { lineHeight: '1rem' }],
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [import('tailwindcss-animate'), import('tailwind-scrollbar-hide'), import('tailwind-scrollbar-hide')],
};
