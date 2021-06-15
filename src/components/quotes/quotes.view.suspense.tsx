import Box from '@awsui/components-react/box';
import Spinner from '@awsui/components-react/spinner';
import I18n from 'lazy-i18n';
import { ReactElement, Suspense } from 'react';
import LazyQuotes from './quotes.lazy';

export default function QuotesSuspense(): ReactElement {
  return (
    <Suspense
      fallback={
        <Box textAlign="center">
          <Spinner />
          <I18n>Loading quotes</I18n>
        </Box>
      }
    >
      <LazyQuotes />
    </Suspense>
  );
}
