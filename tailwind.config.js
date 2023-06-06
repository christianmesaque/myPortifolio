/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-roboto-flex)',
      },

      colors: {
        white: {
          100: '#FFFFFF',
          200: '#EFF8FF',
        },
        gray: {
          100: '#6E7275',
          200: '#293145',
        },
        blue: {
          100: '#0F9AFE',
        },
      }
    },
  },
  plugins: [],
}
