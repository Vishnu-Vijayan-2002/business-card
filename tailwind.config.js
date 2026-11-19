/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          950: '#030814',
          900: '#071022',
          850: '#0b162c',
          800: '#0f223f',
          700: '#16315c',
          blue: '#1E60FF',
          blueDark: '#0A40C4',
          cyan: '#00D2FF',
          accent: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'tech-pattern': 'radial-gradient(rgba(30, 96, 255, 0.15) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
