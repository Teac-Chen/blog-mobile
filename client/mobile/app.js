import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './views/App'
import stores from './stores'
import './styles/iconfont.css'
import './styles/reset.css'

const initState = window.__INITIAL_STATE__ || {} // eslint-disable-line
const store = stores(initState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}
