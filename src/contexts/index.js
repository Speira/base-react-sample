import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from '~contexts/ThemeContext'
import AuthProvider from '~contexts/AuthContext'
import ErrorProvider from '~contexts/ErrorContext'

function Contexts({ children }) {
  return (
    <ErrorProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </ErrorProvider>
  )
}

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contexts
