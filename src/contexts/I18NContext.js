import React from 'react'
import constants from '~utils/constants'

const { STORAGE_ITEMS, WORDS } = constants
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

  const getLanguage = () => localStorage.getItem(STORAGE_ITEMS.LANGUAGE)

  const changeLanguage = React.useCallback((language) => {
    setLangage(language)
    localStorage.setItem(STORAGE_ITEMS.LANGUAGE, language)
  }, [])

  const value = {
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
    words: WORDS[langage].VALUES,
    /**
     * setEnglish
     * @function
     * @desc ::: set the translation to English
     *
     */
    setEnglish() {
      if (langage !== WORDS.ENGLISH.NAME) changeLanguage(WORDS.ENGLISH.NAME)
    },
    /**
     * setFrench
     * @function
     * @desc ::: set the translation to French
     *
     */
    setFrench() {
      if (langage !== WORDS.FRENCH.NAME) changeLanguage(WORDS.FRENCH.NAME)
    },
  }

  React.useEffect(() => {
    const lang = getLanguage()
    if (!lang) {
      changeLanguage(WORDS.FRENCH.NAME)
    }
  }, [changeLanguage])

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

/**
 * withI18NWords
 * @function
 * @decorator
 * @desc ::: add translated words object  to the component
 * @param {React Component} Component
 * @return {React Component}
 *
 */
export const withI18NWords = (Component) => (props) => {
  const { words } = useI18N()
  return <Component {...props} words={words} />
}

export default I18NProvider
