import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useCallback } from 'react';
import AbstractionId from '../constants/abstraction-id';

export default function useMapAbstractionIdToTitle(): (
  id: AbstractionId,
) => string | undefined {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return useCallback(
    (id: AbstractionId): string | undefined => {
      switch (id) {
        case AbstractionId.StudyOfNightZagWall:
          return translate('Study of Night Zag Wall');
      }
    },
    [translate],
  );
}
