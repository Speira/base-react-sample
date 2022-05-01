import React from 'react'

const AuthContext = React.createContext()

/**
 * AuthProvider
 * @component
 * @context
 *
 */
function AuthProvider(props) {
  const [authUser, setAuthUser] = React.useState({})
  const value = React.useMemo(
    () => ({
      authUser,
      setAuthUser,
      isAuthenticated: !!authUser.username,
    }),
    [authUser],
  )

  return <AuthContext.Provider {...props} value={value} />
}

/**
 * useAuth
 * @context
 * @return context
 *
 */
export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error('AuthContext must be called in AuthProvider')
  return context
}

export default AuthProvider
