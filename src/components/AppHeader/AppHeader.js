import React from 'react';
import AppBar from 'styles/theme/lib/app_bar';
import Navigation from 'styles/theme/lib/navigation';
import Link from 'styles/theme/lib/link';

const AppHeader = () => (
  <AppBar title="Dashboard" leftIcon="home" rightIcon={""}>
    <Navigation type="horizontal">
      <Link href="http://" label="Inbox" icon="inbox"/>
      <Link href="http://" active label="Profile" icon="person"/>
    </Navigation>
  </AppBar>
);

export default AppHeader;
