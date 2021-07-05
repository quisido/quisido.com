import { colorBackgroundLayoutMain } from '@awsui/design-tokens';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import ProjectType from '../../constants/project-type';
import mapProjectTypeToSrc from './project-banner.util.map-project-type-to-src';

interface State {
  style: CSSProperties;
  text: string;
}

const OPACITY = 66.667;
const RATIO = 800 / 640;

export default function useProjectBanner(projectType: ProjectType): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return {
    style: useMemo((): CSSProperties => {
      const url: string = mapProjectTypeToSrc(projectType);
      return {
        backgroundImage: `
          radial-gradient(
            rgba(0, 0, 0, ${(100 - OPACITY) / 100}) 0%,
            ${colorBackgroundLayoutMain} ${RATIO * 50}%
          ),
          url(${url})
        `,
      };
    }, [projectType]),

    text: useMemo((): string => {
      switch (projectType) {
        case ProjectType.Abstract:
          return translate('Abstract') || '...';
        case ProjectType.DryMedia:
          return translate('Dry media') || '...';
        case ProjectType.Fabrication:
          return translate('Fabrication') || '...';
        case ProjectType.Miniatures:
          return translate('Miniatures') || '...';
      }
    }, [projectType, translate]),
  };
}
