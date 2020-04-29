import React from 'react';
import PropTypes from 'prop-types';

import { useAuth } from '~contexts/AuthContext';
import useAlert from '~hooks/useAlert';
import DefaultUser from '~utils/constructors/DefaultUser';

import AuthButton from '~Auth/components/AuthButton';
import AuthForm from '~Auth/components/AuthForm';
import AuthInput from '~Auth/components/AuthInput';
import AuthLoading from '~Auth/components/AuthLoading';
import AuthTitle from '~Auth/components/AuthTitle';
import WrapperAuth from '~Auth/components/WrapperAuth';

/**
 * SignupContainer
 * @component
 *
 */
function SignupContainer(props) {
  const { switchAuth } = props;
  const { signup } = useAuth();
  const { HookAlert, alertIncorrect, alertMissing, clearAlert } = useAlert();
  const [tempUser, setTempUser] = React.useState(new DefaultUser());
  const [isLoading, toggleLoading] = React.useState(false);
  const [isRegistered, toggleRegistered] = React.useState(false);
  const setValue = (field, value) => {
    setTempUser(new DefaultUser({ ...tempUser, [field]: value }));
  };
  const signUp = () => {
    if (Object.values(tempUser).some((v) => v === '')) {
      return alertMissing;
    }
    toggleLoading(true);
    return signup(tempUser)
      .then(() => {
        clearAlert();
        toggleLoading(false);
        toggleRegistered(true);
      })
      .catch(() => {
        toggleLoading(false);
        alertIncorrect();
      });
  };
  if (isLoading) {
    return <AuthLoading messageSignup />;
  }
  if (isRegistered) {
    return (
      <WrapperAuth>
        <div className="row">
          <AuthTitle>Registration request sent !</AuthTitle>
        </div>
        <div className="row">
          An email will be sent to <i>{tempUser.username}</i> containing
          instructions which will allow you to finalize your registration.
        </div>
      </WrapperAuth>
    );
  }
  return (
    <WrapperAuth>
      <div className="row">
        <AuthTitle>Registration</AuthTitle>
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
        <AuthButton className="center" onClick={signUp} success>
          Validate
        </AuthButton>
      </AuthForm>
      <AuthButton className="center" onClick={switchAuth}>
        I have already an account ?
      </AuthButton>
    </WrapperAuth>
  );
}

SignupContainer.propTypes = {
  switchAuth: PropTypes.func.isRequired,
};

export default SignupContainer;
