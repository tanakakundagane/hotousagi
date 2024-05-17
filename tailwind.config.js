/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#b49531',
        customGreen: 'rgb(177, 217, 174)',
        darkGreen: '#218838'
      },
      backgroundImage: {
        'custom-image': "url('/images/hasikei.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
        'xxxs': '0.5rem', // 8px
      },
    },
  },
  plugins: [],
}
