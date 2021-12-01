import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import BaseWrapper, {
  BaseWrapperArticle,
  BaseWrapperAside,
  BaseWrapperDiv,
  BaseWrapperNav,
} from './style'

const { HTML_WRAPPER_TAGS } = constants
const { ARTICLE, ASIDE, DIV, SECTION, NAV } = HTML_WRAPPER_TAGS

/**
 * Wrapper
 * @component
 *
 */
function Wrapper(props) {
  const { type } = props
  if (type === ARTICLE) return BaseWrapperArticle
  if (type === ASIDE) return BaseWrapperAside
  if (type === DIV) return BaseWrapperDiv
  if (type === NAV) return BaseWrapperNav
  return <BaseWrapper {...props} />
}
Wrapper.defaultProps = {
  type: SECTION,
}
Wrapper.propTypes = {
  type: PropTypes.oneOf(Object.values(HTML_WRAPPER_TAGS)),
}

export default Wrapper
