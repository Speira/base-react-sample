import React from 'react'

/**
 * useLocation
 * @hook
 * @deprecated :: use useLocation from the package react router dom instead
 *
 */
function useLocation() {
  const { pathname } = document.location
  const [location, setLocation] = React.useState(pathname)
  React.useEffect(() => {
    setLocation(document.location.pathname)
  }, [pathname])
  return {
    location,
  }
}

export default useLocation
