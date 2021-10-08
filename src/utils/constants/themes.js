/** themes */
import DefaultTheme from '~utils/constructors/DefaultTheme'

export default {
  DEFAULT: new DefaultTheme({
    templateColors: ['#e7eaf6', '#a2a8d3', '#38598b', '#113f67'],
    writtingColors: {
      fore: '#000000b3',
      back: '#fffdfb',
    },
    statusColors: {
      info: '#a1eafb',
      success: '#cfee91',
      warning: '#fcc88a',
      danger: '#f59292',
    },
    fontSizes: ['8px', '12px', '16px', '20px', '24px', '28px'],
  }),
  /*
   * here is an exemple of a theme where a only want to change the template colors
   * but keep the same font sizes, status colors etc ...
  EXEMPLE: new DefaultTheme({
    templateColors: ['blue', 'green', 'yellow', 'black'],
  })
  */
}
