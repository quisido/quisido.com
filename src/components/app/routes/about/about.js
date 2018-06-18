import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import aboutStyles from './about-styles';

class About extends React.PureComponent {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Typography>
          Welcome to the professional portfolio of Ace Quisido.{' '}
          This website is currently an{' '}
          <a
            children="open-source"
            href="https://github.com/CharlesStover/quisido/"
            rel="noopener noreferrer"
            target="_blank"
            title="Quisido.com on GitHub"
          />{' '}
          project in development.
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(aboutStyles)(About);
