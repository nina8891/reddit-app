import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import {fetchPosts} from './actions/actions'

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <div className="App__inner">
          <h1 className="Header">Click the button to see the most popular Subreddits from <a className="Header__link" href="https://reddit.com">Reddit</a></h1>
          <button className="Button" onClick={this.props.onGetSubs}>Get Subreddits</button>
          <ul className="Subs-list">
            {Array.from(this.props.posts).map((post, i) => (
              <li className="Subs-list__item" key={i}>{post.title}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch){
  return {
    onGetSubs: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)