import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useCallback } from 'react';
import ItemId from '../constants/item-id';

export default function useMapItemIdToTitle(): (
  id: ItemId,
) => string | undefined {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return useCallback(
    (id: ItemId): string | undefined => {
      switch (id) {
        case ItemId.Elevation:
          return translate('Elevation');
        case ItemId.Pieces:
          return translate('Pieces');
        case ItemId.Portions:
          return translate('Portions');
      }
    },
    [translate],
  );
}
