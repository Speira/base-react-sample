/**
 * checkEmptyObject.
 *
 * @param {} object
 */
export default function checkEmptyObject(object) {
  if (!(object instanceof Object)) return false
  return !!Object.values(object).length
}
