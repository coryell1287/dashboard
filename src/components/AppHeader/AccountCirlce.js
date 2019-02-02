import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query, Mutation } from 'react-apollo';
import IconButton from '@material-ui/core/IconButton';

import { GET_INITIALS } from 'components/AppHeader/getInitials.query';
import { UPLOAD_AVATAR } from 'components/AppHeader/upload.query';
import anonymous from 'images/anonymous.png';

const styles = (theme) => ({
  imageWrapper: {
    left: '-3px',
    position: 'relative',
  },
  image: {
    width: '40px',
    height: '40px'
  },
  root: {
    fontSize: '19px',
    position: 'relative',
    left: '6px',
    top: '4px',
    color: theme.palette.text.primary,
  },
  input: {
    display: 'none'
  }
});


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
            <Mutation mutation={UPLOAD_AVATAR}>
              {
                uploadImage => (
                  <input
                    onChange={({ target: { validity, files: [file] } }) =>
                      validity.valid && uploadImage({ variables: { file } })
                    }
                    accept="image/*"
                    className={props.classes.input}
                    id="upload-file"
                    type="file"
                  />
                )
              }
            </Mutation>
        <label htmlFor="upload-file">
          <IconButton className={props.classes.root} variant="contained" component="span">
            <Initials {...props}/>
        </IconButton>
        </label>
          </abbr>
          </span>
      </i>
    </div>
  )
};

export default withStyles(styles)(AccountCircle);
