import type { ComponentType } from 'react';

export default interface CarouselItem {
  body: ComponentType<unknown>;
  icon: string;
  title: string;
}
