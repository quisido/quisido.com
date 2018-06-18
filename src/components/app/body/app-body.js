import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import About from '../routes/about/about';
import Contact from '../routes/contact/contact';
import NotFound from '../routes/not-found/not-found';
import appBodyStyles from './app-body-styles';

const ComingSoon = withStyles({
  paper: {
    margin: '1em',
    padding: '1em'
  }
})(
  class ComingSoon extends React.PureComponent {
    render() {
      return (
        <Paper className={this.props.classes.paper}>
          <Typography>Coming soon...</Typography>
        </Paper>
      );
    }
  }
);

class AppBody extends React.PureComponent {
  render() {
    return (
      <main className={this.props.classes.root}>
        <Switch>
          <Route
            component={About}
            exact
            path="/"
            sensitive
            strict
          />
          <Route
            component={ComingSoon}
            exact
            path="/portfolio"
            sensitive
            strict
          />
          <Route
            component={Contact}
            exact
            path="/contact"
            sensitive
            strict
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default withStyles(appBodyStyles)(AppBody);
