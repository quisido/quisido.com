import type { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import AbstractionId from '../../constants/abstraction-id';
import AbstractionItemId from '../../constants/abstraction-item-id';
import useMapAbstractionIdToTitle from '../../hooks/use-map-abstraction-id-to-title';
import CarouselItem from '../../types/carousel-item';
import CollectionItem from '../../types/collection-item';

interface Props {
  collectionItems: CollectionItem<AbstractionItemId>[];
  id: AbstractionId;
}

interface State {
  breadcrumbs: BreadcrumbGroupProps.Item[];
  carouselItems: CarouselItem[];
  title: string;
}

export default function useViewAbstract({ collectionItems, id }: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();
  const mapIdToTitle = useMapAbstractionIdToTitle();
  const title: string | undefined = mapIdToTitle(id);

  return {
    title: title || '...',

    breadcrumbs: useMemo((): BreadcrumbGroupProps.Item[] => {
      return [
        {
          href: '/abstract',
          text: translate('Abstract') || '...',
        },
        {
          href: `/abstract/${id}`,
          text: title || '...',
        },
      ];
    }, [id, title, translate]),

    carouselItems: useMemo((): CarouselItem[] => {
      const mapIdToTitle = (id: AbstractionItemId): string => {
        switch (id) {
          case AbstractionItemId.Pieces:
            return translate('Pieces') || '...';
          case AbstractionItemId.Portions:
            return translate('Portions') || '...';
        }
      };

      const mapCollectionItemToCarouselItem = (
        item: CollectionItem<AbstractionItemId>,
      ): CarouselItem => {
        return {
          body: item.body,
          icon: item.icon,
          title: mapIdToTitle(item.id),
        };
      };

      return collectionItems.map(mapCollectionItemToCarouselItem);
    }, [collectionItems, translate]),
  };
}
