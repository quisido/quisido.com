import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import contactStyles from './contact-styles';

class Contact extends React.PureComponent {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Typography>
          You may contact Ace through e-mail at{' '}
          <a
            children="ace@quisido.com"
            href="mailto:ace@quisido.com"
            rel="noopener noreferrer"
            target="_blank"
            title="E-mail ace@quisido.com"
          />
          .
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(contactStyles)(Contact);
