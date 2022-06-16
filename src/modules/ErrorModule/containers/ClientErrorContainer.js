import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'
import constants from '~utils/constants'

import SmallWrapper from '~ErrorModule/components/SmallWrapper'
import ErrorLink from '~ErrorModule/components/ErrorLink'

const { PATHS } = constants

/**
 * ClientErrorContainer
 * @component
 *
 */
export default function ClientErrorContainer(props) {
  const { notAllowed } = props
  const opt = {
    message: notAllowed ? t`ERROR_403_MESSAGE` : t`ERROR_404_MESSAGE`,
    title: notAllowed ? t`ERROR_403` : t`ERROR_404`,
  }
  return (
    <SmallWrapper message={opt.message} title={opt.title}>
      <ErrorLink to={PATHS.DEFAULT} />
    </SmallWrapper>
  )
}
ClientErrorContainer.defaultProps = {
  notAllowed: false,
}
ClientErrorContainer.propTypes = {
  notAllowed: PropTypes.bool,
}
