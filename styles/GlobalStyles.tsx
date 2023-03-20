import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles, theme } from 'twin.macro'

// This method of specifying global styles was recommended/provided by
// the docs of twin.macro, the library I use for combining tailwind with styled components
const CustomStyles = createGlobalStyle`
  @font-face {
    font-family: 'Paris';
    src: url('/fonts/paris.otf');
  }
  @font-face {
    font-family: 'Weiss';
    src: url('/fonts/weiss.otf');
  }
  @font-face {
    font-family: 'Weiss-Bold';
    src: url('/fonts/weiss-bold.otf');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    background: ${theme(`colors.bone`)}
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
