import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from '~components/Wrapper'

/**
 * HomeImageSection
 * @component
 *
 */
function HomeImageSection(props) {
  const { children, image, ...rest } = props
  return (
    <Wrapper
      {...rest}
      customStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%',
        width: '100%',
        position: 'relative',
        xs: { height: image ? '23em' : 'auto' },
        sm: { height: '26em' },
        md: { height: '30em' },
        lg: { height: '40em' },
        xl: { height: '46em' },
        xxl: { height: '52em', maxWidth: '85em' },
      }}>
      {children}
    </Wrapper>
  )
}
HomeImageSection.defaultProps = {
  image: '',
}
HomeImageSection.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
}

export default HomeImageSection
