import { SideNavigationProps } from '@awsui/components-react/side-navigation';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';

export default function useItems(): SideNavigationProps.Item[] {
  const translate: TranslateFunction = useTranslate();

  return useMemo(
    (): SideNavigationProps.Item[] => [
      {
        href: '/',
        text: translate('Home') || '...',
        type: 'link',
      },
      {
        type: 'divider',
      },
      {
        href: '/abstract',
        text: translate('Abstract') || '...',
        type: 'link',
      },
      {
        href: '/dry-media',
        text: translate('Dry media') || '...',
        type: 'link',
      },
      {
        href: '/fabrication',
        text: translate('Fabrication') || '...',
        type: 'link',
      },
      {
        external: true,
        href: 'https://acealters.com/',
        text: translate('Magic: the Gathering alters') || '...',
        type: 'link',
      },
      {
        href: '/miniatures',
        text: translate('Miniatures') || '...',
        type: 'link',
      },
      {
        href: '/sculptures',
        text: translate('Sculptures') || '...',
        type: 'link',
      },
      {
        type: 'divider',
      },
      {
        external: true,
        href: 'https://www.linkedin.com/in/acequisido/',
        text: 'LinkedIn',
        type: 'link',
      },
      {
        external: true,
        href: 'https://twitter.com/AceQuisido',
        text: 'Twitter',
        type: 'link',
      },
    ],
    [translate],
  );
}
