import React from 'react'

/**
 * useScroll
 * @hook
 *
 * @desc :: Event handler on scroll
 * @param {Object} params
 *  - {Number} params.trigger
 *  - {Dom} params.ref
 *  - {Number} params.step
 * @return {Object}
 *
 */
function useScroll(params) {
  const { trigger = 50, ref = document, step = 5 } = params
  const [value, setValue] = React.useState(0)
  React.useEffect(() => {
    const current = ref.current || ref
    const toggleScroll = (e) => {
      const scrollValue = e.srcElement.scrollTop
      const gap = Math.abs(Math.abs(scrollValue) - Math.abs(value))
      if (gap >= step) {
        setValue(scrollValue)
      }
    }
    current.addEventListener('scroll', toggleScroll)
    return () => current.removeEventListener('scroll', toggleScroll)
  })
  return {
    isScrolling: value > trigger,
    getOffsetY() {
      return value
    },
  }
}
export default useScroll
