import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import portfolioStyles from './portfolio-styles';

class Portfolio extends React.PureComponent {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Typography>
          <a
            children="AceAlters.com"
            href="https://acealters.com/"
            rel="noopener noreferrer"
            target="_blank"
            title="AceAlters.com"
          />{' '}
          - a gallery of high quality <em>Magic: The Gathering</em> card alters.
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(portfolioStyles)(Portfolio);
