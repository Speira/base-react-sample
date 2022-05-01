import { useMemo } from 'react'
import {
  useParams,
  useNavigate,
  useLocation,
  useResolvedPath,
  useMatch,
} from 'react-router-dom'
import queryString from 'query-string'

import constants from '~utils/constants'

const { PATHS } = constants

/**
 * useRouter
 * @hook
 *
 * @param {Object}  obj
 * @param {String}  obj.to
 * @param {Boolean} obj.isStrictMatch
 * @desc ::
 *     create a single router object for convenience
 */
export default function useRouter(obj = {}) {
  const { to = '', isStrictMatch = false } = obj
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const resolved = useResolvedPath(to)
  const referer = location.state?.from?.pathname || PATHS.DEFAULT
  const isURLMatching = useMatch({
    path: resolved.pathname,
    end: isStrictMatch,
  })
  return useMemo(() => {
    return {
      isURLMatching,
      location,
      navigate,
      pathname: location.pathname,
      query: { ...queryString.parse(location.search), ...params },
      backToReferer: () => navigate(referer, { replace: true }),
    }
  }, [location, navigate, referer, isURLMatching, params])
}
