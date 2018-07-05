import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import appHeaderStyles from './app-header-styles';
import Tabs from './tabs/app-header-tabs';
import Title from './title/app-header-title';

class AppHeader extends React.PureComponent {
  render() {
    return (
      <AppBar
        className={this.props.classes.appBar}
        position="static"
      >
        <Toolbar className={this.props.classes.toolbar}>
          <Title />
          <Tabs page={this.props.page} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(appHeaderStyles)(AppHeader);
