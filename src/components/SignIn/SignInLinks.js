/*
import React from 'react';
import { Link } from 'react-router-dom';

import signInStyles, { activeLink } from 'components/SignIn/signInPageStyles';

const RenderedLinks = ({ link, index, to, isSelected, onSelectedLink }) => (
  <li className={isSelected}>
    <Link id={to} onClick={e => onSelectedLink(e, index)} to="">
      {link}
    </Link>
  </li>
);


const SignInLinks = ({ signInLinks, focused, ...rest }) => (
  <nav className={signInStyles.navigation}>
    <ul className={signInStyles.navList}>
      {signInLinks.map((link, index) => (
        <RenderedLinks
          {...rest}
          isSelected={focused === index ? activeLink : ''}
          link={link.name}
          to={link.id}
          key={link.id}
          index={index}
        />
      ))}
    </ul>
  </nav>
);

export default SignInLinks;
*/
