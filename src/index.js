import React from 'react';
import ReactDOM from 'react-dom';
import ReactPortfolio from 'react-portfolio';
import registerServiceWorker from './register-service-worker';
import {
  FOOTER,
  PRIMARY,
  RESUME_VERSION,
  SECONDARY,
  SOCIAL,
} from './utils/context';
import ROUTES from './utils/routes';
import THEME from './utils/theme';

ReactDOM.render(
  <ReactPortfolio
    copyright={2018}
    footer={FOOTER}
    lightness={0.54}
    resume={`/resume/${RESUME_VERSION}/ace-quisido-resume.pdf`}
    routes={ROUTES}
    primary={PRIMARY}
    saturation={0.55}
    secondary={SECONDARY}
    social={SOCIAL}
    theme={THEME}
    title="Ace Quisido"
  />,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
