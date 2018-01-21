import React from 'react';
import { withRouter } from 'react-router';

import mainHeaderStyles from 'components/MainHeader/mainHeaderStyles';

const MainHeader = (props) => {
  const path = props.location.pathname.split('/').filter(url => url !== '');
  const title = path.length === 0 ? 'Dashboard' : path.toString();
  return (
    <header className={mainHeaderStyles.headerDisplay}>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      <section className={mainHeaderStyles.navContextWrapper}>
        <span><a href="">Home/</a></span>
        <span><a style={{ textTransform: 'capitalize', display: 'inline-block' }} href="">{title}</a></span>
      </section>
    </header>
  );
};

export default withRouter(MainHeader);
