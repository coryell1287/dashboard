import React, { Component } from 'react';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import appStyles from 'styles/appStyles';
import sideBarStyles from 'components/SideBar/sideStyles';

const sideBarContainerStyles = sideBarStyles.sideBarContainer;
const sideBarWrapper = classnames(appStyles.sideBar, appStyles.secondaryColor);
const sideBarHeaderStyles = classnames(sideBarStyles.menuController, appStyles.defaultColor);

class SideBar extends Component {
  render() {
    return (
      <aside
        id="sidebar"
        className={sideBarWrapper}
      >
        <section className={sideBarContainerStyles}>

          {
            this.props.sideBarConfig.map(config =>
              <section>
                <h2
                  key={config.id}
                  id={config.id}
                  ref={this.props[config.ref]}
                  data-open={this.props.itemClick === config.id}
                  onClick={e => this.props.onMenuItemSelected(e)}
                  onDoubleClick={e => this.props.onCloseOpenMenuItem(e)}
                  className={sideBarHeaderStyles}
                >
                  {config.text}
                </h2>
                {config.component}
              </section>)
          }

        </section>
      </aside>
    );
  }
}

export default withRouter(SideBar);
