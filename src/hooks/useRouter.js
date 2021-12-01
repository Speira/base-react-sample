import { useMemo } from 'react'
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import queryString from 'query-string'

/**
 * useRouter
 * @hook
 * @desc ::
 *     create a single router object for convenience
 * @return Object
 *         {Function} Object.push
 *         {Function} Object.replace
 *         {String Object.pathname
 *         {Object} Object.query |
 *                      Merge params and parsed query string into
 *                      single query object so that they can be used
 *                      interchangeablely, ex :
 *                      '/:topic?sort=popular' -> { topic: 'react', sort: 'popular' }
 *         {Object} Object.history
 *         {Object} Object.location
 *         {Object} Object.match
 */
export default function useRouter() {
  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()
  const params = useParams()
  return useMemo(() => {
    return {
      history,
      location,
      match,
      pathname: location.pathname,
      push: history.push,
      query: { ...queryString.parse(location.search), ...params },
      replace: history.replace,
    }
  }, [history, location, match, params])
}
