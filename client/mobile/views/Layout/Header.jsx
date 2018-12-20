import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '@m/components/Icon'

import './Header.scss'

const Header = () => (
  <header className="header">
    <div className="headerContainer">
      <Link to="/" className="logo">TEAC小站</Link>
      <nav className="nav">
        <NavLink to="/topic" className="navItem">小站</NavLink>
        <NavLink to="/todo" className="navItem">小项目</NavLink>
      </nav>
      <div className="share">
        <Icon type="github1" />
      </div>
    </div>
  </header>
)

export default Header
