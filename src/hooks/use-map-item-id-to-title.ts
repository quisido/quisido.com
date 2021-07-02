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
        case ItemId.Artorias:
          return 'Artorias';
        case ItemId.Blueprint:
          return translate('Blueprint');
        case ItemId.BrittanyWelsh:
          return 'Brittany Welsh';
        case ItemId.Chiaroscuro:
          return translate('Chiaroscuro');
        case ItemId.Collage:
          return translate('Collage');
        case ItemId.DemonicFoliage:
          return translate('Demonic Foliage');
        case ItemId.Elevation:
          return translate('Elevation');
        case ItemId.GirlInTheRedDress:
          return translate('Girl in the Red Dress');
        case ItemId.Index:
          return;
        case ItemId.MushroomParentAndChild:
          return translate('Mushroom Parent and Child');
        case ItemId.Pieces:
          return translate('Pieces');
        case ItemId.PlowScarecrow:
          return translate('Plow Scarecrow');
        case ItemId.Portions:
          return translate('Portions');
        case ItemId.ShearsScarecrow:
          return translate('Shears Scarecrow');
        case ItemId.SifTheGreatGreyWolf:
          return translate('Sif, the Great Grey Wolf');
        case ItemId.Source:
          return translate('Source');
        case ItemId.StoneGuardian:
          return translate('Stone Guardian');
        case ItemId.StoneKnight:
          return translate('Stone Knight');
      }
    },
    [translate],
  );
}
