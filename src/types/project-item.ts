import ItemId from '../constants/item-id';
import type CarouselItem from '../types/carousel-item';
import type ProjectItemImage from '../types/project-item-image';

export default interface ProjectItem
  extends Omit<CarouselItem, 'Body' | 'title'> {
  date: string;
  id: ItemId;
  images: ProjectItemImage[];
}
