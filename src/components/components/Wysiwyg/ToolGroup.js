import React from 'react'
import PropTypes from 'prop-types'

import { SubMenu } from './style'

/**
 * ToolGroup
 * @component
 *
 */
function ToolGroup(props) {
  const { children, icon, text } = props
  const [isOpen, setOpenState] = React.useState(false)
  const ensureOpen = () => {
    if (!isOpen) setOpenState(true)
  }
  const ensureClose = () => {
    if (isOpen) setTimeout(() => setOpenState(false), 300)
  }

  return (
    <div
      className="btn icon has-submenu"
      onMouseEnter={ensureOpen}
      onMouseLeave={ensureClose}
      aria-hidden="true">
      {icon && <i className="material-icons">{icon}</i>}
      {text && (
        <span>
          <b>{text}</b>
        </span>
      )}
      <i src="format_align_justify" />
      <SubMenu open={(isOpen && 1) || 0} onClick={ensureClose}>
        {children}
      </SubMenu>
    </div>
  )
}
ToolGroup.defaultProps = {
  icon: '',
  text: '',
}
ToolGroup.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
}

export default ToolGroup
