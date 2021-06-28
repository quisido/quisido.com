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
import unregisterServiceWorkers from './utils/unregister-service-workers';

applyMode(Mode.Dark, document.body);
applyDensity(Density.Comfortable, document.body);
disableMotion(false, document.body);

render(<App />, root);

unregisterServiceWorkers().catch((err: unknown): void => {
  console.error('Could not unregister service workers.', err);
});
