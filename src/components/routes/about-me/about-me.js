import { Paper, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import quotes from '../../../assets/quotes';
import withStyles from './about-me-styles';
import Quotes from './quotes/quotes';

const proficiencies = [
  'Adobe Illustrator CC',
  'Adobe Photoshop CC',
  'Autodesk AutoCAD',
  'Autodesk Revit',
  'Rhinoceros 5'
];

class AboutMe extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Paper className={this.props.classes.paper + ' ' + this.props.classes.aboutMe}>
          <img
            alt="Avatar"
            className={this.props.classes.aboutMeAvatar}
            height={100}
            src="https://en.gravatar.com/userimage/153264571/57b76baf3788235b870f35e5fefece71.jpg?size=100"
            width={100}
          />
          <Typography
            className={this.props.classes.aboutMeParagraph}
            variant="subtitle1"
          >
            My name is <span
              children="Ace Quisido"
              className={this.props.classes.aboutMeHighlight}
            />,{' '}
            and I'm a{' '}
            <span
              children="freelance artist"
              className={this.props.classes.aboutMeHighlight}
            />{' '}
            with a focus in painting and woodworking.
            My expertise is in portraiture, and I have a strong background in sales and interior design.
          </Typography>
        </Paper>
        <section className={`${this.props.classes.section} ${this.props.classes.proficiencies}`}>
          {proficiencies.map((proficiency, index) =>
            <Tooltip
              key={proficiency}
              placement="top"
              title={proficiency}
            >
              <span
                className={this.props.classes.proficiency}
                style={{
                  backgroundPosition: (-64 * index) + 'px center'
                }}
              >
                <span>{proficiency}</span>
              </span>
            </Tooltip>
          )}
        </section>
        <Paper className={this.props.classes.paper}>
          <Quotes quotes={quotes} />
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(AboutMe);
