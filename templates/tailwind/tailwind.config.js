module.exports = {
  // Change to where the template files are in your project.
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // For Rails.
  // purge: ['./app/**/*.html.erb','./app/helpers/**/*.rb','./app/javascript/**/*.js']
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#CFB87C',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
