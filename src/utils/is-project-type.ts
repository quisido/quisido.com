import ProjectType from '../constants/project-type';
import PROJECT_TYPES from '../constants/project-types';

export default function isProjectType(value: unknown): value is ProjectType {
  return PROJECT_TYPES.has(value as ProjectType);
}
