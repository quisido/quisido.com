import { withStyles } from '@material-ui/core';
import proficiencies from '../../../assets/proficiencies.png';

const DESKTOP_MEDIA_QUERY =  '@media (min-width: 66rem)';
const MOBILE_MEDIA_QUERY = '@media (max-width: 66rem)';

const ICON_SIZE = 64;

export default withStyles({
  '@keyframes proficiency': {
    '0%': {
      filter: 'hue-rotate(10deg) saturate(100%)',
    },
    '50%': {
      filter: 'hue-rotate(10deg) saturate(100%)',
    },
    '100%': {
      filter: 'hue-rotate(370deg) saturate(100%)',
    },
  },
  aboutMe: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-start',
    [DESKTOP_MEDIA_QUERY]: {
      flexDirection: 'row'
    },
    [MOBILE_MEDIA_QUERY]: {
      flexDirection: 'column'
    }
  },
  aboutMeAvatar: {
    borderRadius: 50,
    boxShadow:
      '0 1px 5px 0 rgba(0, 0, 0, 0.2), ' +
      '0 2px 2px 0 rgba(0, 0, 0, 0.14), ' +
      '0 3px 1px -2px rgba(0, 0, 0, 0.12)',
    margin: '1em',
    [DESKTOP_MEDIA_QUERY]: {
      marginRight: 0
    },
    [MOBILE_MEDIA_QUERY]: {
      marginBottom: 0
    }
  },
  aboutMeHighlight: {
    color: '#FFFFFF'
  },
  aboutMeParagraph: {
    flexBasis: 0,
    flexGrow: 2,
    fontSize: 16,
    lineHeight: '2em',
    textIndent: '1em',
    padding: '1em'
  },
  paper: {
    margin: '2em 1em'
  },
  proficiencies: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: `3em ${ICON_SIZE}px !important`,
  },
  proficiency: {
    backgroundImage: `url("${proficiencies}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    display: 'inline-block',
    filter: 'hue-rotate(10deg) saturate(0%)',
    height: ICON_SIZE,
    margin: ICON_SIZE / 4,
    maxHeight: ICON_SIZE,
    maxWidth: ICON_SIZE,
    minHeight: ICON_SIZE,
    minWidth: ICON_SIZE,
    transitionDuration: '0.5s',
    transitionProperty: 'filter',
    transitionTimingFunction: 'ease-out',
    width: ICON_SIZE,
    '&:hover': {
      animationDelay: '0s',
      animationDuration: '10s',
      animationIterationCount: 'infinite',
      animationName: 'proficiency',
      animationTimingFunction: 'linear',
      filter: 'saturate(100%)',
    },
    '& > span': {
      visibility: 'hidden',
    }
  },
  section: {
    padding: '3em 1em',
    textAlign: 'center',
    '& + $section': {
      paddingTop: '2em'
    }
  }
});
