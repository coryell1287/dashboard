import React from 'react';

const AccountCircle = ({ initials: Initials }) => {
  return (
    <div className="accountCircle">
      <i className="material-icons profileIcon">
        <span className="profileCircle"><abbr className="profileName"><Initials/></abbr></span>
      </i>
    </div>
  )
};

export default AccountCircle;
