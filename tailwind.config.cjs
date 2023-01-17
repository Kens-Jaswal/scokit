/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.625rem', /* 12px */
        'sm': '0.75rem', /* 12px */
        'base': '0.875rem', /* 14px */
        'lg': '1rem', /* 16px */
        'xl': '1.125rem', /* 18px */
        '2xl': '1.375rem' /* 22px */
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5ae182",
          "secondary": "#f23769",
          "accent": "#2b41d1",

          "neutral": "#19141F",
          "neutral-content": "#b4b4b4",

          "base-100": "#ffffff",
          "base-200": "#e8f9ff",

          "info": "#4696F1",
          "success": "#3fde92",
          "warning": "#F09D0F",
          "error": "#f63642",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}