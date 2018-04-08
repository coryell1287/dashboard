import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { resizePage } from 'components/PageResizeControl/PageResizeAction';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { sideBarConfig } from 'components/SideBar';

class SideBarControls extends Component {

  state = {
    itemClick: 'dashboard',
    arrowStyle: '',
    focus: 'true',
  };

  componentWillReceiveProps(nextProps) {
    const item = document.getElementById(this.state.itemClick);
    if (item.id !== 'dashboard' && nextProps.resize) {
      item.nextElementSibling.style.height = 0;
      this.setState({ arrowStyle: '' });
      return;
    }
    return false;
  }

  @autobind
  handlePageReset() {
    if (this.props.resize) {
      return this.props.resizePage();
    }
    return false;
  }

  handleArrowTransform(id) {
    this.setState({ arrowStyle: id });
  }

  @autobind
  handleMenuItemSelected(e) {
    const navItem = e.currentTarget;
    const navID = e.currentTarget.id;

    if (e.currentTarget.id !== 'dashboard' && e.currentTarget.dataset.open === 'false') {
      navItem.nextElementSibling.style.height = `${navItem.nextElementSibling.scrollHeight}px`;
      this.handleArrowTransform(e.currentTarget.id);
      this.setState({ itemClick: navID, focus: 'true' }, () => this.closeMenuController(navID));
    } else if (e.currentTarget.id !== 'dashboard' && e.currentTarget.dataset.open === 'true') {
      this.closeMenuController(navItem);
      this.setState({ arrowStyle: '', itemClick: navID, focus: 'false' });
    } else if (e.currentTarget.id === 'dashboard') {
      this.props.history.push('/');
      this.closeMenuController(navItem);
      this.setState({ arrowStyle: '', itemClick: navID, focus: 'false' });
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
    return React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        ...this.props,
        ...this.state,
        sideBarConfig,
        onMenuItemSelected: this.handleMenuItemSelected,
        onPageReset: this.handlePageReset,
        intent: (node) => {
          this.intentHeader = node;
        },
        content: (node) => {
          this.contentHeader = node;
        },
      }),
    );
  }
}


const mapStateToProps = state => ({ resize: state.resizeState.resizePage });
const mapDispatchToProps = dispatch => bindActionCreators({ resizePage }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBarControls));