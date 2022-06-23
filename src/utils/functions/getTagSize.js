/**
 * getTagSize
 * @param {String} tag
 * @desc :: return the size corresponding to the html tag (h1 etc...)
 *
 */
export default function getTagSize(tag = '') {
  if (tag === 'h1') return '3em'
  if (tag === 'strong') return '1.5em'
  return '1em'
}
