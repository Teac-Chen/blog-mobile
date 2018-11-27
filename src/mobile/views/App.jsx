import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

import Home from './Home'
import Content from './Content'
import Sider from './Sider'

export default () => (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/content">Content</Link>
      <br />
      <Link to="/sider">Sider</Link>
    </nav>

    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <Route path="/home" component={Home} />
    <Route path="/content" component={Content} />
    <Route path="/sider" component={Sider} />
  </div>
)
