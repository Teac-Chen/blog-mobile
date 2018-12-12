import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default () => (
  <React.Fragment>
    <header className="header">
      <div className="headerContainer">
        <Link to="/">TEAC小站</Link>
        <nav>
          <Link to="/todo">小站</Link>
          <Link to="/about">关于</Link>
        </nav>
      </div>
    </header>
  </React.Fragment>
)
