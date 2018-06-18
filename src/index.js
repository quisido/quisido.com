import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/app/app';
import theme from './constants/theme';
import './index.css';
import registerServiceWorker from './register-service-worker';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route component={App} />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
