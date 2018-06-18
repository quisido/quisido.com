import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Route from 'react-router-dom/Route';
import appStyles from './app-styles';
import Body from './body/app-body';
import Footer from './footer/app-footer';
import Header from './header/app-header';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.children = this.children.bind(this);
  }

  children(props) {
    const page =
      props.match.isExact ?
        props.match.url.replace(/^\//, '') || 'about' :
        null;
    return [
      <Header
        key={0}
        page={page}
      />,
      <Body
        key={1}
        page={page}
      />,
      <Footer key={2} />
    ];
  }

  render() {
    return [
      <CssBaseline key={0} />,
      <Route
        children={this.children}
        key={1}
        path="(/|/contact|/portfolio)?"
        sensitive
        strict
      />
    ];
  }
}

export default withStyles(appStyles)(App);
