import type { ReactElement } from 'react';
import { useMemo } from 'react';
import ProjectItemBody from '../../components/project-item-body';
import useMapItemIdToTitle from '../../hooks/use-map-item-id-to-title';
import type CarouselItem from '../../types/carousel-item';
import type ProjectItem from '../../types/project-item';

export default function useViewProjectItemCarouselItems(
  items: ProjectItem[],
): CarouselItem[] {
  // Contexts
  const mapItemIdToTitle = useMapItemIdToTitle();

  return useMemo((): CarouselItem[] => {
    const mapProjectItemToCarouselItem = ({
      date,
      icon,
      images,
      id,
    }: ProjectItem): CarouselItem => {
      return {
        icon: icon,
        title: mapItemIdToTitle(id) || '...',
        Body: function CarouselItemBody(): ReactElement {
          return <ProjectItemBody date={date} images={images} />;
        },
      };
    };

    return items.map(mapProjectItemToCarouselItem);
  }, [items, mapItemIdToTitle]);
}
