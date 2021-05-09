module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {

        '2000': '2500ms',

        '2000': '2000ms',
      },
      animation: {

        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {

        wiggle: {

          '0%, 100%': { transform: 'rotate(-20deg)' },

          '50%': { transform: 'rotate(20deg)' },

        }
       },
       spacing: {
        '396': '78.9rem',

      }
    },
  },
  variants: {
    extend: {
      scale : ['group-hover'],
    },
  },
  plugins: [],
}
