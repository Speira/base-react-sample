import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import { getActiveKeys } from '~utils/functions'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import BaseDropdown, { DropdownButton, DropdownContent } from './style'

const { STATUS } = constants

/**
 * Dropdown
 * @component
 *
 */
function Dropdown(props) {
  const {
    className: initialClassName,
    items,
    onClick,
    primary,
    quaternary,
    secondary,
    status,
    tertiary,
    ...rest
  } = props

  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = (nextState) => {
    const time = isOpen ? 150 : 0
    setTimeout(() => {
      setIsOpen(typeof nextState === 'boolean' ? nextState : !isOpen)
    }, time)
  }
  const closeContent = () => toggleOpen(false)

  const className = `${initialClassName} ${getActiveKeys({
    primary,
    secondary,
    tertiary,
    quaternary,
  })}`

  return (
    <BaseDropdown {...rest} status={status} onBlur={closeContent}>
      <DropdownButton
        className={className}
        onClick={toggleOpen}
        status={status}>
        <span>Dropdown</span>
        <span className="material-icons arrow">expand_more</span>
      </DropdownButton>
      <DropdownContent
        className={className}
        opened={isOpen ? 1 : 0}
        status={status}>
        {items.map((itemsElement) => (
          <button
            className="item"
            key={itemsElement}
            type="button"
            onClick={onClick}>
            {itemsElement}
          </button>
        ))}
      </DropdownContent>
    </BaseDropdown>
  )
}
Dropdown.defaultProps = {
  className: '',
  onClick: () => null,
  primary: false,
  quaternary: false,
  secondary: false,
  status: '',
  tertiary: false,
}
Dropdown.propTypes = {
  /** HTML class */
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  /** primary: theme static color (background) */
  primary: PropTypes.bool,
  /** quaternary: theme static color (background) */
  quaternary: PropTypes.bool,
  /** secondary: theme static color (background) */
  secondary: PropTypes.bool,
  /** Status */
  status: PropTypes.oneOf(Object.values(STATUS)),
  /** tertiary: theme static color (background) */
  tertiary: PropTypes.bool,
}

export default withAsyncErrorHandling(Dropdown)
