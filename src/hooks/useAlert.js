import React from 'react';
import Alert from '~components/Alert';
import CONSTANTS from '~utils/constants';

const { ALERTS } = CONSTANTS;
const { DEFAULT, IS_MISSING, IS_INCORRECT, IS_LOADING } = ALERTS;

/**
 * useAlert
 * @component
 *
 */
function useAlert() {
  const [alert, setAlert] = React.useState(DEFAULT);
  const closeAlert = () => setAlert(DEFAULT);
  return {
    alertMissing: () => setAlert(IS_MISSING),
    alertLoading: () => setAlert(IS_LOADING),
    alertIncorrect: () => setAlert(IS_INCORRECT),
    clearAlert: closeAlert,
    HookAlert: (alertProps) => (
      <Alert {...alertProps} onClose={closeAlert} {...alert} />
    ),
  };
}

export default useAlert;
