import React from 'react'
import Alert from '~components/Alert'
import { createAlert } from '~utils/functions'

/**
 * useAlert
 * @hook
 * @return {Object}
 *         {Function} Object.createAlert | An alert builder
 *                  {String} Object.setAlert.message | Alert content
 *                  {String ?} Object.setAlert.title | Alert title
 *                  {String} Object.setAlert.status | define the color of the alert
 *         {Function} clearAlert | An alert cleaner
 *         {Component} HookAlert | it display the Alert (it does not need any argument)
 *
 */
function useAlert() {
  const [alert, setAlert] = React.useState(createAlert())
  const closeAlert = () => setAlert(createAlert())

  React.useEffect(() => {
    return () => closeAlert()
  }, [])

  return {
    setAlert(params) {
      setAlert(createAlert(params))
    },
    clearAlert: closeAlert,
    HookAlert: (alertProps) => (
      <Alert {...alertProps} onClose={closeAlert} {...alert} />
    ),
  }
}

export default useAlert
