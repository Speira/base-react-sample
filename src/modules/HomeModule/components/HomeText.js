import React from 'react'
import PropTypes from 'prop-types'
import { getTagSize } from '~utils/functions'

import Wrapper from '~components/Wrapper'

/**
 * HomeText
 * @component
 *
 */
function HomeText(props) {
  const { children, tag, ...rest } = props
  return (
    <Wrapper
      {...rest}
      tag={tag}
      customStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: getTagSize(tag),
        xs: {
          alignItems: 'center',
          textAlign: 'center',
        },
      }}>
      {children}
    </Wrapper>
  )
}
HomeText.defaultProps = {
  tag: 'p',
}
HomeText.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
}

export default HomeText
