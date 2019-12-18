import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { getPosts } from './actions/posts';

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { isFetched, byId, allIds } = this.props.posts;

    return (
      <div className="App">
        <div className="App__inner">
          <h1 className="Header">
            Click the button to see the most popular Subreddits from{' '}
            <a className="Header__link" href="https://reddit.com">
              Reddit
            </a>
          </h1>
          {isFetched ? (
            'Loading...'
          ) : (
            <ul className="Subs-list">
              {allIds.map(postId => (
                <li className="Subs-list__item" key={postId}>
                  {byId[postId].data.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
