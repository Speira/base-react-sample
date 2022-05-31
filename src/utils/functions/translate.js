import constants from '~utils/constants'

const { STORAGE_ITEMS, WORDS } = constants

/**
 * translate
 * @param {String} word : refer to the key of the WORDS langage value set in constants
 * @example: t`SIGNUP` or t('SIGNUP')
 * @return {String} word translated
 *
 */
export default function translate(word) {
  const lang = localStorage.getItem(STORAGE_ITEMS.LANGUAGE)
  return WORDS[lang]?.VALUES[word] || `[not translated word: ${word}]`
}
