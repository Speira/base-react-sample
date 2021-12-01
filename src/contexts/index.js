import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from '~contexts/ThemeContext'
import AuthProvider from '~contexts/AuthContext'
import ErrorProvider from '~contexts/ErrorContext'
import I18NProvider from '~contexts/I18NContext'

function Contexts({ children }) {
  return (
    <I18NProvider>
      <ErrorProvider>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </ErrorProvider>
    </I18NProvider>
  )
}

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contexts
