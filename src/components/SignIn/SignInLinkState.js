import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signUpUser, signInUser } from 'actions/SignInActions';

class SignInLinkState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0,
      signInLinks: [
        {
          id: 'signIn',
          name: 'Sign in'
        },
        {
          id: 'signUp',
          name: 'Sign up'
        },
      ],
    };
  }

  handleLinkSelection = (e, index) => {
    e.preventDefault();
    const form = e.currentTarget.id;
    console.log(form, 'here is the form id');
    this.setState({ focused: index });
    if (form === 'signUp') {
      return this.props.signUpUser();
    }
    return this.props.signInUser();
  };

  render() {
    return (
      <>
        {React.Children.map(this.props.children,
          child => React.cloneElement(child, {
            ...child.props,
            ...this.props,
            ...this.state,
            onSelectedLink: this.handleLinkSelection,
          }),
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    signUpUser,
    signInUser
  }, dispatch);
export default connect(null, mapDispatchToProps)(SignInLinkState);
