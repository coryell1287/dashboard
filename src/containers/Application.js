import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import appStyles from 'styles/appStyles';
import AppHeader from 'components/AppHeader/AppHeader';
import SideBar from 'components/SideBar/SideBar';
import SideBarControls from 'components/SideBar/SideBarControls';

class Application extends Component {

  componentDidMount() {
    console.log('Application component mounted');
  }

  render() {
    return (
      <div>
        <article>
          <AppHeader />
          <section id="contentWrapper" className={appStyles.contentWrapper}>
            <SideBarControls>
              <SideBar />
            </SideBarControls>
            <main id="mainContent" className={classnames(appStyles.mainContent)}>Main Content</main>
          </section>
        </article>
      </div>
    );
  }
}

export default connect(null)(Application);
