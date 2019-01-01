import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import { mainRoutes } from '@m/routers'
import Layout from '../Layout'

const Pages = () => (
  <Layout>
    <Switch>
      {mainRoutes.map(route => (route.redirect
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
    </Switch>
  </Layout>
)

export default Pages
