import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';

export default function useBreadcrumbsItems(
  breadcrumbs: readonly BreadcrumbGroupProps.Item[],
): readonly BreadcrumbGroupProps.Item[] {
  const breadcrumbsCount: number = breadcrumbs.length;

  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const homeText: string = useMemo((): string => {
    if (breadcrumbsCount === 0) {
      return 'Quisido.com';
    }
    return translate('Home') || '...';
  }, [breadcrumbsCount, translate]);

  return useMemo(
    (): readonly BreadcrumbGroupProps.Item[] => [
      {
        text: homeText,
        href: '/',
      },
      ...breadcrumbs,
    ],
    [breadcrumbs, homeText],
  );
}
