/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Academic Blue
        primary: {
          DEFAULT: '#1E3A8A', // blue-900
          50: '#EFF6FF', // blue-50
          100: '#DBEAFE', // blue-100
          200: '#BFDBFE', // blue-200
          300: '#93C5FD', // blue-300
          400: '#60A5FA', // blue-400
          500: '#3B82F6', // blue-500
          600: '#2563EB', // blue-600
          700: '#1D4ED8', // blue-700
          800: '#1E40AF', // blue-800
          900: '#1E3A8A', // blue-900
          foreground: '#FFFFFF', // white
        },
        // Secondary Colors - Bright Interactive Blue
        secondary: {
          DEFAULT: '#3B82F6', // blue-500
          50: '#EFF6FF', // blue-50
          100: '#DBEAFE', // blue-100
          200: '#BFDBFE', // blue-200
          300: '#93C5FD', // blue-300
          400: '#60A5FA', // blue-400
          500: '#3B82F6', // blue-500
          600: '#2563EB', // blue-600
          700: '#1D4ED8', // blue-700
          foreground: '#FFFFFF', // white
        },
        // Accent Colors - Achievement Amber
        accent: {
          DEFAULT: '#F59E0B', // amber-500
          50: '#FFFBEB', // amber-50
          100: '#FEF3C7', // amber-100
          200: '#FDE68A', // amber-200
          300: '#FCD34D', // amber-300
          400: '#FBBF24', // amber-400
          500: '#F59E0B', // amber-500
          600: '#D97706', // amber-600
          700: '#B45309', // amber-700
          foreground: '#1F2937', // gray-800
        },
        // Background Colors
        background: {
          DEFAULT: '#F8FAFC', // slate-50
          secondary: '#F1F5F9', // slate-100
        },
        // Surface Colors
        surface: {
          DEFAULT: '#FFFFFF', // white
          elevated: '#FFFFFF', // white
        },
        // Text Colors
        text: {
          primary: '#1F2937', // gray-800
          secondary: '#6B7280', // gray-500
          tertiary: '#9CA3AF', // gray-400
          disabled: '#D1D5DB', // gray-300
        },
        // Semantic Colors
        success: {
          DEFAULT: '#10B981', // green-500
          50: '#ECFDF5', // green-50
          100: '#D1FAE5', // green-100
          500: '#10B981', // green-500
          600: '#059669', // green-600
          foreground: '#FFFFFF', // white
        },
        warning: {
          DEFAULT: '#F59E0B', // amber-500
          50: '#FFFBEB', // amber-50
          100: '#FEF3C7', // amber-100
          500: '#F59E0B', // amber-500
          600: '#D97706', // amber-600
          foreground: '#1F2937', // gray-800
        },
        error: {
          DEFAULT: '#EF4444', // red-500
          50: '#FEF2F2', // red-50
          100: '#FEE2E2', // red-100
          500: '#EF4444', // red-500
          600: '#DC2626', // red-600
          foreground: '#FFFFFF', // white
        },
        // Border Colors
        border: {
          DEFAULT: '#E2E8F0', // slate-200
          light: '#F1F5F9', // slate-100
          dark: '#CBD5E1', // slate-300
        },
        // Focus Ring
        'focus-ring': '#3B82F6', // blue-500
      },
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.45', letterSpacing: '0.025em' }],
        sm: ['0.9375rem', { lineHeight: '1.65' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lg: ['1.125rem', { lineHeight: '1.4' }],
        xl: ['1.375rem', { lineHeight: '1.3' }],
        '2xl': ['1.75rem', { lineHeight: '1.25' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
        '4xl': ['2.75rem', { lineHeight: '1.15' }],
      },
      spacing: {
        xs: '0.375rem', // 6px
        sm: '0.75rem', // 12px
        md: '1.125rem', // 18px
        lg: '1.5rem', // 24px
        xl: '2.25rem', // 36px
        '2xl': '3rem', // 48px
        '3xl': '4.5rem', // 72px
        '4xl': '6rem', // 96px
        '5xl': '9rem', // 144px
      },
      borderRadius: {
        sm: '0.375rem', // 6px
        DEFAULT: '0.75rem', // 12px
        md: '0.75rem', // 12px
        lg: '1.125rem', // 18px
        xl: '1.5rem', // 24px
      },
      boxShadow: {
        sm: '0 2px 4px rgba(15, 23, 42, 0.08)',
        DEFAULT: '0 3px 6px rgba(15, 23, 42, 0.10)',
        md: '0 6px 12px rgba(15, 23, 42, 0.12)',
        lg: '0 12px 24px rgba(15, 23, 42, 0.15)',
        xl: '0 24px 48px rgba(15, 23, 42, 0.18)',
        '2xl': '0 32px 64px -12px rgba(15, 23, 42, 0.18)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
        slow: '350ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      zIndex: {
        base: '0',
        card: '1',
        dropdown: '50',
        navigation: '100',
        modal: '200',
        toast: '300',
        loading: '400',
      },
      maxWidth: {
        prose: '70ch',
      },
      animation: {
        'in': 'fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'out': 'fadeOut 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slideIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-out': 'slideOut 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-out': 'scaleOut 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      ringWidth: {
        DEFAULT: '3px',
      },
      ringOffsetWidth: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}