import React from 'react'
import PropTypes from 'prop-types'

import constants from '~utils/constants'

import BaseWysiwyg from './style'
import ToolAction from './ToolAction'
import ToolGroup from './ToolGroup'
import CollapsedBox from './CollapsedBox'

const { TEXT_COLORS } = constants
/**
 *
 * Wysiwyg
 * @component
 *
 *
 */
function Wysiwyg(props) {
  const { value, onChange } = props
  const areaRef = React.useRef(null)
  const [isSelecting, toggleSelecting] = React.useState(false)
  const [collapsedMode, setCollapsedMode] = React.useState(null)

  const handleChange = () => {
    onChange(areaRef.current.innerHTML)
  }
  // const focusArea = () => areaRef.current.focus()

  const handleKeyPress = (e) => {
    if (e.which === 9) {
      e.preventDefault()
      const editor = areaRef.current
      const doc = editor.ownerDocument.defaultView
      const sel = doc.getSelection()
      const range = sel.getRangeAt(0)
      if (!e.shiftKey) {
        const tabNode = document.createTextNode('\u00a0\u00a0\u00a0\u00a0')
        range.insertNode(tabNode)
        range.setStartAfter(tabNode)
        range.setEndAfter(tabNode)
        sel.removeAllRanges()
        sel.addRange(range)
      }
    }
  }

  const handleMouseDown = () => toggleSelecting(true)

  const handleMouseUp = () => toggleSelecting(false)

  const resetCollapse = () => setCollapsedMode('')

  const showCollapse = (type) => () => {
    const nextMode = collapsedMode === type ? '' : type
    setCollapsedMode(nextMode)
  }

  React.useEffect(() => {
    areaRef.current.innerHTML = value
  }, [value])
  return (
    <BaseWysiwyg>
      <div className="toolbar">
        <div className="line">
          <div className="box">
            <ToolGroup text="A">
              <ToolAction action="fontName" txt="Arial" argv="Arial" />
              <ToolAction
                action="fontName"
                txt="Times"
                argv="times new roman"
              />
            </ToolGroup>
          </div>
          <div className="box">
            <ToolAction action="bold" img="format_bold" />
            <ToolAction action="italic" img="format_italic" />
            <ToolAction action="underline" img="format_underlined" />
            <ToolAction action="strikeThrough" img="strikethrough_s" />
            <div className="box">
              <ToolGroup icon="color_lens">
                {Object.entries(TEXT_COLORS).map(([nm, col]) => (
                  <ToolAction
                    action="foreColor"
                    img="stop_circle"
                    argv={col}
                    cls={nm}
                  />
                ))}
              </ToolGroup>
            </div>
            <ToolAction
              action="hiliteColor"
              img="font_download"
              argv="#00000000"
            />
          </div>
          <div className="box">
            <ToolGroup icon="text_fields">
              <ToolAction action="fontSize" txt="T1" argv="1" cls="md-18" />
              <ToolAction action="fontSize" txt="T2" argv="2" cls="md-20" />
              <ToolAction action="fontSize" txt="T3" argv="3" cls="md-24" />
              <ToolAction action="fontSize" txt="T4" argv="4" cls="md-28" />
              <ToolAction action="fontSize" txt="T5" argv="5" cls="md-32" />
              <ToolAction action="fontSize" txt="T6" argv="6" cls="md-36" />
              <ToolAction action="fontSize" txt="T7" argv="7" cls="md-40" />
            </ToolGroup>
          </div>
          <div className="box">
            <ToolGroup text="H">
              <ToolAction action="title" txt="H2" argv="h2" cls="md-24" />
              <ToolAction action="title" txt="H1" argv="h1" cls="md-36" />
            </ToolGroup>
          </div>
          <div className="box">
            <ToolGroup icon="format_align_justify">
              <ToolAction action="justifyLeft" img="format_align_left" />
              <ToolAction action="justifyCenter" img="format_align_center" />
              <ToolAction action="justifyRight" img="format_align_right" />
              <ToolAction action="formatBlock" img="format_align_justify" />
            </ToolGroup>
          </div>
          <div className="box">
            <ToolAction action="insertOrderedList" img="format_list_numbered" />
            <ToolAction
              action="insertUnorderedList"
              img="format_list_bulleted"
            />
          </div>
        </div>
        <div className="line">
          <div className="box">
            <ToolAction action="removeFormat" img="clear" />
          </div>
          <div className="box">
            <ToolAction action="undo" img="undo" />
            <ToolAction action="redo" img="redo" />
          </div>
          <div className="box">
            <ToolAction action="outdent" img="format_indent_decrease" />
            <ToolAction action="indent" img="format_indent_increase" />
          </div>
          <div className="box">
            <ToolAction
              action="createLink"
              img="link"
              onClick={showCollapse('createLink')}
            />
            <ToolAction action="unlink" img="link_off" />
          </div>
          <div className="box">
            <ToolAction action="code" img="code" />
          </div>
          <div className="box">
            <ToolAction action="insertHorizontalRule" img="horizontal_rule" />
          </div>
        </div>
      </div>
      <div>
        {collapsedMode !== '' && (
          <CollapsedBox
            collapsedMode={collapsedMode}
            isSelecting={isSelecting}
            reset={resetCollapse}
          />
        )}
      </div>
      <div className="content-area">
        <div
          id="editor"
          aria-label=" "
          className="visuell-view"
          contentEditable
          onBlur={handleChange}
          onKeyDown={handleKeyPress}
          onKeyPress={handleKeyPress}
          ref={areaRef}
          role="textbox"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          tabIndex={0}
        />
        <textarea className="html-view" />
      </div>
    </BaseWysiwyg>
  )
}

Wysiwyg.defaultProps = {
  value: '',
  onChange: () => null,
}
Wysiwyg.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
export default Wysiwyg
