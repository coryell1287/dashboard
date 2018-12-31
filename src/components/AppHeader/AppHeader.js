import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { createAction } from 'actions';

import AccountCircle from 'components/AppHeader/AccountCirlce';
import Initials from 'components/AppHeader/FirstNameSurname.query';

const styles = theme => ({

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
  },
  flex: {
    flex: 1,
    color: theme.palette.text.default,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

});


@withStyles(styles)
class AppHeader extends PureComponent {

  render() {

    return (
      <section id="appBar" className="appBar">
        <AppBar className={this.props.classes.root} position="static">
          <Toolbar>
            <IconButton
              onClick={this.props.createAction}
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <i className="material-icons">menu</i>
            </IconButton>
            <Typography component="h5" variant="h5" className={this.props.classes.flex}>
              Chatter
            </Typography>
            <AccountCircle initials={Initials}/>
          </Toolbar>
        </AppBar>
      </section>
    );
  }
}

export default connect(null, { createAction })(AppHeader);
