import React from 'react'
import { render } from '@testing-library/react'
import Contexts from '~contexts'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(
    <Contexts>
      <App />
    </Contexts>,
  )
  const linkElement = getByText(/Brand/i)
  expect(linkElement).toBeInTheDocument()
})
