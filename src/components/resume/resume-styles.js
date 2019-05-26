import { withStyles } from '@material-ui/core';

export default withStyles(theme => ({
  root: {
    padding: '0 0 2em 0',
    textAlign: 'center',
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
