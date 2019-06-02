import { Button } from '@material-ui/core';
import React from 'react';
import withStyles from './featured-styles';

export default withStyles(
  function Featured({ classes }) {
    return (
      <>
        <div className={classes.root}>
          <Button>View more projects</Button>
        </div>
      </>
    );
  }
);
