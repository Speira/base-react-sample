import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '~contexts/AuthContext';
import WrapperAuth from '~Auth/components/WrapperAuth';
import AuthButton from '~Auth/components/AuthButton';
import AuthInput from '~Auth/components/AuthInput';
import AuthTitle from '~Auth/components/AuthTitle';
import AuthAlert from '~Auth/components/AuthAlert';

const MESSAGES = {
  ERROR: {
    message: 'Identifiants incorrect',
    type: 'error',
  },
};

/**
 * LoginContainer
 * @component
 *
 */
function LoginContainer(props) {
  const { switchAuth } = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signin } = useAuth();
  const [alert, setAlert] = React.useState({ isOpen: false });
  const goSignup = (e) => {
    e.preventDefault();
    switchAuth();
  };
  const authenticateUser = () => {
    signin({ username, password })
      .then(() => {
        console.warn('connected');
      })
      .catch(() => {
        setAlert({ ...MESSAGES.ERROR, isOpen: true });
        console.error('error of authentication');
      });
  };
  return (
    <WrapperAuth>
      <div className="row">
        <AuthTitle>Connexion</AuthTitle>
      </div>
      <AuthAlert {...alert} />
      <form>
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
      </form>
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
