import React from 'react'
import { Link, Route } from 'react-router-dom'

import './index.scss'

import Topics from './Topics'
import TopicDetail from './TopicDetail'

const Home = () => (
  <React.Fragment>
    <div className="banner">
      <div className="bannerContainer">
        <h1 className="title">Teac小站</h1>
        <p className="summary">分享技术&nbsp;&nbsp;记录成长</p>
        <div className="linkBox">
          <Link to="/todo" className="link">关于我 &gt;</Link>
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
          read: 5000,
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
    <Route path="/topic/:id" render={({ match: { params: { id } } }) => <TopicDetail id={id} />} />
  </React.Fragment>
)

export default Home
