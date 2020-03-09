import React from 'react';
import PropTypes from 'prop-types';

import Alert from '~components/Alert';

const ALERTS = {
  DEFAULT: {
    message: '',
    type: 'info',
    isOpen: false,
  },
  LOADING: {
    message: 'Authentification en cours ...',
    type: 'info',
    isOpen: true,
  },
  LOGIN: {
    message: 'Identifiants incorrects',
    type: 'danger',
    isOpen: true,
  },
};

/**
 * AuthAlert
 * @component
 *
 */
function AuthAlert(props) {
  const { hasLoginError, isLoading } = props;
  const [alert, setAlert] = React.useState(ALERTS.DEFAULT);
  React.useEffect(() => {
    if (hasLoginError) setAlert(ALERTS.LOGIN);
    if (isLoading) setAlert(ALERTS.LOADING);
  }, [hasLoginError, isLoading]);
  return <Alert {...alert} />;
}
AuthAlert.defaultProps = {
  hasLoginError: false,
  isLoading: false,
};
AuthAlert.propTypes = {
  hasLoginError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default AuthAlert;
