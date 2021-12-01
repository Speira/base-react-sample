import React from 'react'
import constants from '~utils/constants'

const { WORDS } = constants
const I18NContext = React.createContext()

/**
 * I18NProvider
 * @desc Provide an internationalization words system
 * @component
 * @context
 *
 */
function I18NProvider(props) {
  const [langage, setLangage] = React.useState(WORDS.FRENCH.NAME)
  const value = {
    words: WORDS[langage].VALUES,
    setEnglish() {
      if (langage !== WORDS.ENGLISH.NAME) setLangage(WORDS.ENGLISH.NAME)
    },
    setFrench() {
      if (langage !== WORDS.FRENCH.NAME) setLangage(WORDS.FRENCH.NAME)
    },
    /**
     * areWordsSet
     * @function
     * @desc ::
     *     Check if all the translations are indicated in each langages
     * @return Boolean
     *
     */
    areWordsSet() {
      const arrayWords = Object.values(WORDS)
      return arrayWords.reduce((acc, cur, index) => {
        if (acc === false) return false
        const accStr = JSON.stringify(Object.keys(acc.VALUES))
        const curStr = JSON.stringify(Object.keys(cur.VALUES))
        if (accStr === curStr) {
          return index === arrayWords.length - 1 ? true : cur
        }
        return false
      })
    },
  }

  return <I18NContext.Provider {...props} value={value} />
}

/**
 * useI18N
 * @return context
 *
 */
export const useI18N = () => {
  const context = React.useContext(I18NContext)
  if (!context) throw new Error('I18NContext must be called in I18NProvider')
  return context
}
export default I18NProvider
