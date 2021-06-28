import ProjectType from '../constants/project-type';
import type ProjectItem from '../types/project-item';

export default interface Project {
  items: ProjectItem[];
  type: ProjectType;
}
