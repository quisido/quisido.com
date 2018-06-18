import { mobileMediaQuery } from '../../../constants/breakpoints';

export default (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    fontFamily: '"Architects Daughter", cursive',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  toolbar: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0
  },
  [mobileMediaQuery]: {
    title: {
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 2
    },
    toolbar: {
      flexDirection: 'column'
    }
  }
});
