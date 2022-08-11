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
import ErrorContainer, { NotFoundContainer } from '~ErrorModule'
import NavbarContainer from '~containers/NavbarContainer'
import FooterContainer from '~containers/FooterContainer'
import Layout from '~components/Layout'
import 'normalize.css'
import GlobalStyle from './globalStyle'

const { AUTH, AUTH_LOGIN, AUTH_SIGNUP, DEFAULT } = constants.PATHS

/**
 *
 * App
 *
 */
function App() {
  return (
    <Contexts>
      <GlobalStyle />
      <Router>
        <ErrorContainer>
          <Layout>
            <NavbarContainer />
            <Routes>
              <Route path={DEFAULT} element={<HomeContainer />} />
              <Route path={AUTH} element={<Outlet />}>
                <Route index element={<LoginContainer />} />
                <Route path={AUTH_LOGIN} element={<LoginContainer />} />
                <Route path={AUTH_SIGNUP} element={<SignupContainer />} />
              </Route>
              <Route path="*" element={<NotFoundContainer />} />
            </Routes>
            <FooterContainer />
          </Layout>
        </ErrorContainer>
      </Router>
    </Contexts>
  )
}

export default App
