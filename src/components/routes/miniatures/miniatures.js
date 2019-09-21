import { Paper, Typography, withStyles } from '@material-ui/core';
import React from 'react';

export default withStyles({
  root: {
    marginTop: '2em',
    padding: '1em',
  },
  title: {
    fontSize: '2em',
    textAlign: 'center',
  },
})(function Miniatures({ classes }) {
  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h2">
        Miniatures
      </Typography>
    </Paper>
  );
});
