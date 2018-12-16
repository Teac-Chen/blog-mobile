import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import contantRouterMap from '@m/routers'

export default () => (
  <Switch>
    {contantRouterMap.map(route => (route.redirect
      ? <Redirect key={route.from} from={route.from} to={route.to} />
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
