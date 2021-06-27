import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { PaginationProps } from '@awsui/components-react/pagination';
import type { ComponentType } from 'react';
import { useMemo } from 'react';
import { usePagination } from 'use-awsui';
import type CarouselItem from '../../types/carousel-item';
import mapItemToIcon from '../../utils/map-carousel-item-to-icon';

interface State {
  Children: ComponentType<unknown>;
  currentPageIndex: number;
  handlePaginationChange(
    this: void,
    event: NonCancelableCustomEvent<PaginationProps.ChangeDetail>,
  ): void;
  icons: string[];
  itemTitle: string;
}

export default function useCarousel(items: CarouselItem[]): State {
  // States
  const { currentPageIndex, handleChange: handlePaginationChange } =
    usePagination();

  const item: CarouselItem = items[currentPageIndex - 1];

  return {
    Children: item.body,
    currentPageIndex,
    handlePaginationChange,
    icons: useMemo((): string[] => items.map(mapItemToIcon), [items]),
    itemTitle: item.title,
  };
}
