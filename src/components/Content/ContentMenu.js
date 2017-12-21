import React from 'react';
import { NavLink } from 'react-router-dom';
import sideBarStyles from 'components/SideBar/sideStyles';


const ContentMenu = (props) => (
  <nav className={sideBarStyles.navigationWrapper}>
    <ul>
      <li>
        <NavLink to="/content" activeClassName="active">
          CLICK HERE
        </NavLink>
      </li>
      <li><a href="">Create content</a></li>
      <li><a href="">Create content</a></li>
      <li><a href="">Create content</a></li>
      <li><a href="">Create content</a></li>
      <li><a href="">Create content</a></li>
    </ul>
  </nav>
);

export default ContentMenu;
