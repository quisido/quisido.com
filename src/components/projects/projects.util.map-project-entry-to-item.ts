import ProjectId from '../../constants/project-id';
import type Project from '../../types/project';
import type ProjectItem from '../../types/project-item';
import type Item from './projects.type.item';

export default function mapProjectEntryToItem([
  projectId,
  { icon, items, type },
]: [ProjectId, Project]): Item {
  const { id: firstItemId }: ProjectItem = items[0];
  return {
    icon,
    id: projectId,
    pathname: `/projects/${projectId}/${firstItemId}`,
    type,
  };
}
