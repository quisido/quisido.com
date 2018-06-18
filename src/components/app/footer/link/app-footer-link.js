import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import appFooterLinkStyles from './app-footer-link-styles';

export default withStyles(appFooterLinkStyles)(
  class AppFooterLink extends React.PureComponent {
    render() {
      return (
        <a
          children={this.props.children}
          className={this.props.classes.root}
          href={this.props.href}
          rel="noopener noreferrer"
          target="_blank"
          title={this.props.title}
        />
      );
    }
  }
);
