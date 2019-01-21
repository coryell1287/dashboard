import React from 'react';
import { Query } from 'react-apollo';
import { GET_INITIALS } from 'components/AppHeader/getInitials.query';
import anonymous from 'images/anonymous.png';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  imageWrapper: {
    left: '-3px',
    position: 'relative',
  },
  image: {
    width: '40px',
    height: '40px'
  }
};


const Initials = (props) => {
  return (
    <Query
      query={GET_INITIALS}
      variables={{ email: sessionStorage.getItem('email') }}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, networkStatus }) => {
        if (networkStatus === 4) return 'Refetching!';
        if (loading) return <Anonymous {...props} />;
        if (error) return `Error!: ${error}`;
        return (
         <span>{data.user.initial}</span>
        );
      }}
    </Query>
  )
};

const Anonymous = (props) => {
  return (
    <span className={props.classes.imageWrapper}>
      <img className={props.classes.image} src={anonymous} alt="anonymous"/>
    </span>
  )
};

const AccountCircle = (props) => {
  return (
    <div className="accountCircle">
      <i className="material-icons profileIcon">
          <span className="profileCircle">
          <abbr className="profileName">
            <Initials {...props}/>
          </abbr>
          </span>
      </i>
    </div>
  )
};

export default withStyles(styles)(AccountCircle);
