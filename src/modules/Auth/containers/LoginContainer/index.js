import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '~contexts/AuthContext';
import WrapperAuth from '~Auth/components/WrapperAuth';
import AuthButton from '~Auth/components/AuthButton';
import AuthInput from '~Auth/components/AuthInput';
import AuthTitle from '~Auth/components/AuthTitle';
import AuthAlert from '~Auth/components/AuthAlert';
import AuthForm from '~Auth/components/AuthForm';

/**
 * LoginContainer
 * @component
 *
 */
function LoginContainer(props) {
  const { signin } = useAuth();
  const { switchAuth } = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hasLoginError, toggleLoginError] = React.useState(false);
  const [isLoading, toggleLoading] = React.useState(false);
  const goSignup = (e) => {
    e.preventDefault();
    switchAuth();
  };
  const authenticateUser = () => {
    toggleLoading(true);
    signin({ username, password })
      .then(() => {
        toggleLoading(false);
        console.warn('connected');
      })
      .catch(() => {
        toggleLoading(false);
        toggleLoginError(true);
      });
  };
  return (
    <WrapperAuth>
      <div className="row">
        <AuthTitle>Connexion</AuthTitle>
      </div>
      <AuthAlert hasLoginError={hasLoginError} isLoading={isLoading} />
      <AuthForm>
        <label>
          <span>ID:</span>
          <AuthInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="identifiants"
          />
        </label>
        <label>
          <span>Password:</span>
          <AuthInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </label>
        <AuthButton className="center" onClick={authenticateUser}>
          Valider
        </AuthButton>
      </AuthForm>
      <a href="#" onClick={goSignup}>
        Pas encore enregistré ? Je m&apos;enregistre
      </a>
    </WrapperAuth>
  );
}

LoginContainer.propTypes = {
  switchAuth: PropTypes.func.isRequired,
};

export default LoginContainer;
