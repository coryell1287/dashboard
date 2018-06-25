import React from 'react';
import { NavLink } from 'react-router-dom';

const ContentMenu = () => (
  <nav className="navigationWrapper">
    <ul>
      <li>
        <NavLink to="/content" activeClassName="activeController">
          Router Issue
        </NavLink>
      </li>
      <li>
        <NavLink to="/ez-builder" activeClassName="activeController">
          EZ Builder
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default ContentMenu;
