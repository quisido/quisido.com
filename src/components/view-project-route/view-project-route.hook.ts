import { useParams } from 'react-router';
import ProjectId from '../../constants/project-id';
import PROJECTS from '../../constants/projects';
import type ProjectItem from '../../types/project-item';

interface Params {
  id: ProjectId;
}

export default function useViewProjectRoute(): string {
  const { id } = useParams<Params>();

  if (!Object.prototype.hasOwnProperty.call(PROJECTS, id)) {
    return '/projects';
  }

  const { id: firstItemId }: ProjectItem = PROJECTS[id].items[0];
  return `/projects/${id}/${firstItemId}`;
}
