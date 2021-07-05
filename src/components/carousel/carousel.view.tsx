import Container from '@awsui/components-react/container';
import Header from '@awsui/components-react/header';
import type { ReactElement } from 'react';
import AwsuiIconPagination from '../../shared/awsui-icon-pagination';
import type CarouselItem from '../../types/carousel-item';
import useCarousel from './carousel.hook';
import styles from './carousel.module.scss';

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
    description,
    handlePaginationChange,
    icons,
    itemTitle,
  } = useCarousel({
    index,
    items,
    onIndexChange,
    title,
  });

  return (
    <Container
      className={styles.root}
      header={
        <Header
          description={description}
          actions={
            <AwsuiIconPagination
              currentPageIndex={currentPageIndex}
              height={24}
              items={icons}
              onChange={handlePaginationChange}
              width={24}
            />
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
