import React from 'react';
import classnames from 'classnames';

import AppBar from 'styles/theme/lib/app_bar';
import Navigation from 'styles/theme/lib/navigation';
import Link from 'styles/theme/lib/link';
import appStyles from 'styles/appStyles';
import appHeaderStyles from 'components/AppHeader/appHeaderStyles';
import UserProfile from 'components/UserProfile';
// account_circle
const user = require('assets/user.png');

const appBarStyles = classnames(appStyles.appBar, appStyles.defaultColor);

const AccountCircle = () => (
  <i
    style={{ fontSize: '2em', position: 'relative', top: '9px' }}
    className={appStyles['material-icons']}
  >
    <span className={appHeaderStyles.profileCircle}>
      <img alt="user-profile" className={appHeaderStyles.imageDimensions} src={user} />
    </span>
  </i>
);

const Badge = () => (
  <Link href="http://" active label="Profile" icon={<AccountCircle/>}/>
);

const Email = () => (
  <i className={appStyles['material-icons']}>email</i>
);

const AppHeader = () => (
  <section id="appBar" className={appBarStyles}>
    <AppBar title="Dashboard">
      <Navigation type="horizontal">
        <Link href="http://" label="Inbox" icon={<Email/>}/>
        <UserProfile>
          <Badge/>
        </UserProfile>
      </Navigation>
    </AppBar>
  </section>
);

export default AppHeader;

