import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import appStyles from 'styles/appStyles';
import AppHeader from 'components/AppHeader/AppHeader';
import SideBar from 'components/SideBar/SideBar';
import SideBarControls from 'components/SideBar/SideBarControls';
import Main from 'components/Main/Main';

class Application extends Component {

  componentDidMount() {
    console.log('Application component mounted');
  }

  render() {
    return (
      <div>
        <article>
          <AppHeader/>
          <section id="contentWrapper" className={appStyles.contentWrapper}>
            <SideBarControls>
              <SideBar/>
            </SideBarControls>
            <Main />
          </section>
        </article>
      </div>
    );
  }
}

export default withRouter(connect(null)(Application));
