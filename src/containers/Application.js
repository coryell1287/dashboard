import React from 'react';
import { withRouter } from 'react-router';

import AppHeader from 'components/AppHeader';
import PageResizeControl from 'components/PageResizeControl';
import { SideBar, SideBarControls } from 'components/SideBar';
import Main from 'components/Main';


const Application = () => (
  <div>
    <article>
      <PageResizeControl>
        <AppHeader/>
      </PageResizeControl>
      <section id="contentWrapper" className="contentWrapper">
        <SideBarControls>
          <SideBar/>
        </SideBarControls>
        <Main/>
      </section>
    </article>
  </div>
);

export default withRouter(Application);
