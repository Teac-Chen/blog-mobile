import React from 'react'
import { StaticRouter } from 'react-router-dom'

import App from './views/App'

export default (url, context) => (
  <StaticRouter location={url} context={context}>
    <App />
  </StaticRouter>
)
