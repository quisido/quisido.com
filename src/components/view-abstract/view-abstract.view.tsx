import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import Carousel from '../../components/carousel';
import AbstractionId from '../../constants/abstraction-id';
import AbstractionItemId from '../../constants/abstraction-item-id';
import type CollectionItem from '../../types/collection-item';
import useViewAbstract from './view-abstract.hook';

interface Props {
  id: AbstractionId;
  items: CollectionItem<AbstractionItemId>[];
}

export default function ViewAbstract({
  id,
  items: collectionItems,
}: Props): ReactElement {
  const { breadcrumbs, carouselItems, title } = useViewAbstract({
    collectionItems,
    id,
  });

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Carousel items={carouselItems} title={title} />
    </AppLayout>
  );
}
