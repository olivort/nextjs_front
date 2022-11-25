/** @type {import('tailwindcss').Config} */
const tailwindColors  = require('tailwindcss/colors')

function dynamicHsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
      if (opacityValue !== undefined) {
          return `hsla(${h}, ${s}, ${l}, ${opacityValue})`
      }
      if (opacityVariable !== undefined) {
          return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`
      }
      return `hsl(${h}, ${s}, ${l})`
  }
}

function pallete(color) {

  const h = `var(--color-${color}-h)`
  const s = `var(--color-${color}-s)`
  const l = `var(--color-${color}-l)`

  return {
    DEFAULT: dynamicHsl(h, s, l),
    100: dynamicHsl(h, s, `calc(${l} + 30%)`),
    200: dynamicHsl(h, s, `calc(${l} + 24%)`),
    300: dynamicHsl(h, s, `calc(${l} + 18%)`),
    400: dynamicHsl(h, s, `calc(${l} + 12%)`),
    500: dynamicHsl(h, s, `calc(${l} + 6%)`),
    600: dynamicHsl(h, s, l),
    700: dynamicHsl(h, s, `calc(${l} - 6%)`),
    800: dynamicHsl(h, s, `calc(${l} - 12%)`),
    900: dynamicHsl(h, s, `calc(${l} - 18%)`),
  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  //!! to be deleted if no dynamic color from backend
  // variants to be adjusted to the used modifiers
  /*safelist: [
    {
      pattern: /.*-(neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['md', 'md:hover'],
    },
  ],*/
  theme: {
    extend: {
      colors: {
        primary: tailwindColors.green,
        one:tailwindColors.blue,
        two:tailwindColors.red,
        three:tailwindColors.indigo,
        four:tailwindColors.amber,
        five:tailwindColors.blue,
        six:tailwindColors.blue,
        seven:tailwindColors.blue,
        eight:tailwindColors.blue,
        nine:tailwindColors.blue,
        ten:tailwindColors.blue,
        //see CSS variables in styles/globals
        custom1:'rgb(var(--color-custom1) / <alpha-value>)',
        custom2: pallete('custom2'),
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}
