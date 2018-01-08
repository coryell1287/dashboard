import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return [
      this.props.children,
    ];
  }
}

export default UserProfile;
