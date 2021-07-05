import ProjectType from '../constants/project-type';
import type ProjectItem from '../types/project-item';

export default interface Project {
  icon: string;
  items: ProjectItem[];
  type: ProjectType;
}
