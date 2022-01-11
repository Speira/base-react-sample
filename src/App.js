import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import constants from '~utils/constants'
import Auth from '~Auth'
import Home from '~Home'
import Layout from '~Layout'
import ErrorHandler, { NotFound } from '~ErrorHandler'

const { AUTH, DEFAULT } = constants.PATHS

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
            <Route path={AUTH} component={Auth} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ErrorHandler>
    </Router>
  )
}

export default App
