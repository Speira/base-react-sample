import React from 'react'
import PropTypes from 'prop-types'
import ServerErrorContainer from '~ErrorModule/ServerErrorContainer'

/**
 * ErrorBoundaryModule
 * @component
 * @desc ::: ErrorBoundray does not work with functional component
 *
 */
class ErrorBoundaryModule extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { hasSyncError: false }
  }

  static getDerivedStateFromError(error) {
    const { logError } = this.props
    logError(error)
    return { hasSyncError: true }
  }

  componentDidCatch(error, info) {
    const { handleSyncError, logError } = this.props
    handleSyncError(info)
    logError(error)
  }

  render() {
    const { children, hasAsyncError } = this.props
    const { hasSyncError } = this.state
    if (hasSyncError || hasAsyncError) return <ServerErrorContainer />
    return children
  }
}

ErrorBoundaryModule.propTypes = {
  children: PropTypes.node.isRequired,
  handleSyncError: PropTypes.func.isRequired,
  logError: PropTypes.func.isRequired,
  hasAsyncError: PropTypes.bool.isRequired,
}

export default ErrorBoundaryModule
