import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

import './index.scss'

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="main">
      {children}
    </div>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
}

export default Layout
