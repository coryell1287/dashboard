import React, { Component } from 'react';
import { connect } from 'react-redux';
import appStyles from 'styles/appStyles';
import classnames from 'classnames';
import AppHeader from 'components/AppHeader/AppHeader';

const appBarStyles = classnames(appStyles.appBar, appStyles.defaultColor);

class Application extends Component {

  componentDidMount() {
    console.log('Application component mounted');
  }

  render() {
    return (
      <div>
        <article>
          <section id="appBar" className={appBarStyles}>
           <AppHeader />
          </section>
          <section id="contentWrapper" className={appStyles.contentWrapper}>
            <aside id="sidebar" className={classnames(appStyles.sideBar, appStyles.secondaryColor)}>Side bar</aside>
            <main id="mainContent" className={classnames(appStyles.mainContent)}>Main Content</main>
          </section>
        </article>
      </div>
    );
  }
}

export default connect(null)(Application);
