import React from 'react'
import PropTypes from 'prop-types'

/**
 * CollapsedBox
 * @component
 *
 */
const CollapsedBox = (props) => {
  const { collapsedMode, isSelecting, reset } = props

  const initialSelection = window.getSelection()
  const [selected, setSelected] = React.useState(initialSelection)
  const [value, setValue] = React.useState('')
  const [extra, setExtra] = React.useState('')
  const [isVisible, toggleVisible] = React.useState(collapsedMode !== '')

  const execDefaultAction = () => {
    if (collapsedMode === 'createLink') {
      const target = extra ? '_blank' : '_self'
      const link = `<a href="${value}" target="${target}">${selected}</a>`
      document.execCommand('insertHTML', false, link)
      reset()
    }
  }

  const handleSelection = () => {
    const nextSelection = window.getSelection().toString()
    if (![selected, ''].includes(nextSelection) && !isSelecting) {
      setSelected(nextSelection)
    }
  }

  React.useEffect(() => {
    toggleVisible(collapsedMode !== '')
  }, [collapsedMode])

  React.useEffect(() => {
    document.removeEventListener('selectionchange', handleSelection)
    document.addEventListener('selectionchange', handleSelection)
    return () =>
      document.removeEventListener('selectionchange', handleSelection)
  }, [isSelecting])

  if (collapsedMode === 'createLink') {
    const addedClass = (isVisible && 'visible') || ''
    return (
      <div className={`textbox ${addedClass}`} aria-hidden>
        <label>
          <span>Set the URL: </span>
          <input type="text" onChange={(e) => setValue(e.target.value)} />
        </label>
        <label>
          <span>Open this link in a new tab ? </span>
          <input type="checkbox" onChange={(e) => setExtra(e.target.checked)} />
        </label>
        <label>
          Then choose the Selection: <i>{selected.toString()}</i>
        </label>
        <div>
          <button type="button" onClick={reset}>
            Cancel
          </button>
          <button
            type="button"
            onClick={execDefaultAction}
            disabled={selected === ''}>
            Create the link
          </button>
        </div>
      </div>
    )
  }
  return <div />
}
CollapsedBox.defaultProps = {
  collapsedMode: '',
}
CollapsedBox.propTypes = {
  collapsedMode: PropTypes.string,
  reset: PropTypes.func.isRequired,
  isSelecting: PropTypes.bool.isRequired,
}

export default React.memo(CollapsedBox)
