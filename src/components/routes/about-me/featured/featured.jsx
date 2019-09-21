import {
  Button,
  Grid,
  Tooltip,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import acealters from './images/acealters.jpg';
import dryMedia from './images/dry-media.jpg';
import fabrication from './images/fabrication.jpg';
import miniatures from './images/miniatures.jpg';

const SIZE_SMALL = 480;
const SIZE_LARGE = 512;

export default withStyles({
  root: {
    paddingBottom: '1em',
    paddingTop: '1em',
    textAlign: 'center',
  },
  h2: {
    fontSize: '2em',
    paddingBottom: '0.5em',
  },
  link: {
    display: 'inline-block',
    padding: (SIZE_LARGE - SIZE_SMALL) / 2,
    transitionDelay: '0s',
    transitionDuration: '0.1s',
    transitionProperty: 'padding',
    transitionTimingFunction: 'ease-in',
    '&:hover': {
      padding: 0,
      '& img': {
        height: SIZE_LARGE,
        width: SIZE_LARGE,
      },
    },
    '& img': {
      transitionDelay: '0s',
      transitionDuration: '0.1s',
      transitionProperty: 'height width',
      transitionTimingFunction: 'ease-in',
    },
  },
})(function Featured({ classes }) {
  return (
    <div className={classes.root}>
      <Typography className={classes.h2} variant="h2">
        Portfolio
      </Typography>
      <Grid
        alignContent="center"
        alignItems="center"
        container
        justify="space-around"
        spacing={0}
      >
        <Grid item>
          <Tooltip placement="left" title="AceAlters.com">
            <a
              className={classes.link}
              href="https://acealters.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="alters"
                height={SIZE_SMALL}
                src={acealters}
                width={SIZE_SMALL}
              />
            </a>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip placement="right" title="Dry Media">
            <Link className={classes.link} to="/dry-media">
              <img
                alt="dry media"
                height={SIZE_SMALL}
                src={dryMedia}
                width={SIZE_SMALL}
              />
            </Link>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip placement="left" title="Fabrication">
            <Link
              className={classes.link}
              to="/fabrication"
              title="Fabrication"
            >
              <img
                alt="fabrication"
                height={SIZE_SMALL}
                src={fabrication}
                width={SIZE_SMALL}
              />
            </Link>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip placement="right" title="Miniatures">
            <Link className={classes.link} to="/miniatures" title="Miniatures">
              <img
                alt="miniatures"
                height={SIZE_SMALL}
                src={miniatures}
                width={SIZE_SMALL}
              />
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
      <Link to="/portfolio">
        <Button>View more projects</Button>
      </Link>
    </div>
  );
});
