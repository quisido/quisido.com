import {
  Density,
  Mode,
  applyDensity,
  applyMode,
  disableMotion,
} from '@awsui/global-styles';
import { init } from '@sentry/react';
import { render } from 'react-dom';
import App from './components/app';
import browserTracing from './constants/browser-tracing';
import root from './constants/root';
import './utils/report-web-vitals';

const NPM_PACKAGE_VERSION: string = process.env.npm_package_version || '0.0.1';
const SENTRY_ACCOUNT = 'o592283';
const SENTRY_KEY = '73d870f1bc484ad6bbd88a50d2f98387';
const SENTRY_PROJECT = 5825544;

applyMode(Mode.Dark, document.body);
applyDensity(Density.Comfortable, document.body);
disableMotion(false, document.body);

init({
  dsn: `https://${SENTRY_KEY}@${SENTRY_ACCOUNT}.ingest.sentry.io/${SENTRY_PROJECT}`,
  integrations: [browserTracing],
  release: `quisido.com@${NPM_PACKAGE_VERSION}`,
  tracesSampleRate: 1.0,
});

render(<App />, root);
