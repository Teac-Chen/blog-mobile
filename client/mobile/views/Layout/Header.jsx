import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Header.scss'

const Header = ({ isLogin, token }) => (
  <header className="header">
    <div className="headerContainer">
      <Link to="/" className="logo">TEAC</Link>
      <nav className="nav">
        <NavLink to="/page/home" className="navItem">Home</NavLink>
        <NavLink to="/page/topic" className="navItem">小站</NavLink>
        <NavLink to="/page/todo" className="navItem">小项目</NavLink>
      </nav>
      <div className="share">
        {isLogin
          ? JSON.parse(token).userName
          : <Link to="/login">登录</Link>
        }
      </div>
    </div>
  </header>
)

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  ...state.app,
})

export default connect(mapStateToProps)(Header)
