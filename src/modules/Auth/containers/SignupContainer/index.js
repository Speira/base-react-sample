import React from 'react';
import PropTypes from 'prop-types';
import WrapperAuth from '~Auth/components/WrapperAuth';
import AuthButton from '~Auth/components/AuthButton';
import AuthInput from '~Auth/components/AuthInput';
import AuthTitle from '~Auth/components/AuthTitle';

/**
 * SignupContainer
 * @component
 *
 */
function SignupContainer(props) {
  const { switchAuth } = props;
  const { id, setId } = React.useState('');
  const { password, setPassword } = React.useState('');
  const goSignin = (e) => {
    e.preventDefault();
    switchAuth();
  };
  return (
    <WrapperAuth>
      <div className="row">
        <AuthTitle>Création de compte</AuthTitle>
      </div>
      <form>
        <label>
          <span>ID:</span>
          <AuthInput value={id} onChange={setId} placeholder="identifiants" />
        </label>
        <label>
          <span>Password:</span>
          <AuthInput
            value={password}
            onChange={setPassword}
            type="password"
            placeholder="password"
          />
        </label>
        <AuthButton className="center"> Valider</AuthButton>
      </form>
      <a href="#" onClick={goSignin}>
        J&apos;ai déjà un compte ? Je me connecte{' '}
      </a>
    </WrapperAuth>
  );
}

SignupContainer.propTypes = {
  switchAuth: PropTypes.func.isRequired,
};

export default SignupContainer;
