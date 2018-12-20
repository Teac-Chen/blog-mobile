import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import contantRouterMap from '@m/routers'
import Layout from './Layout'

const App = () => (
  <Layout>
    <Switch>
      {contantRouterMap.map(route => (route.redirect
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
  </Layout>
)

export default App
