import React from 'react'
import PropTypes from 'prop-types'
import APIProvider from '~contexts/APIContext'
import AuthProvider from '~contexts/AuthContext'
import ErrorProvider from '~contexts/ErrorContext'
import I18NProvider from '~contexts/I18NContext'
import ThemeProvider from '~contexts/ThemeContext'

/**
 * contexts
 * @context
 * @desc ::: Merge all contexts into one, easier to use
 *
 */
function Contexts({ children }) {
  return (
    <I18NProvider>
      <ErrorProvider>
        <APIProvider>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </APIProvider>
      </ErrorProvider>
    </I18NProvider>
  )
}

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contexts
