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
import ErrorModule, { ClientErrorContainer } from '~ErrorModule'

import HomeContainer from '~containers/HomeContainer'
import FooterContainer from '~containers/FooterContainer'
import NavbarContainer from '~containers/NavbarContainer'

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
        <ErrorModule>
          <Layout className="bg-primary">
            <NavbarContainer />
            <Routes>
              <Route path={DEFAULT} element={<HomeContainer />} />
              <Route path={AUTH} element={<Outlet />}>
                <Route index element={<LoginContainer />} />
                <Route path={AUTH_LOGIN} element={<LoginContainer />} />
                <Route path={AUTH_SIGNUP} element={<SignupContainer />} />
              </Route>
              <Route path="*" element={<ClientErrorContainer notFound />} />
            </Routes>
            <FooterContainer />
          </Layout>
        </ErrorModule>
      </Router>
    </Contexts>
  )
}

export default App
