import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../action/';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    // this.props.fetchPostsAndUsers();
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }

    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);
