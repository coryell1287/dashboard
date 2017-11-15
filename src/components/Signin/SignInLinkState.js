import React, { Component } from 'react';
import autobind from 'autobind-decorator';

class SignInLinkState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0,
      signInLinks: ['Sign In', 'Sign Up'],
    };
  }

  @autobind
  handleLinkSelection(e, index) {
    e.preventDefault();
    this.setState({ focused: index }, () => console.log(index));
  }

  render() {
    return (
      <aside>
        {React.Children.map(this.props.children,
          child => React.cloneElement(child, {
            ...this.props,
            ...this.state,
            onSelectedLink: this.handleLinkSelection,
          }),
        )}
      </aside>
    );
  }
}

export default SignInLinkState;
