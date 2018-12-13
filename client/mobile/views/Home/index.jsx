import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '@m/components/Icon'

import './index.scss'

export default () => (
  <React.Fragment>
    <header className="header">
      <div className="headerContainer">
        <Link to="/" className="logo">TEAC小站</Link>
        <nav className="nav">
          <NavLink to="/todo" className="navItem">小站</NavLink>
          <NavLink to="/about" className="navItem">关于</NavLink>
        </nav>
        <div className="share">
          <Icon type="github1" />
        </div>
      </div>
    </header>
    <div className="main">
      <div className="banner">
        <div className="bannerContainer">
          <h1 className="title">Teac小站</h1>
          <p className="summary">分享技术&nbsp;&nbsp;记录成长</p>
          <div className="linkBox">
            <Link to="/about" className="link">关于我 &gt;</Link>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="contentContainer">
          <p className="plan">sss</p>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="footerContainer">这是footer</div>
    </footer>
  </React.Fragment>
)
