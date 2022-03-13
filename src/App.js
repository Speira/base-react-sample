import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import constants from '~utils/constants'

import Contexts from '~contexts'

import AuthModule from '~AuthModule'
import HomeModule from '~HomeModule'
import LayoutModule from '~LayoutModule'
import ErrorModule, { NotFoundContainer } from '~ErrorModule'

import AppRoute from 'AppRoute'

const { AUTH, DEFAULT } = constants.PATHS

/**
 *
 * App
 * @container
 *
 */
function App() {
  return (
    <Contexts>
      <Router>
        <ErrorModule>
          <LayoutModule>
            <Switch>
              <AppRoute exact path={DEFAULT} component={HomeModule} />
              <AppRoute exact path={AUTH} component={AuthModule} />
              <AppRoute component={NotFoundContainer} />
            </Switch>
          </LayoutModule>
        </ErrorModule>
      </Router>
    </Contexts>
  )
}

export default App
