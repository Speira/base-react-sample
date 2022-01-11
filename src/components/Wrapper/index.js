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
  const { options, type } = props
  let Component = BaseWrapper
  if (type === ARTICLE) Component = BaseWrapperArticle
  if (type === ASIDE) Component = BaseWrapperAside
  if (type === DIV) Component = BaseWrapperDiv
  if (type === NAV) Component = BaseWrapperNav
  return <Component options={options} {...props} />
}
Wrapper.defaultProps = {
  options: {},
  type: SECTION,
}
Wrapper.propTypes = {
  options: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.oneOf(Object.values(HTML_WRAPPER_TAGS)),
}

export default Wrapper
