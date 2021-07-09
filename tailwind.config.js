/* eslint-disable */
const colors = require('tailwindcss/colors')
const between = require('polished').between

const neutral100 = '#FFFFFF'
const neutral91 = '#F6F6F6'
const purple57 = '#88839F'
const purple29 = '#3D3560'
const purple14 = '#120740'
const neutral0 = '#000000'
const blue28 = '#250F80'
const blue50 = '#4403FE'
const blue95 = '#EDE8FF'
const purple30 = '#5B2473'
const purple59 = '#B748E6'
const purple96 = '#F8EDFC'
const blue20 = '#005D69'
const blue41 = '#00B9D3'
const blue94 = '#E5F8FB'
const green50 = '#D9FC01'
const orange58 = '#FF6929'
const yellow50 = '#FFB800'
const green32 = '#02A302'
const red58 = '#DA4C54'


// tailwind.config.js
module.exports = {
  // mode: 'jit',
  purge: [
    './**/*.vue',
    './node_modules/holo-design-system-vue/src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      brand: {
        // New
        'default': blue50,
        'dark': blue28,
        'light': blue95
      },
      utility: {
        'positive': green32,
        'critical': red58,
        'warning': yellow50,
        'info': purple14
      }
    },
    fontFamily: {
      sans: ['Neue Haas', 'sans-serif'],
      'sans-alt': ['Neue Haas Grotesk', 'sans-serif'],
      serif: ['Editorial New', 'serif'],
    },
    fontSize: {
      '5xl': between('64px', '132px', '400px', '1200px'),
      '4xl': between('40px', '96px', '400px', '1200px'),
      '3xl': between('32px', '64px', '400px', '1200px'),
      '2xl': between('28px', '40px', '400px', '1200px'),
      'xl': between('24px', '32px', '400px', '1200px'),
      'lg': between('20px', '24px', '400px', '1200px'),
      'md': between('16px', '20px', '400px', '1200px'),
      'base': between('14px', '16px', '400px', '1200px'),
      'sm': between('14px', '14px', '400px', '1200px'),
      'xs': between('12px', '12px', '400px', '1200px')
    },
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1600px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
  important: true
}

/* eslint-enable */