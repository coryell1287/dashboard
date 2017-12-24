import React from 'react';
import { withRouter } from 'react-router';

import appStyles from 'styles/appStyles';
import AppHeader from 'components/AppHeader/';
import { SideBar, SideBarControls } from 'components/SideBar';
import Main from 'components/Main';

const Application = () => (
  <div>
    <article>
      <AppHeader />
      <section id="contentWrapper" className={appStyles.contentWrapper}>
        <SideBarControls>
          <SideBar />
        </SideBarControls>
        <Main />
      </section>
    </article>
  </div>
);

export default withRouter(Application);
