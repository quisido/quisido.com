import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Link from 'react-router-dom/Link';
import appHeaderTitleStyles from './app-header-title-styles';

class AppHeaderTitle extends React.PureComponent {
  render() {
    return (
      <Typography
        className={this.props.classes.root}
        variant="title"
      >
        <Link
          children="Ace Quisido"
          className={this.props.classes.link}
          to="/"
        />
      </Typography>
    );
  }
}

export default withStyles(appHeaderTitleStyles)(AppHeaderTitle);
