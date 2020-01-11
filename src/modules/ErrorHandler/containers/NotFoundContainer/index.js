import React from 'react';
import WrapperError from '~ErrorHandler/components/WrapperError';
import ErrorLink from '~ErrorHandler/components/ErrorLink';

/**
 * NotFoundContainer
 * @component
 *
 */
function NotFoundContainer() {
  const text = "Erreur 404: La page demandée n'existe pas.";
  const backText = "Aller à l'accueil";
  return (
    <WrapperError>
      <p>{text}</p>
      <ErrorLink to="/">{backText}</ErrorLink>
    </WrapperError>
  );
}

export default NotFoundContainer;
