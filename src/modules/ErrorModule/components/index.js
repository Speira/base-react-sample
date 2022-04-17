import React from 'react'
import { translate as t } from '~utils/functions'

import WrapperError from './WrapperError'
import ErrorLink from './ErrorLink'

/* ***************************** WrapperError ************************** */

export const ServerErrorWrapper = (props) => (
  <WrapperError
    message={t`ERROR_500_MESSAGE`}
    title={t`ERROR_500`}
    {...props}
  />
)

export const NotAllowedWrapper = (props) => (
  <WrapperError
    message={t`ERROR_403_MESSAGE`}
    title={t`ERROR_403`}
    {...props}
  />
)

export const NotFoundWrapper = (props) => (
  <WrapperError
    message={t`ERROR_404_MESSAGE`}
    title={t`ERROR_404`}
    {...props}
  />
)

/* ***************************** ErrorLink ************************** */

export const BackErrorLink = (props) => (
  <ErrorLink label={t`BACK_HOME`} {...props} />
)
