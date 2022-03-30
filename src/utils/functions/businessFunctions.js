import constants from '~utils/constants'

const { RESTRICTIONS, STORAGE_ITEMS, WORDS } = constants

export default () => null

/**
 * checkAccess.
 *
 * @param {Object} param
 * @param {string} param.restricted
 * @param {Object} param.user
 */
export function checkAccess({ restricted, user }) {
  if (restricted === RESTRICTIONS.AUTHENTICATED) return !!user.username
  return false
}

/**
 * translate
 * @param {String} word : refer to the key of the WORDS langage value set in constants
 * @example: t`SIGNUP` or t('SIGNUP')
 * @return {String} word translated
 *
 */
export function translate(word) {
  const lang = localStorage.getItem(STORAGE_ITEMS.LANGUAGE)
  return WORDS[lang]?.VALUES[word] || `[not translated word: ${word}]`
}
