import ItemId from '../constants/item-id';
import type CarouselItem from '../types/carousel-item';

export default interface ProjectItem extends Omit<CarouselItem, 'title'> {
  id: ItemId;
}
