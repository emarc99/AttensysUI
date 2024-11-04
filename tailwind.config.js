/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xlg': '1680px',
        clg: { min: '1440px', max: '1679px' },
        lclg: { min: '1280px', max: '1439px' },
        
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/assets/hero_asset.png')",
        'testimonial-gradient': 'linear-gradient(90deg, rgba(155, 81, 224, 0.2) 0%, rgba(74, 144, 226, 0.2) 100%)',
      }),
      boxShadow: {
        'custom-blue': '0px 4px 100px 0px rgba(74, 144, 226, 0.5)',
      },
    },
  },
  plugins: [],
})
