import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../action/';

class PostList extends React.Component {
  componentDidMount() {
    // action creator -> action creator runs code to make an API request
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, { fetchPosts: fetchPost })(PostList);
