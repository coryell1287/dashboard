import React from 'react';

import AppBar from 'styles/theme/lib/app_bar';
import Navigation from 'styles/theme/lib/navigation';
import Link from 'styles/theme/lib/link';
import appStyles from 'styles/appStyles';

const AccountCircle = () => (
  <i className={appStyles['material-icons']}>account_circle</i>
);
const Logo = () => (
  <i className={appStyles['material-icons']}>weekend</i>
);
const Email = () => (
  <i className={appStyles['material-icons']}>email</i>
);

const AppHeader = () => (
  <AppBar title="Dashboard" leftIcon={<Logo />} rightIcon={<Logo />}>
    <Navigation type="horizontal">
      <Link href="http://" label="Inbox" icon={<Email />} />
      <Link href="http://" active label="Profile" icon={<AccountCircle />} />
    </Navigation>
  </AppBar>
);

export default AppHeader;
