import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { resizePage } from 'components/PageResizeControl/PageResizeAction';

class PageResizeControl extends Component {
  render() {
    return React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        ...child.props,
        ...this.props,
        ...this.state,
        onPageResize: () => this.props.resizePage(),
      }),
    );
  }
}

const mapStateToDispatch = dispatch => bindActionCreators({ resizePage }, dispatch);
export default connect(null, mapStateToDispatch)(PageResizeControl);
