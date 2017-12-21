import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import appStyles from 'styles/appStyles';
import sideBarStyles from 'components/SideBar/sideStyles';
import IntentMenu from 'components/Intent/IntentMenu';
import ContentMenu from 'components/Content/ContentMenu';

const sideBarWrapper = classnames(appStyles.sideBar, appStyles.secondaryColor);

const SideBar = (props) => (
  <aside
    id="sidebar"
    className={sideBarWrapper}
  >
    <section className={sideBarStyles.sideBarContainer}>
      <h2
        id="dashboard"
        onClick={e => props.onMenuItemSelectd(e)}
        className={classnames(sideBarStyles.menuController, appStyles.defaultColor)}
      >
        Dashboard
      </h2>
      <h2
        id="intent"
        ref={props.intent}
        data-open={props.itemClick === 'intent'}
        onClick={e => props.onMenuItemSelectd(e)}
        onDoubleClick={e => props.onCloseOpenMenuItem(e)}
        className={classnames(sideBarStyles.menuController, appStyles.defaultColor)}
      >
        Intent
      </h2>
      <IntentMenu/>
    </section>
    <section className={sideBarStyles.sideBarContainer}>
      <h2
        id="content"
        ref={props.content}
        data-open={props.itemClick === 'content'}
        onClick={e => props.onMenuItemSelectd(e)}
        onDoubleClick={e => props.onCloseOpenMenuItem(e)}
        className={classnames(sideBarStyles.menuController, appStyles.defaultColor)}>
        Content
      </h2>
      <ContentMenu/>
    </section>
  </aside>
);

export default withRouter(SideBar);
