import React from 'react'
import {
  BrowserRouter as Router,
  Outlet,
  Routes,
  Route,
} from 'react-router-dom'
import constants from '~utils/constants'

import Contexts from '~contexts'

import { LoginContainer, SignupContainer } from '~AuthModule'
import { HomeContainer } from '~HomeModule'
import * as LayoutModule from '~LayoutModule'
import { ErrorContainer, NotFoundContainer } from '~ErrorModule'

const { AUTH, AUTH_LOGIN, AUTH_SIGNUP, DEFAULT } = constants.PATHS

/**
 *
 * App
 *
 */
function App() {
  return (
    <Contexts>
      <Router>
        <ErrorContainer>
          <LayoutModule.BodyContainer>
            <LayoutModule.HeaderContainer />
            <Routes>
              <Route path={DEFAULT} element={<HomeContainer />} />
              <Route path={AUTH} element={<Outlet />}>
                <Route index element={<LoginContainer />} />
                <Route path={AUTH_LOGIN} element={<LoginContainer />} />
                <Route path={AUTH_SIGNUP} element={<SignupContainer />} />
              </Route>
              <Route path="*" element={<NotFoundContainer />} />
            </Routes>
            <LayoutModule.FooterContainer />
          </LayoutModule.BodyContainer>
        </ErrorContainer>
      </Router>
    </Contexts>
  )
}

export default App
