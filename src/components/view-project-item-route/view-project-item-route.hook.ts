import { useParams } from 'react-router';
import ItemId from '../../constants/item-id';
import ProjectId from '../../constants/project-id';
import PROJECTS from '../../constants/projects';
import type ProjectItem from '../../types/project-item';

export interface FoundState {
  readonly itemIndex: number;
  readonly projectId: ProjectId;
  readonly to: null;
}

export interface NotFoundState {
  readonly to: string;
}

interface Params {
  readonly item: ItemId;
  readonly project: ProjectId;
}

export default function useViewProjectItemRoute(): FoundState | NotFoundState {
  const { item: itemId, project: projectId } = useParams<Params>();

  if (!Object.prototype.hasOwnProperty.call(PROJECTS, projectId)) {
    return {
      to: '/projects',
    };
  }

  const findItem = ({ id }: ProjectItem): boolean => id === itemId;
  const itemIndex: number = PROJECTS[projectId].items.findIndex(findItem);

  if (itemIndex === -1) {
    const { id: firstItemId }: ProjectItem = PROJECTS[projectId].items[0];
    return {
      to: `/projects/${projectId}/${firstItemId}`,
    };
  }

  return {
    itemIndex,
    projectId,
    to: null,
  };
}
