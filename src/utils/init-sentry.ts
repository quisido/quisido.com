import { init } from '@sentry/react';
import browserTracing from '../constants/browser-tracing';

const NPM_PACKAGE_VERSION: string = process.env.npm_package_version || '0.0.1';
const SENTRY_ACCOUNT = 'o592283';
const SENTRY_KEY = '73d870f1bc484ad6bbd88a50d2f98387';
const SENTRY_PROJECT = 5825544;

if (process.env.NODE_ENV !== 'development') {
  init({
    dsn: `https://${SENTRY_KEY}@${SENTRY_ACCOUNT}.ingest.sentry.io/${SENTRY_PROJECT}`,
    integrations: [browserTracing],
    release: `quisido.com@${NPM_PACKAGE_VERSION}`,
    tracesSampleRate: 1.0,
  });
}
