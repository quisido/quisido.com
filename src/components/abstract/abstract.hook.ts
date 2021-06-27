import type { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import type { Attributes } from 'react';
import { useMemo } from 'react';
import type { CollectionLinkProps } from '../../components/collection-link';
import AbstractionId from '../../constants/abstraction-id';
import AbstractionItemId from '../../constants/abstraction-item-id';
import ABSTRACTIONS from '../../constants/abstractions';
import useMapAbstractionIdToTitle from '../../hooks/use-map-abstraction-id-to-title';
import type Collection from '../../types/collection';

interface State {
  breadcrumbs: BreadcrumbGroupProps.Item[];
  collectionLinkProps: (Attributes & CollectionLinkProps)[];
}

export default function useAbstract(): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();
  const mapIdToTitle = useMapAbstractionIdToTitle();

  return {
    breadcrumbs: useMemo(
      (): BreadcrumbGroupProps.Item[] => [
        {
          href: '/abstract',
          text: translate('Abstract') || '...',
        },
      ],
      [translate],
    ),

    collectionLinkProps: useMemo((): (Attributes & CollectionLinkProps)[] => {
      const mapCollectionToLinkProps = (
        collection: Collection<AbstractionId, AbstractionItemId>,
      ): Attributes & CollectionLinkProps => ({
        children: mapIdToTitle(collection.id) || '...',
        icon: collection.items[collection.items.length - 1].icon,
        key: collection.id,
        to: `/abstract/${collection.id}`,
      });

      const sortAbstractionsByTitle = (
        a: Collection<AbstractionId, AbstractionItemId>,
        b: Collection<AbstractionId, AbstractionItemId>,
      ): -1 | 0 | 1 => {
        const aValue: string = mapIdToTitle(a.id) || a.id;
        const bValue: string = mapIdToTitle(b.id) || b.id;
        if (aValue < bValue) {
          return -1;
        }
        if (aValue > bValue) {
          return 1;
        }
        return 0;
      };

      return ABSTRACTIONS.sort(sortAbstractionsByTitle).map(
        mapCollectionToLinkProps,
      );
    }, [mapIdToTitle]),
  };
}
