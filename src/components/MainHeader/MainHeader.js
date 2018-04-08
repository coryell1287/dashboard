import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const MainHeader = (props) => {
  const removeSpace = props.location.pathname.split('/').filter(url => url !== '');
  const name = removeSpace[0] !== undefined ? removeSpace[0].toString() : '';
  const title = name.length === 0 ? 'Dashboard' : name.replace(/-/g, ' ');

  return (
    <header className="headerDisplay">
      <h1 className="mainHeader_pageTitle">{title}</h1>
      <section className="navContextWrapper">
        <span><Link to="/" className="mainHeader_pageTitle mainHeader_accentColor"> Home</Link> /</span>
        <span className="mainHeader_pageTitle">{title}</span>
      </section>
    </header>
  );
};

export default withRouter(MainHeader);