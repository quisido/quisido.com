import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';

interface State {
  breadcrumbs: BreadcrumbGroupProps.Item[];
}

export default function useSculptures(): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return {
    breadcrumbs: useMemo(
      (): BreadcrumbGroupProps.Item[] => [
        {
          href: '/sculptures',
          text: translate('Sculptures') || '...',
        },
      ],
      [translate],
    ),
  };
}
