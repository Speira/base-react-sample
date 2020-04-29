import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { useAuth } from '~contexts/AuthContext';
import useAlert from '~hooks/useAlert';
import DefaultUser from '~utils/constructors/DefaultUser';

import WrapperAuth from '~Auth/components/WrapperAuth';
import AuthButton from '~Auth/components/AuthButton';
import AuthForm from '~Auth/components/AuthForm';
import AuthInput from '~Auth/components/AuthInput';
import AuthTitle from '~Auth/components/AuthTitle';
import AuthLoading from '~Auth/components/AuthLoading';

import constants from '~utils/constants';

const { AUTH_PROFILE } = constants.PATHS;

/**
 * LoginContainer
 * @component
 *
 */
function LoginContainer(props) {
  const { signin } = useAuth();
  const { HookAlert, alertIncorrect, alertMissing } = useAlert();
  const { switchAuth, history } = props;
  const [tempUser, setTempUser] = React.useState(new DefaultUser());
  const [isLoading, toggleLoading] = React.useState(false);
  const setValue = (field, value) =>
    setTempUser(new DefaultUser({ ...tempUser, [field]: value }));
  const authenticateUser = () => {
    if (Object.values(tempUser).some((v) => v === '')) {
      return alertMissing();
    }
    toggleLoading(true);
    return signin(tempUser)
      .then(() => {
        history.push(AUTH_PROFILE);
      })
      .catch(() => {
        toggleLoading(false);
        alertIncorrect();
      });
  };
  if (isLoading) {
    return <AuthLoading messageLogin />;
  }
  return (
    <WrapperAuth>
      <div className="row">
        <AuthTitle>Authentication</AuthTitle>
      </div>
      <HookAlert />
      <AuthForm>
        <label>
          <span>Username:</span>
          <AuthInput
            value={tempUser.username}
            onChange={(e) => setValue('username', e.target.value)}
            placeholder="username"
          />
        </label>
        <label>
          <span>Password:</span>
          <AuthInput
            value={tempUser.password}
            onChange={(e) => setValue('password', e.target.value)}
            type="password"
            placeholder="password"
          />
        </label>
        <AuthButton className="center" onClick={authenticateUser} success>
          Validate
        </AuthButton>
      </AuthForm>
      <AuthButton className="center" onClick={switchAuth}>
        I don&apos;t have any account ?
      </AuthButton>
    </WrapperAuth>
  );
}
LoginContainer.propTypes = {
  switchAuth: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(LoginContainer);
