import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import notFoundStyles from './not-found-styles';

class NotFound extends React.PureComponent {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Typography children="The page you requested could not be found." />
      </Paper>
    );
  }
}

export default withStyles(notFoundStyles)(NotFound);
