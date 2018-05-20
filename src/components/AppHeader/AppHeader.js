import React from 'react';
import AppBar from 'material-ui/AppBar';

const AccountCircle = () => (
  <div className="accountCircle">
    <i className="material-icons profileIcon">
    <span className="profileCircle">
      <abbr className="profileName">JL</abbr>
    </span>
    </i>
  </div>
);

const Logo = () => (<div style={{ marginTop: '9px' }}>Dashboard</div>);

const MenuIcon = props => (
  <i
    onClick={props.onPageResize}
    className="material-icons menuIcon"
  >
    menu
  </i>
);

const AppHeader = props => (
  <section id="appBar" className="appBar primaryColor">
    <AppBar
      title={<Logo/>}
      iconElementRight={<AccountCircle initials={props.initials}/>}
      iconElementLeft={<MenuIcon onPageResize={props.onPageResize}/>}
      showMenuIconButton
    />
  </section>
);

export default AppHeader;
