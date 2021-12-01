import React from 'react'
import PropTypes from 'prop-types'
import { /* ContentState, */ EditorState } from 'draft-js'
import { stateFromHTML } from 'draft-js-import-html'
import { stateToHTML } from 'draft-js-export-html'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import BaseWysiwyg from './style'

/**
 * Wysiwyg
 * @component
 *
 */

function Wysiwyg(props) {
  const { value, onChange } = props
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(stateFromHTML(value)),
  )

  const onBlur = () => {
    const content = editorState.getCurrentContent()
    const contentHTML = stateToHTML(content)
    onChange(contentHTML)
  }

  React.useEffect(
    () => setEditorState(EditorState.createWithContent(stateFromHTML(value))),
    [value],
  )
  return (
    <Editor
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onBlur={onBlur}
      onEditorStateChange={(nextEditorState) => setEditorState(nextEditorState)}
    />
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
