import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import constants from '~utils/constants'

import Link from '~components/Link'
import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

const { PATHS } = constants

/**
 * ClientErrorContainer
 * @component
 *
 */
export default function ClientErrorContainer(props) {
  const { notAllowed } = props
  const { t } = useTranslation()
  const opt = {
    message: notAllowed ? t`ERROR_403_MESSAGE` : t`ERROR_404_MESSAGE`,
    title: notAllowed ? t`ERROR_403` : t`ERROR_404`,
  }
  return (
    <Wrapper
      className="flex-column align-items-center justify-content-center"
      message={opt.message}
      title={opt.title}>
      <Title>{opt.title}</Title>
      <p>{opt.message}</p>
      <Link to={PATHS.DEFAULT} tertiary>{t`BACK_HOME`}</Link>
    </Wrapper>
  )
}
ClientErrorContainer.defaultProps = {
  notAllowed: false,
}
ClientErrorContainer.propTypes = {
  notAllowed: PropTypes.bool,
}
