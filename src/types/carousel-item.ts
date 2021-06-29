import type { ComponentType } from 'react';

export default interface CarouselItem {
  Body: ComponentType<unknown>;
  icon: string;
  title: null | string;
}
