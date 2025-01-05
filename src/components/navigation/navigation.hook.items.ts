import { SideNavigationProps } from '@awsui/components-react/side-navigation';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import RESUME_HREF from '../../constants/resume-href';

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
        href: '/projects',
        text: translate('Projects') || '...',
        type: 'link',
      },
      {
        external: true,
        href: RESUME_HREF,
        text: translate('Résumé') || '...',
        type: 'link',
      },
      {
        type: 'divider',
      },
      {
        href: '/projects?type=abstract',
        text: translate('Abstract') || '...',
        type: 'link',
      },
      {
        href: '/projects?type=dry-media',
        text: translate('Dry media') || '...',
        type: 'link',
      },
      {
        href: '/projects?type=fabrication',
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
        href: '/projects?type=miniatures',
        text: translate('Miniatures') || '...',
        type: 'link',
      },
      {
        href: '/projects?type=sculptures',
        text: translate('Sculptures') || '...',
        type: 'link',
      },
      {
        type: 'divider',
      },
      {
        external: true,
        href: 'mailto:jaq@quisido.com',
        text: translate('Email') || '...',
        type: 'link',
      },
      {
        external: true,
        href: 'https://www.linkedin.com/in/acequisido/',
        text: 'LinkedIn',
        type: 'link',
      },
    ],
    [translate],
  );
}
