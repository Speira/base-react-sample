import React from 'react'
import constants from '~utils/constants'

const { CLIENT, SERVER, NOT_FOUND } = constants.ERRORS

const ErrorContext = React.createContext()

/**
 * ErrorProvider
 * @component
 * @context
 *
 */
function ErrorProvider(props) {
  const [errorType, setErrorType] = React.useState(null)
  const value = {
    errorType,
    hasError: errorType !== null,
    isClientError: errorType === CLIENT,
    isNotFoundError: errorType === NOT_FOUND,
    isServerError: errorType === SERVER,
    logError(error) {
      console.error(error)
    },
    resetError() {
      setErrorType(null)
    },
    setError({ type }) {
      setErrorType(type)
    },
  }

  return <ErrorContext.Provider {...props} value={value} />
}

/**
 * useError
 * @return context
 *
 */
export const useError = () => {
  const context = React.useContext(ErrorContext)
  if (!context) throw new Error('ErrorContext must be called in ErrorProvider')
  return context
}

/**
 * withAsynErrorHandling
 * @desc inject an Error Handler on Component events
 * @return Component
 *
 */
export const withAsyncErrorHandling = (Component) => (props) => {
  const { setError, logError } = useError()
  const safeFn = (fn) => (params) => {
    try {
      fn(params)
    } catch (e) {
      logError(e)
      setError({ type: SERVER })
    }
  }
  const adaptedProps = { ...props }
  const eventsList = [
    'onBlur',
    'onChange',
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onFocus',
    'onInput',
    'onInvalid',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onSelect',
    'onSubmit',
  ]
  eventsList.forEach((e) => {
    const handler = props[e]
    if (typeof handler === 'function') {
      adaptedProps[e] = safeFn(handler)
    }
  })
  return <Component {...adaptedProps} />
}

export default ErrorProvider
