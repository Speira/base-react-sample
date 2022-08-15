import { createGlobalStyle } from 'styled-components'
import { lightenColor } from '~utils/functions'
import constants from '~utils/constants'

const { MEDIA_QUERIES } = constants

/**
 * GlobalStyle
 *
 * @desc ::
 *      The main file for style, it defines all global classes used across the
 *      app via styled components
 *
 */
const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body * {
    box-sizing: border-box;
  }

  a:visited {
    text-decoration: none;
  }

  /* ******************************************************************* */
  /* ***********************  Vars declaration  ************************ */
  /*         NB: The bg-text-color are created to be adapted             */
  /*           to the bg color, it is  meant to be overrided             */
  /* ******************************************************************* */

  :root{
    --media-sm: 600px;
    --media-md: 768px;
    --media-lg: 992px;
    --media-xl: 1200px;

    --color-primary: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
    --color-secondary: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
    --color-tertiary: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
    --color-quaternary: ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
    --color-light: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    --color-dark: ${({ theme }) => theme.COLORS.STATIC.DARK};
    --color-light-dark: ${({ theme }) =>
      lightenColor(theme.COLORS.STATIC.DARK)};

    --color-info: ${({ theme }) => theme.COLORS.DYNAMIC.INFO};
    --color-success: ${({ theme }) => theme.COLORS.DYNAMIC.SUCCESS};
    --color-warning: ${({ theme }) => theme.COLORS.DYNAMIC.WARNING};
    --color-danger: ${({ theme }) => theme.COLORS.DYNAMIC.DANGER};

    --color-light-info: ${({ theme }) =>
      lightenColor(theme.COLORS.DYNAMIC.INFO, 0.2)};
    --color-light-success: ${({ theme }) =>
      lightenColor(theme.COLORS.DYNAMIC.SUCCESS, 0.2)};
    --color-light-warning: ${({ theme }) =>
      lightenColor(theme.COLORS.DYNAMIC.WARNING, 0.2)};
    --color-light-danger: ${({ theme }) =>
      lightenColor(theme.COLORS.DYNAMIC.DANGER, 0.2)};

    --bg-text-color: var(--color-dark);
  }


  /* ****************************************************** */
  /* *********************  BG color  ********************* */
  /* ****************************************************** */

  .bg-primary {
    background-color: var(--color-primary);
  }
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  .bg-tertiary {
    background-color: var(--color-tertiary);
  }
  .bg-quaternary {
    background-color: var(--color-quaternary);
  }
  .bg-dark {
    background-color: var(--color-dark);
  }
  .bg-light {
    background-color: var(--color-light);
  }

  .bg-info {
    background-color: var(--color-info);
    --bg-text-color: var(--color-light);
  }
  .bg-success {
    background-color: var(--color-success);
    --bg-text-color: var(--color-light);
  }
  .bg-warning {
    background-color: var(--color-warning);
    --bg-text-color: var(--color-light);
  }
  .bg-danger {
    background-color: var(--color-danger);
    --bg-text-color: var(--color-light);
  }

  .bg-light-info {
    background-color: var(--color-light-info);
    --bg-text-color: var(--color-info);
  }
  .bg-light-success {
    background-color: var(--color-light-success);
    --bg-text-color: var(--color-success);
  }
  .bg-light-warning {
    background-color: var(--color-light-warning);
    --bg-text-color: var(--color-warning);
  }
  .bg-light-danger {
    background-color: var(--color-light-danger);
    --bg-text-color: var(--color-danger);
  }


  /* ***************************************************** */
  /* *******************  Text color  ******************** */
  /* ***************************************************** */

  .text-primary { color: var(--color-primary); }
  .text-secondary { color: var(--color-secondary); }
  .text-tertiary { color: var(--color-tertiary); }
  .text-quaternary { color: var(--color-quaternary); }
  .text-dark { color: var(--color-dark); }
  .text-light { color: var(--color-light); }
  .text-info { color: var(--color-info); }
  .text-success { color: var(--color-success); }
  .text-warning { color: var(--color-warning); }
  .text-danger { color: var(--color-danger); }

  /* ********************************************************** */
  /* **********************  box style  *********************** */
  /* ********************************************************** */

  .padding { padding: 0.5em 3%; }
  .margin { margin: 0.5em; }
  .margin-auto { margin: auto; }
  .full-width { width: 100%; }
  .full-height { height: 100%; }
  .radius {border-radius: 4px;}
  .shadow-top-right { box-shadow: 2px -2px 4px -2px var(--bg-text-color);}
  .box {
     border-radius: 4px;
     padding: 0.5em 3%;
     margin: 0.5em;
  }
  .relative {
    position: relative;
  }

  /* ******************************************************** */
  /* ******************  Text orientation  ****************** */
  /* ******************************************************** */

 .text-center { text-align: center; }
 .text-left { text-align: left; }
 .text-right { text-align: center; }
 .float-left { float: left;}
 .float-right { float: right;}

  /* ******************************************************** */
  /* *******************  flexbox classes  ****************** */
  /* ******************************************************** */

  .flex { display: flex; }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
 .justify-content-center { justify-content: center; }
 .justify-content-start { justify-content: flex-start; }
 .justify-content-end { justify-content: flex-end; }
 .justify-content-around { justify-content: space-around; }
 .justify-content-between { justify-content: space-between; }
 .justify-content-evenly { justify-content: space-evenly; }
 .align-items-center { align-items: center; }
 .align-items-start { align-items: flex-start; }
 .align-items-end { align-items: flex-end; }
 .align-items-around { align-items: space-around; }
 .align-items-between { align-items: space-between; }
 .align-items-evenly { align-items: space-evenly; }
 .align-content-center { align-content: center; }
 .align-content-start { align-content: flex-start; }
 .align-content-end { align-content: flex-end; }

  /* ******************************************************** */
  /* *********************  grid classes  ******************* */
  /* ******************************************************** */

  .grid-auto-rows {
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 1em;
  }

  /* ******************************************************** */
  /* *********************  respponsive   ******************* */
  /* ******************************************************** */

  @media only screen and (max-width: ${MEDIA_QUERIES.SM}){
    .hide-xs { display: none; }
  }

  @media only screen and (min-width: ${MEDIA_QUERIES.SM}){
    .hide-after-xs { display: none; }
  }
`

export default GlobalStyle
