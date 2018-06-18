import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import appHeaderStyles from './app-header-styles';
import Tabs from './tabs/app-header-tabs';

class AppHeader extends React.PureComponent {
  render() {
    return (
      <AppBar
        className={this.props.classes.appBar}
        position="static"
      >
        <Toolbar className={this.props.classes.toolbar}>
          <Typography
            children="Ace Quisido"
            className={this.props.classes.title}
            color="inherit"
            variant="title"
          />
          <Tabs page={this.props.page} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(appHeaderStyles)(AppHeader);
