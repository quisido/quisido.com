import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { PaginationProps } from '@awsui/components-react/pagination';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import type { ComponentType } from 'react';
import { useCallback, useMemo } from 'react';
import { usePagination } from 'use-awsui';
import type CarouselItem from '../../types/carousel-item';
import mapItemToIcon from '../../utils/map-carousel-item-to-icon';

interface Props {
  readonly index: number;
  readonly items: CarouselItem[];
  readonly onIndexChange: (index: number) => void;
  readonly title: string;
}

interface State {
  readonly Children: ComponentType<unknown>;
  readonly currentPageIndex: number;
  readonly description?: string;
  readonly icons: string[];
  readonly itemTitle: null | string;
  readonly handlePaginationChange: (
    event: NonCancelableCustomEvent<PaginationProps.ChangeDetail>,
  ) => void;
}

export default function useCarousel({
  index,
  items,
  onIndexChange,
  title: projectTitle,
}: Props): State {
  const itemsCount: number = items.length;

  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const { handleChange: handlePaginationChange } = usePagination({
    onCurrentPageIndexChange: useCallback(
      (newPageIndex: number): void => {
        onIndexChange(newPageIndex - 1);
      },
      [onIndexChange],
    ),
  });

  const { Body, title: itemTitle }: CarouselItem = items[index];
  const currentPageIndex: number = index + 1;

  return {
    Children: Body,
    currentPageIndex,
    handlePaginationChange,
    icons: useMemo((): string[] => items.map(mapItemToIcon), [items]),
    itemTitle,

    description: useMemo((): string | undefined => {
      if (itemsCount === 1) {
        return;
      }
      return translate('$title ($n/$total)', {
        n: currentPageIndex,
        title: projectTitle,
        total: itemsCount,
      });
    }, [currentPageIndex, itemsCount, projectTitle, translate]),
  };
}
