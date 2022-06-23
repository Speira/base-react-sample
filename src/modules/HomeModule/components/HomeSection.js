import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '~contexts/ThemeContext'
import { getStatusColor } from '~utils/functions'
import constants from '~utils/constants'
import Wrapper from '~components/Wrapper'

const { STATUS } = constants
/**
 * HomeSection
 * @component
 *
 */
function HomeSection(props) {
  const { children, leftText, topText, ...rest } = props
  const { theme } = useTheme()
  const bgColor = getStatusColor({
    theme,
    status: STATUS.INFO,
    alpha: 0.3,
  })
  return (
    <Wrapper
      {...rest}
      customStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: topText ? 'flex-start' : 'space-evenly',
        backgroundColor: bgColor,
        color: theme.COLORS.STATIC.LIGHT,
        borderRadius: '2px',
        width: '100%',
        height: '100%',
        xs: {
          padding: '3%',
        },
        sm: { padding: '3%' },
        md: {
          padding: leftText ? '8% 51% 0% 8%' : '8%',
        },
      }}>
      {children}
    </Wrapper>
  )
}
HomeSection.defaultProps = {
  leftText: false,
  topText: false,
}
HomeSection.propTypes = {
  children: PropTypes.node.isRequired,
  leftText: PropTypes.bool,
  topText: PropTypes.bool,
}

export default HomeSection
