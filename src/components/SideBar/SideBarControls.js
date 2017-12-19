import React, { Component } from 'react';
import autobind from 'autobind-decorator';

class SideBarControls extends Component {

  state = {
    itemClick: 'dashboard',
  };

  @autobind
  handleMenuItemSelected(e) {
    if (e.target.id !== 'dashboard') {
      e.target.nextElementSibling.style.height = `${e.target.nextElementSibling.scrollHeight}px`;
      console.log(e.target.nextElementSibling.scrollHeight);
    }
  }

  render() {
    return (
      <span>
        {
          React.Children.map(this.props.children,
            child => React.cloneElement(child, {
              ...this.props,
              ...this.state,
              onMenuItemSelectd: this.handleMenuItemSelected,
            }),
          )}
      </span>
    );
  }
}

export default SideBarControls;
