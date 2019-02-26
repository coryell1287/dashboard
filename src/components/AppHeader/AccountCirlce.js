import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query, Mutation } from 'react-apollo';
import IconButton from '@material-ui/core/IconButton';

import { GET_PROFILE } from 'components/AppHeader/getInitials.query';
import { UPLOAD_AVATAR } from 'components/AppHeader/upload.query';
import anonymous from 'images/anonymous.png';
import client from 'apolloClient';

const styles = (theme) => ({
  root: {
    fontSize: '19px',
    position: 'relative',
    left: '6px',
    top: '4px',
    color: theme.palette.text.primary,
  },
  imageWrapper: {
    left: '-3px',
    position: 'relative',
  },
  anonymous: {
    width: '40px',
    height: '40px'
  },
  profileImage: {
    width: '48px',
    height: '52px',
    position: 'relative',
    top: '-6px',
    right: '5px',
  },
  input: {
    display: 'none'
  }
});


const User = (props) => {
  return (
    <Query
      query={GET_PROFILE}
      variables={{ email: sessionStorage.getItem('email') }}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, networkStatus }) => {
        if (networkStatus === 4) return 'Refetching!';
        if (loading) return <Anonymous {...props} />;
        if (error) return `Error!: ${error}`;
        if (!data.user.avatar) return <span>{data.user.initials}</span>;
        return (
          <span><img className={props.classes.profileImage} src={data.user.avatar} alt={data.user.initials}/></span>
        );
      }}
    </Query>
  )
};

const Anonymous = (props) => {
  return (
    <span className={props.classes.imageWrapper}>
      <img className={props.classes.anonymous} src={anonymous} alt="anonymous"/>
    </span>
  )
};


const AccountCircle = (props) => {
  return (
    <div className="accountCircle">
      <i className="material-icons profileIcon">
          <span className="profileCircle">
            <Mutation
              mutation={UPLOAD_AVATAR}
              update={async (cache, { data }) => {
                try {
                  const cachedQuery = await cache.readQuery({ query: GET_PROFILE, email: sessionStorage.getItem('email') });
                  console.log(cachedQuery);
                } catch (error) {
                  console.error(error);
                }
              }}>
              {
                muatate => (
                  <input
                    onChange={({ target: { validity, files: [file] } }) =>
                      validity.valid && muatate({ variables: { file, email: sessionStorage.getItem('email') } })
                    }
                    accept="image/*"
                    className={props.classes.input}
                    id="upload-file"
                    type="file"
                  />
                )
              }
            </Mutation>
          <abbr className="profileName">
        <label htmlFor="upload-file">
          <IconButton className={props.classes.root} variant="contained" component="span">
            <User {...props}/>
        </IconButton>
        </label>
          </abbr>
          </span>
      </i>
    </div>
  )
};

export default withStyles(styles)(AccountCircle);
