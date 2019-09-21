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
})(function DryMedia({ classes }) {
  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h2">
        Dry Media
      </Typography>
    </Paper>
  );
});
