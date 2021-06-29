import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { PaginationProps } from '@awsui/components-react/pagination';
import type { ComponentType } from 'react';
import { useCallback, useMemo } from 'react';
import { usePagination } from 'use-awsui';
import type CarouselItem from '../../types/carousel-item';
import mapItemToIcon from '../../utils/map-carousel-item-to-icon';

interface Props {
  readonly index: number;
  readonly items: CarouselItem[];
  readonly onIndexChange: (index: number) => void;
}

interface State {
  readonly Children: ComponentType<unknown>;
  readonly currentPageIndex: number;
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
}: Props): State {
  // States
  const { handleChange: handlePaginationChange } = usePagination({
    onCurrentPageIndexChange: useCallback(
      (newPageIndex: number): void => {
        onIndexChange(newPageIndex - 1);
      },
      [onIndexChange],
    ),
  });

  const { Body, title }: CarouselItem = items[index];

  return {
    Children: Body,
    currentPageIndex: index + 1,
    handlePaginationChange,
    icons: useMemo((): string[] => items.map(mapItemToIcon), [items]),
    itemTitle: title,
  };
}
