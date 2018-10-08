import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createAction } from 'actions';

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
    const AccountCircle = () => (
      <div className="accountCircle">
        <i className="material-icons profileIcon">
          <span className="profileCircle"><abbr className="profileName">DF</abbr></span>
        </i>
      </div>
    );

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
            <Typography variant="title" className={this.props.classes.flex}>
              Platter
            </Typography>
            <AccountCircle initials={this.props.initials}/>
          </Toolbar>
        </AppBar>
      </section>
    );
  }
}

export default connect(null, { createAction })(AppHeader);
