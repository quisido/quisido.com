import { withStyles } from '@material-ui/core';
import proficiencies from '../../../assets/proficiencies.png';

const DESKTOP_MEDIA_QUERY =  '@media (min-width: 66rem)';
const MOBILE_MEDIA_QUERY = '@media (max-width: 66rem)';

export default withStyles({
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
    justifyContent: 'center',
    paddingBottom: 0,
    paddingTop: 0,
  },
  proficiency: {
    backgroundImage: `url("${proficiencies}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    display: 'inline-block',
    filter: 'saturate(0%)',
    height: 64,
    marginBottom: '2.5em',
    marginTop: '2.5em',
    maxHeight: 64,
    maxWidth: 64,
    minHeight: 64,
    minWidth: 64,
    transitionDuration: '0.5s',
    transitionProperty: 'filter',
    transitionTimingFunction: 'ease-out',
    width: 64,
    '&:hover': {
      filter: 'saturate(100%)',
    },
    '&:not(:first-child)': {
      marginLeft: '2.5em',
    },
    '&:not(:last-child)': {
      marginRight: '2.5em',
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
