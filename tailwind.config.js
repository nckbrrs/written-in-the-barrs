/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    black: '#212121',
    bone: '#e9e9e9',
    darkTerracotta: '#A96D4F',
    lightTerracotta: '#c3996f',
    lightSky: '#7DBCD8',
    darkSky: '#4988A3'
  },
}

const fontFamily = {
  'sans': ["Helvetica Neue", "ui-sans-serif", "system-ui", "-apple-system", "Arial", "sans-serif"],
  'paris': 'Paris',
  'weiss': 'Weiss',
  'weiss-bold': 'Weiss-Bold'
  
}

const letterSpacing = {
  tightest: '-.075em',
  tighter: '-.05em',
  tight: '-.025em',
  tightish: '-0.01em',
  normal: '0',
  wide: '.025em',
  wider: '.05em',
  widest: '.1em',
  superwide: '0.375em'
}

const height = {
  screen:'calc(var(--vh) * 100)',
}

const minHeight = {
  screen: 'calc(var(--vh) * 100)'
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
      letterSpacing,
      height,
      minHeight
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true
  }
}
