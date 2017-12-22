import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { withRouter } from 'react-router';

import sideBarConfig from 'components/SideBar/sideBarConfig';

class SideBarControls extends Component {

  state = {
    itemClick: 'dashboard',
  };

  @autobind
  handleMenuItemSelected(e) {
    if (e.target.id !== 'dashboard') {
      const navItem = e.target;
      const navID = e.target.id;
      navItem.nextElementSibling.style.height = `${navItem.nextElementSibling.scrollHeight}px`;
      this.setState({ itemClick: navID }, () => this.closeMenuController(navID));
    } else if (e.target.id === 'dashboard') {
      const navID = e.target;
      this.closeMenuController(navID);
      this.props.history.push('/');
    }
  }

  closeOpenMenuController(e) {
    if (e.target.id !== 'dashboard') {
      if (e.target.dataset.open) {
        e.target.nextElementSibling.style.height = 0;
      }
    }
  }

  closeMenuController(navID) {
    const intent = this.intentHeader;
    const content = this.contentHeader;

    if (navID !== intent.id) {
      intent.nextElementSibling.style.height = 0;
    }

    if (navID !== content.id) {
      content.nextElementSibling.style.height = 0;
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
              sideBarConfig,
              onMenuItemSelected: this.handleMenuItemSelected,
              onCloseOpenMenuItem: this.closeOpenMenuController,
              intent: (node) => {
                this.intentHeader = node;
              },
              content: (node) => {
                this.contentHeader = node;
              },
            }),
          )}
      </span>
    );
  }
}

export default withRouter(SideBarControls);
