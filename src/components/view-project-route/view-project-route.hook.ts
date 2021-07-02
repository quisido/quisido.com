import { useParams } from 'react-router';
import ItemId from '../../constants/item-id';
import ProjectId from '../../constants/project-id';
import PROJECTS from '../../constants/projects';
import type ProjectItem from '../../types/project-item';

interface Params {
  id: ProjectId;
}

interface State {
  projectId: ProjectId;
  to: null | string;
}

export default function useViewProjectRoute(): State {
  const { id: projectId } = useParams<Params>();

  if (!Object.prototype.hasOwnProperty.call(PROJECTS, projectId)) {
    return {
      projectId,
      to: '/projects',
    };
  }

  const { id: firstItemId }: ProjectItem = PROJECTS[projectId].items[0];
  if (firstItemId === ItemId.Index) {
    return {
      projectId,
      to: null,
    };
  }

  return {
    projectId,
    to: `/projects/${projectId}/${firstItemId}`,
  };
}
