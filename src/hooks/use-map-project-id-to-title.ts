import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useCallback } from 'react';
import ProjectId from '../constants/project-id';

export default function useMapProjectIdToTitle(): (
  id: ProjectId,
) => string | undefined {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return useCallback(
    (id: ProjectId): string | undefined => {
      switch (id) {
        case ProjectId.DarkSoulsDarkroot:
          return 'Dark Souls: Darkroot';
        case ProjectId.StudyOfNightZagWall:
          return translate('Study of Night Zag Wall');
      }
    },
    [translate],
  );
}
