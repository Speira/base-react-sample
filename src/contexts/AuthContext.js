import React from 'react'

import { authUserAPI, createUserAPI, updateUserAPI } from '~utils/functions'

const AuthContext = React.createContext()

/**
 * AuthProvider
 * @component
 * @context
 *
 */
function AuthProvider(props) {
  const [user, setUser] = React.useState({})
  const value = {
    user,
    isAuthenticated: !!user.username,
    /**
     * logout
     * @desc logout an user
     */
    logout() {
      return new Promise((resolve) => {
        setUser({})
        resolve()
      })
    },
    /**
     * signin
     * @param {Object} reqUser
     * @param {String} reqUser.name
     * @param {String} reqUser.password
     * @desc allow to auth an registered user
     */
    signin(reqUser) {
      return new Promise((resolve, reject) => {
        if (!reqUser) reject()
        authUserAPI(reqUser)
          .then((authenicatedUser) => {
            setUser(authenicatedUser)
            resolve(authenicatedUser)
          })
          .catch((err) => reject(err))
      })
    },
    /**
     * signup
     * @param {Object} reqUser
     * @param {String} reqUser.name
     * @param {String} reqUser.password
     * @desc allow to register an new user
     */
    signup(reqUser) {
      return new Promise((resolve, reject) => {
        if (!reqUser) reject()
        createUserAPI(reqUser)
          .then((authenicatedUser) => {
            setUser({})
            resolve(authenicatedUser)
          })
          .catch((err) => reject(err))
      })
    },
    /**
     * update
     * @param {Object} reqUser
     * @desc allow to update an existing user
     */
    update(reqUser) {
      return new Promise((resolve, reject) => {
        if (!reqUser) reject()
        updateUserAPI(reqUser)
          .then((updatedUser) => {
            setUser(updatedUser)
            resolve(updatedUser)
          })
          .catch((err) => reject(err))
      })
    },
  }

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
