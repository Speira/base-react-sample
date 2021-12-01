import React from 'react'

/**
 * useTimeoutOverride
 * @hook
 * @desc :: use the latest timer to call the callback
 * @return {Object}:: containing:
 *  - overrideTimeout: init or reinit the timeoout each time the function
 *                     is called, call the callback if the function is not
 *                     called whitin the timer.
 *  - cancelTimeout: force the reset of the timeout, cancel the call of the
 *                  callback (usefull for prevent unwanted behaviors after the
 *                  last occurence of the overrideTimeout)
 *
 *
 */
function useTimeoutOverride() {
  const [savedTimer, setSavedTimer] = React.useState(null)

  const cancelTimeout = () => clearTimeout(savedTimer)

  const overrideTimeout = ({ callback, timer }) => {
    if (savedTimer) cancelTimeout()
    const nextTimer = setTimeout(callback, timer)
    setSavedTimer(nextTimer)
  }

  return { overrideTimeout, cancelTimeout }
}

export default useTimeoutOverride
