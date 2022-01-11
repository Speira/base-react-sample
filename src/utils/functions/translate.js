import constants from '~utils/constants'

const { WORDS } = constants
/**
 * translate
 * @param {String} word : refer to the key of the WORDS langage value set in constants
 * @return {String} word translated
 *
 */
function translate(word) {
  const lang = localStorage.getItem(STORAGE_ITEMS.LANGUAGE)
  return WORDS[lang]?.VALUES[word] || ''
}

export default translate
