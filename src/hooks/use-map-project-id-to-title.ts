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
        case ProjectId.ConferenceTable:
          return translate('Conference Table');
        case ProjectId.DarkSoulsDarkroot:
          return 'Dark Souls: Darkroot';
        case ProjectId.JabbaTheSlut:
          return 'Jabba the Slut';
        case ProjectId.LakeCollage:
          return translate('Lake Collage');
        case ProjectId.MiscellaneousDryMedia:
          return translate('Miscellaneous Dry Media');
        case ProjectId.ResinRiverBox:
          return translate('Resin River Box');
        case ProjectId.StudyOfNightZagWall:
          return translate('Study of Night Zag Wall');
        case ProjectId.WoodenDeckBox:
          return translate('Wooden Deck Box');
      }
    },
    [translate],
  );
}
