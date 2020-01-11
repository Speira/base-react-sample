import React from 'react';
import LoginContainer from '~Auth/containers/LoginContainer';
import SignupContainer from '~Auth/containers/SignupContainer';

/**
 * Auth
 * @component
 *
 */
function Auth() {
  const [isLogin, toggleIsLogin] = React.useState(true);
  return (
    <div>
      {isLogin ? (
        <LoginContainer switchAuth={() => toggleIsLogin(false)} />
      ) : (
        <SignupContainer switchAuth={() => toggleIsLogin(true)} />
      )}
    </div>
  );
}

export default Auth;
