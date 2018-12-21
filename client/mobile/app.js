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

const render = (curStore) => {
  ReactDOM.render(
    <Provider store={curStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  )
}

render(store)

if (module.hot) {
  module.hot.accept('./stores/index.js', () => {
    const newReducer = require('./stores/index.js').combineReducer

    store.replaceReducer(newReducer)
  })

  module.hot.accept('./views/App.jsx', () => {
    const newReducer = require('./stores/index.js').combineReducer

    store.replaceReducer(newReducer)

    render(store)
  })
}
