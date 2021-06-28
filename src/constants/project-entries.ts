import ProjectId from '../constants/project-id';
import PROJECTS from '../constants/projects';
import type Project from '../types/project';

const PROJECT_ENTRIES: [ProjectId, Project][] = Object.entries(PROJECTS) as [
  ProjectId,
  Project,
][];

export default PROJECT_ENTRIES;
