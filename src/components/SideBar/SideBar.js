import React from 'react';

import classnames from 'classnames';
import appStyles from 'styles/appStyles';
import sideBarStyles from 'components/SideBar/sidebar';

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
      <nav className={sideBarStyles.navigationWrapper}>
        <ul>
          <li><a href="">Suggested Intent</a></li>
          <li><a href="">Suggested Intent</a></li>
          <li><a href="">Suggested Intent</a></li>
          <li><a href="">Suggested Intent</a></li>
          <li><a href="">Suggested Intent</a></li>
          <li><a href="">Suggested Intent</a></li>
        </ul>
      </nav>
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
      <nav className={sideBarStyles.navigationWrapper}>
        <ul>
          <li><a href="">Create content</a></li>
          <li><a href="">Create content</a></li>
          <li><a href="">Create content</a></li>
          <li><a href="">Create content</a></li>
          <li><a href="">Create content</a></li>
          <li><a href="">Create content</a></li>
        </ul>
      </nav>
    </section>
  </aside>
);

export default SideBar;
