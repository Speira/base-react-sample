import React from 'react';
import fakeAuthUser from '~utils/api/authAPI';

const AuthContext = React.createContext();

/**
 * AuthProvider
 * @component
 * @context
 *
 */
function AuthProvider(props) {
  const [user, setUser] = React.useState({});
  const value = {
    user,
    isAuthenticated: !!user.id,
    logout() {
      setUser({});
    },
    /**
     * signin
     * @param {String} reqUser.name
     * @param {String} reqUser.password
     * @desc allow to auth an registered user
     */
    signin(reqUser) {
      return new Promise((resolve, reject) => {
        if (!reqUser) reject();
        fakeAuthUser(reqUser)
          .then((authenicatedUser) => {
            setUser(authenicatedUser);
            resolve(authenicatedUser);
          })
          .catch((err) => reject(err));
      });
    },
  };

  return <AuthContext.Provider {...props} value={value} />;
}

/**
 * useAuth
 * @return context
 *
 */
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('AuthContext must be called in AuthProvider');
  return context;
};
export default AuthProvider;
