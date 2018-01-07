import React from 'react';

import mainHeaderStyles from 'components/MainHeader/mainHeaderStyles';

const MainHeader = () => (
  <header className={mainHeaderStyles.headerDisplay}>
    <h1>Dashboard</h1>
    <section className={mainHeaderStyles.navContextWrapper}>
      <span><a href="">Home/</a></span>
      <span><a href="">Dashboard</a></span>
    </section>
  </header>
);

export default MainHeader;
