import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useBreadcrumbGroup } from 'use-awsui-router';
import useItems from './breadcrumbs.hook.items';

interface State {
  ariaLabel?: string;
  handleFollow: BreadcrumbGroupProps['onFollow'];
  items: readonly BreadcrumbGroupProps.Item[];
}

export default function useBreadcrumbs(
  breadcrumbs: readonly BreadcrumbGroupProps.Item[],
): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const { handleFollow } = useBreadcrumbGroup();

  return {
    ariaLabel: translate('Breadcrumbs'),
    handleFollow,
    items: useItems(breadcrumbs),
  };
}
