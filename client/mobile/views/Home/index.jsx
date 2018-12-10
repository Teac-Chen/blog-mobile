import React from 'react'
import axios from 'axios'

class ArticleList extends React.Component {
  componentDidMount() {
    axios.get('/api/article/list')
      .then(result => {

      })
  }

  render() {
    return (
      this.props.
    )
  }
}

export default () => <h1>Home Page</h1>
