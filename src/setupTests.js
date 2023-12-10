// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import '@testing-library/jest-dom/extend-expect'


import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import doggosReducer from './reducers/doggoReducer'

const TestProviders = ({ initState }) => {
  initState ||= { doggos: [], loading: false }
  const testStore = createStore(() => doggosReducer(initState, { type: '@@INIT' }), applyMiddleware(thunk))

  return ({ children }) => (
    <Provider store={testStore}>
      {children}
    </Provider>
  )
}

const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options)
  render(ui, { wrapper: TestWrapper, ...options })
}

global.renderWithReduxProvider = renderWithReduxProvider
