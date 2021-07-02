import type { ReactElement } from 'react';
import { useMemo } from 'react';
import ProjectItemBody from '../../components/project-item-body';
import ItemId from '../../constants/item-id';
import useMapItemIdToTitle from '../../hooks/use-map-item-id-to-title';
import type CarouselItem from '../../types/carousel-item';
import type ProjectItem from '../../types/project-item';

interface Props {
  items: ProjectItem[];
  projectTitle?: string;
}

export default function useViewProjectItemCarouselItems({
  items,
  projectTitle,
}: Props): CarouselItem[] {
  // Contexts
  const mapItemIdToTitle = useMapItemIdToTitle();

  return useMemo((): CarouselItem[] => {
    const mapIdToTitle = (id: ItemId): null | string => {
      if (id === ItemId.Index) {
        return projectTitle || '...';
      }
      return mapItemIdToTitle(id) || '...';
    };

    const mapProjectItemToCarouselItem = ({
      date,
      icon,
      images,
      id,
    }: ProjectItem): CarouselItem => {
      return {
        icon: icon,
        title: mapIdToTitle(id),
        Body: function CarouselItemBody(): ReactElement {
          return <ProjectItemBody date={date} images={images} />;
        },
      };
    };

    return items.map(mapProjectItemToCarouselItem);
  }, [items, mapItemIdToTitle, projectTitle]);
}
