/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // KBTG Brand Colors - Web Green Palette
        'web-green': {
          50: '#e6f6ee',
          100: '#bcf0d8',
          200: '#8ce9c1',
          300: '#5ce3aa',
          400: '#2bdb93',
          500: '#00A950',  // Main Green (Buttons, Active states)
          600: '#009947',  // Darker Green (Header)
          700: '#00803c',
          800: '#006630',
          900: '#004d24',
        },
        // Override default green with KBTG green
        'green': {
          50: '#e6f6ee',
          100: '#bcf0d8',
          200: '#8ce9c1',
          300: '#5ce3aa',
          400: '#2bdb93',
          500: '#00A950',
          600: '#009947',
          700: '#00803c',
          800: '#006630',
          900: '#004d24',
        },
        // Functional Colors
        'success': '#00A950',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
        // Neutral & Grayscale Colors
        'neutral': {
          50: '#F5F7F8',    // Page Background
          100: '#F3F4F6',
          200: '#E5E7EB',   // Borders and Dividers
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',   // Secondary Text
          600: '#4B5563',
          700: '#374151',   // Primary Body Text
          800: '#333D47',   // Footer Background
          900: '#111827',   // Darkest Text
        },
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '24': '6rem',     // 96px
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      borderRadius: {
        'sm': '0.25rem',    // 4px
        'md': '0.5rem',     // 8px, used for buttons and cards
        'lg': '0.75rem',    // 12px, for larger cards
        'xl': '1rem',       // 16px
        'full': '9999px',   // For circular elements
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)', // A subtle shadow for cards
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}