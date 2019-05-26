import { Paper, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import quotes from '../../../assets/quotes';
import Resume from '../../resume';
import withStyles from './about-me-styles';
import Quotes from './quotes/quotes';

const proficiencies = [
  'Adobe Illustrator CC',
  'Adobe Photoshop CC',
  'Autodesk AutoCAD',
  'Autodesk Revit',
  'Rhinoceros 5'
];

export default withStyles(
  function AboutMe({ classes }) {
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <div className={classes.aboutMe}>
            <img
              alt="Avatar"
              className={classes.aboutMeAvatar}
              height={100}
              src="https://en.gravatar.com/userimage/153264571/57b76baf3788235b870f35e5fefece71.jpg?size=100"
              width={100}
            />
            <Typography
              className={classes.aboutMeParagraph}
              variant="subtitle1"
            >
              My name is <span
                children="Ace Quisido"
                className={classes.aboutMeHighlight}
              />,{' '}
              and I'm a{' '}
              <span
                children="freelance artist"
                className={classes.aboutMeHighlight}
              />{' '}
              with a focus in painting and woodworking.
              My expertise is in portraiture, and I have a strong background in sales and interior design.
            </Typography>
          </div>
          <Resume />
        </Paper>
        <section className={`${classes.section} ${classes.proficiencies}`}>
          {proficiencies.map((proficiency, index) =>
            <Tooltip
              key={proficiency}
              placement="top"
              title={proficiency}
            >
              <span
                className={classes.proficiency}
                style={{
                  backgroundPosition: (-64 * index) + 'px center'
                }}
              >
                <span>{proficiency}</span>
              </span>
            </Tooltip>
          )}
        </section>
        {/*
        <Paper className={classes.paper}>
          <Typography
            className={classes.h2}
            variant="h2"
          >
            Featured Projects:
          </Typography>
        </Paper>
        */}
        <Paper className={classes.paper}>
          <Quotes quotes={quotes} />
        </Paper>
      </React.Fragment>
    );
  }
);
