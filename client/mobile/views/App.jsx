import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import { independentRoutes } from '@m/routers'

const App = () => (
  <Switch>
    {independentRoutes.map(route => (route.redirect
      ? (
        <Redirect
          key={route.path}
          exact={route.exact}
          from={route.path}
          to={route.to}
        />
      )
      : (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      )
    ))}

    <Redirect to="/404" />
  </Switch>
)

export default App
