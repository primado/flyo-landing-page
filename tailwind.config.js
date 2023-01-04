/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    colors: {
      // Configure your color palette here

      veryDarkBlue: "hsl(243, 87%, 12%)",
      desaturatedBlue: "hsl(238, 22%, 44%)",
      brightBlue: "hsl(224, 93%, 58%)",
      moderateCyan: "hsl(170, 45%, 43%)",
      lightGrayishBlue: "hsl(240, 75%, 98%)",
      lightGray: "hsl(0, 0%, 75%)",
      form_border: "#000000",

    },

    fontFamily: {
      // Configure your font family here
      'raleway': ['"Raleway"', 'sans-serif'],
      'open_sands': ['"Open Sans"', 'sans-serif']

    },

    boxShadow: {
      // Configure your box-shadow here
      "comment-shadow": "5px 1px 22px -1px rgba(194,194,194,1)",

    },


    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
