import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';

import { signUpUser, signInUser } from 'actions/SignInActions';

class SignInLinkState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0,
      signInLinks: [
        { id: 'signin', name: 'Sign in' },
        { id: 'signup', name: 'Sign up' },
      ],
    };
  }

  @autobind
  handleLinkSelection(e, index) {
    e.preventDefault();
    this.setState({ focused: index });
    if (e.target.id === 'signup') {
      return this.props.signUpUser();
    }
    return this.props.signInUser();
  }

  render() {
    return (
      <aside>
        {React.Children.map(this.props.children,
          child => React.cloneElement(child, {
            ...child.props,
            ...this.props,
            ...this.state,
            onSelectedLink: this.handleLinkSelection,
          }),
        )}
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signUpUser, signInUser }, dispatch);
export default connect(null, mapDispatchToProps)(SignInLinkState);
