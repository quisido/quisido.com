import ProjectId from '../../constants/project-id';
import ProjectType from '../../constants/project-type';

export default interface ProjectItem {
  icon: string;
  id: ProjectId;
  pathname: string;
  type: ProjectType;
}
