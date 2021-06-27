import type { PaginationProps } from '@awsui/components-react/pagination';
import Pagination from '@awsui/components-react/pagination';
import { ReactElement } from 'react';
import useAwsuiIconPagination from './awsui-icon-pagination.hook';

interface Props extends Omit<PaginationProps, 'pagesCount'> {
  height?: number;
  items: string[];
  width?: number;
}

export default function AwsuiIconPagination({
  currentPageIndex,
  height = 24,
  items,
  width = 20,
  ...paginationProps
}: Props): null | ReactElement {
  const { ref } = useAwsuiIconPagination({
    currentPageIndex,
    height,
    icons: items,
    width,
  });

  return (
    <div ref={ref}>
      <Pagination
        currentPageIndex={currentPageIndex}
        pagesCount={items.length}
        {...paginationProps}
      />
    </div>
  );
}
