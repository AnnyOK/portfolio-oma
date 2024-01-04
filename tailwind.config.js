/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '200px',  // Example custom size for extra-small screens
        'sm': '250px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add your custom sizes here
      },
    },
  },
  plugins: [
    
  ],
}

