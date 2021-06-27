import {
  Density,
  Mode,
  applyDensity,
  applyMode,
  disableMotion,
} from '@awsui/global-styles';
import { render } from 'react-dom';
import App from './components/app';
import root from './constants/root';
import './utils/init-sentry';
import './utils/report-web-vitals';

applyMode(Mode.Dark, document.body);
applyDensity(Density.Comfortable, document.body);
disableMotion(false, document.body);

render(<App />, root);
