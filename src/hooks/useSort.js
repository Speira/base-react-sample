import React from 'react'

/**
 * useSort
 * @hook
 */
function useSort(defaultSort = 'order') {
  const [field, setField] = React.useState(defaultSort)
  const [isSortInversed, setInversedState] = React.useState(false)

  return {
    sort(a, b) {
      if (isSortInversed) return b[field] - a[field]
      return a[field] - b[field]
    },
    handleSort(nextField) {
      if (nextField === field) {
        setInversedState(!isSortInversed)
      } else {
        setField(nextField)
        setInversedState(false)
      }
    },
  }
}

export default useSort
