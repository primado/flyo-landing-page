/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    colors: {
      // Configure your color palette here

      veryDarkBlue: "hsl(243, 87%, 12%)",
      desaturatedBlue: "hsl(238, 22%, 44%)",
      brightBlue: "hsl(224, 93%, 58%)",
      brightBlue_100: "#314cff",
      moderateCyan: "hsl(170, 45%, 43%)",
      lightGrayishBlue: "hsl(240, 75%, 98%)",
      lightGray: "hsl(0, 0%, 75%)",
      form_border: "#000000",

    },

    backgroundImage: {
      // Configure your background image here
      "bg-curve": "url('/images/bg-curve-desktop.svg')",
    
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

    screens: {
      // Configure your responsive design here

      'sm': {'max': '640px'},

      'sm-428': {max: '435px'},
      'sm-412': {max: '417px'},
      'sm-390': {max: '400px'},
      'sm-384': {max: '390px'},
      'sm-375': {max: '380px'}, 
      'sm-360': {max: '365px'},
      '2sm': {max: '414px'},

      'md-810': {max: '820px'},

      'md': {max: '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {max: '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {max: '1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {max: '1536px'},
      // => @media (min-width: 1536px) { ... }
    },

   // animation bounce in tailwind css in 5ms
    animation: {
      'bounce': 'bounce 4s infinite',
    },
    keyframes: {
      bounce: {
        '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
        '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
      },
    },

    extend: {},

  },


  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
