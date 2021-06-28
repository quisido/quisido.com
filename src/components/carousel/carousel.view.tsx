import Container from '@awsui/components-react/container';
import Header from '@awsui/components-react/header';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';
import AwsuiIconPagination from '../../shared/awsui-icon-pagination';
import type CarouselItem from '../../types/carousel-item';
import useCarousel from './carousel.hook';

interface Props {
  readonly index: number;
  readonly items: CarouselItem[];
  readonly onIndexChange: (index: number) => void;
  readonly title: string;
}

export default function Carousel({
  index,
  items,
  onIndexChange,
  title,
}: Props): ReactElement {
  const {
    Children,
    currentPageIndex,
    handlePaginationChange,
    icons,
    itemTitle,
  } = useCarousel({
    index,
    items,
    onIndexChange,
  });

  return (
    <Container
      header={
        <Header
          actions={
            <AwsuiIconPagination
              currentPageIndex={currentPageIndex}
              height={24}
              items={icons}
              onChange={handlePaginationChange}
              width={24}
            />
          }
          description={
            <I18n n={currentPageIndex} title={title} total={items.length}>
              $title ($n/$total)
            </I18n>
          }
        >
          {itemTitle}
        </Header>
      }
    >
      <Children />
    </Container>
  );
}
