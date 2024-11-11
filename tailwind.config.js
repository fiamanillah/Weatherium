import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      screens: {
        'desktop-xl': { max: '1535px' },
        'laptop-xl': { max: '1279px' },
        'tablet-lg': { max: '1023px' },
        'mobile-lg': { max: '767px' },
        'mobile-sm': { max: '639px' },
      },
      colors: {
        // Light Mode Colors
        background: '#f2f7ff',
        primary: '#1e293b',
        secondary: '#64748b',
        accent: '#3b82f6',
        info: '#38bdf8',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        lightPrimaryText: '#1e293b',
        lightSecondaryText: '#475569',
        lightCard: '#ffffff',
        lightCardSecondary: "#ebf2ff",
        lightCardHover: "#f2f7ff",

        // Dark Mode Colors
        darkBackground: '#0a101c',
        darkCard: '#212b3b',
        darkCardSecondary: "#1a2333",
        darkCardHover: "#3a414d",
        darkPrimary: '#f1f5f9',
        darkSecondary: '#94a3b8',
        darkAccent: '#60a5fa',
        darkInfo: '#38bdf8',
        darkSuccess: '#4ade80',
        darkWarning: '#fbbf24',
        darkDanger: '#f87171',
        darkPrimaryText: '#e2e8f0',
        darkSecondaryText: '#cbd5e1',

        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },



      typography: {
        DEFAULT: {
          css: {
            // Remove default margin and padding for all elements
            '*': {
              margin: '0',
              padding: '0',
            },
            // Light Mode typography
            color: '#1e293b', // Light mode primary text color
            '[class~="dark"] &': {
              color: '#e2e8f0', // Dark mode primary text color
            },
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#60a5fa',
              },
            },
            h1: {
              margin: '0',
              padding: '0',
              color: '#1e293b', // Light mode heading color
              '[class~="dark"] &': {
                color: '#e2e8f0', // Dark mode heading color
              },
            },
            h2: {
              margin: '0',
              padding: '0',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
            h3: {
              margin: '0',
              padding: '0',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
            h4: {
              margin: '0',
              padding: '0',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
            h5: {
              margin: '0',
              padding: '0',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
            h6: {
              margin: '0',
              padding: '0',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
            p: {
              margin: '0',
              padding: '0',
              color: '#475569', // Light mode secondary text
              '[class~="dark"] &': {
                color: '#cbd5e1', // Dark mode secondary text
              },
            },
            strong: {
              margin: '0',
              padding: '0',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
            span: {
              // "font-size": "0.8rem",
              margin: '0',
              padding: '0',
              color: '#475569', // Light mode secondary text
              '[class~="dark"] &': {
                color: '#cbd5e1', // Dark mode secondary text
              },
            },
            ul: {
              margin: '0',
              padding: '0',
              listStyleType: 'none', // Remove default list styling
            },
            ol: {
              margin: '0',
              padding: '0',
              listStyleType: 'none',
            },
            li: {
              margin: '0',
              padding: '0',
              color: '#475569', // Light mode secondary text
              '[class~="dark"] &': {
                color: '#cbd5e1', // Dark mode secondary text
              },
            },
            blockquote: {
              margin: '0',
              padding: '0',
              color: '#475569',
              '[class~="dark"] &': {
                color: '#cbd5e1',
              },
            },
            code: {
              margin: '0',
              padding: '0',
              color: '#3b82f6',
            },
            pre: {
              margin: '0',
              padding: '0',
              backgroundColor: '#f3f4f6',
              '[class~="dark"] &': {
                backgroundColor: '#1f2937',
              },
            },
            table: {
              margin: '0',
              padding: '0',
              borderCollapse: 'collapse',
            },
            th: {
              margin: '0',
              padding: '0',
              textAlign: 'left',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
            td: {
              margin: '0',
              padding: '0',
              color: '#1e293b',
              '[class~="dark"] &': {
                color: '#e2e8f0',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
