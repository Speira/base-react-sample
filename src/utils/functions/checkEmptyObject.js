/**
 * checkIsObjectEmpty.
 *
 * @param {} object
 */
function checkIsObjectEmpty(object) {
  if (!(object instanceof Object)) return false
  return !!Object.values(object).length
}

export default checkIsObjectEmpty
