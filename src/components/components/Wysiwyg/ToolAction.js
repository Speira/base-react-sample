import React from 'react'
import PropTypes from 'prop-types'

/**
 * ToolAction
 * @component
 *
 */
function ToolAction(props) {
  const { action, argv, cls, img, txt } = props

  const execDefaultAction = (e) => {
    e.preventDefault()
    if (action === 'title') {
      const selection = window.getSelection().toString()
      const heading = `<${argv}>${selection}</${argv}>`
      document.execCommand('insertHTML', false, heading)
    } else if (action === 'createLink') {
      const selection = window.getSelection().toString()
      // eslint-disable-next-line
      const linkURL = prompt('Enter a URL:', 'https://')
      document.execCommand(
        'insertHTML',
        false,
        `<a href="${linkURL}" target="_blank">${selection}</a>`,
      )
    } else {
      document.execCommand(action, false, argv)
    }
  }

  return (
    <a
      aria-hidden="true"
      href="#"
      className="btn icon"
      onClick={execDefaultAction}
      title={action}>
      {img && <i className={`material-icons ico ${cls}`}>{img}</i>}
      {txt && <span className={`ico ${cls}`}>{txt}</span>}
    </a>
  )
}
ToolAction.defaultProps = {
  argv: '',
  cls: '',
  img: '',
  txt: '',
}
ToolAction.propTypes = {
  action: PropTypes.string.isRequired,
  argv: PropTypes.string,
  cls: PropTypes.string,
  img: PropTypes.string,
  txt: PropTypes.string,
}

export default ToolAction
