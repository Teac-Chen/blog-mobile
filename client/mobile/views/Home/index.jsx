/* eslint-disable */
import React from 'react'
import { Link, NavLink, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '@m/components/Icon'

import './index.scss'

import Topics from './Topics'
import TopicDetail from './TopicDetail'

const Home = ({ match }) => (
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
          <Topics topics={[{
            id: '1',
            title: '测试的标题',
            summary: '测试的简介',
            image: 'https://img4.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
            read: 2000,
            date: '2018-12-14 18:36:26',
          }, {
            id: '2',
            title: '测试的标题',
            summary: '测试的简介',
            image: 'https://img4.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
            read: 2000,
            date: '2018-12-14 18:36:26',
          }, {
            id: '3',
            title: '测试的标题',
            summary: '测试的简介',
            image: 'https://img4.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
            read: 2000,
            date: '2018-12-14 18:36:26',
          }, {
            id: '4',
            title: '测试的标题',
            summary: '测试的简介',
            image: 'https://img4.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
            read: 2000,
            date: '2018-12-14 18:36:26',
          }]}
          />
        </div>
      </div>
    </div>
    <Route path="/topic/:id" render={({...newObj}) => {
      console.log(newObj)
      return <h1>hahaha</h1>
    }} />

    <footer className="footer">
      <div className="footerContainer">这是footer</div>
    </footer>
  </React.Fragment>
)

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}

export default Home
