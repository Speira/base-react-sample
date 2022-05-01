import React from 'react'
import { translate as t } from '~utils/functions'

import WrapperError from './WrapperError'
import ErrorLink from './ErrorLink'

/* ***************************** WrapperError ************************** */

export function ServerErrorWrapper(props) {
  return (
    <WrapperError
      message={t`ERROR_500_MESSAGE`}
      title={t`ERROR_500`}
      {...props}
    />
  )
}

export function NotAllowedWrapper(props) {
  return (
    <WrapperError
      message={t`ERROR_403_MESSAGE`}
      title={t`ERROR_403`}
      {...props}
    />
  )
}

export function NotFoundWrapper(props) {
  return (
    <WrapperError
      message={t`ERROR_404_MESSAGE`}
      title={t`ERROR_404`}
      {...props}
    />
  )
}

/* ***************************** ErrorLink ************************** */

export function BackErrorLink(props) {
  return <ErrorLink label={t`BACK_HOME`} {...props} />
}
