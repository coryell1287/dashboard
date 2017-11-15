import React from 'react';

import signinStyles from 'components/Signin/signinPageStyles';

const { activeLink } = signinStyles;

const RenderedLinks = ({ link, index, isSelected, onSelectedLink }) => (
  <li className={isSelected}>
    <a onClick={e => onSelectedLink(e, index)} href="#">
      {link}
    </a>
  </li>
);


const SignInLinks = ({ signInLinks, focused, ...rest }) => {
  return (
    <nav className={signinStyles.navigation}>
      <ul className={signinStyles.navList}>
        {signInLinks.map((link, index) => {
          return (
            <RenderedLinks
              {...rest}
              isSelected={focused === index ? activeLink : ''}
              link={link}
              key={link}
              index={index}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default SignInLinks;
