import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import Carousel from '../../components/carousel';
import ProjectId from '../../constants/project-id';
import useViewProjectItem from './view-project-item.hook';

interface Props {
  itemIndex: number;
  projectId: ProjectId;
}

export default function ViewProjectItem({
  itemIndex,
  projectId,
}: Props): ReactElement {
  const { breadcrumbs, carouselItems, handleIndexChange, title } =
    useViewProjectItem({
      itemIndex,
      projectId,
    });

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Carousel
        index={itemIndex}
        items={carouselItems}
        onIndexChange={handleIndexChange}
        title={title}
      />
    </AppLayout>
  );
}
