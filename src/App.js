import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import constants from '~utils/constants'
import Auth, { ProfileContainer } from '~Auth'
import Home from '~Home'
import Layout from '~Layout'
import ErrorHandler, { NotFound } from '~ErrorHandler'
import { AuthenticatedRoute } from '~utils/routes'

const { AUTH, DEFAULT, AUTH_PROFILE } = constants.PATHS

/**
 * description
 * modules that start by uppercase ( example ~Auth) are located at src/modules
 */
function App() {
  return (
    <Router>
      <ErrorHandler>
        <Layout>
          <Switch>
            <Route exact path={DEFAULT} component={Home} />
            <Route exact path={AUTH} component={Auth} />
            <AuthenticatedRoute
              path={AUTH_PROFILE}
              component={ProfileContainer}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ErrorHandler>
    </Router>
  )
}

export default App
