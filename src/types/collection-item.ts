import CarouselItem from './carousel-item';

export default interface CollectionItem<ItemId extends string>
  extends Omit<CarouselItem, 'title'> {
  id: ItemId;
}
