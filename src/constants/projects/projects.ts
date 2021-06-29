import ProjectId from '../../constants/project-id';
import type Project from '../../types/project';
import DARK_SOULS_DARKROOT from './projects.dark-souls-darkroot';
import STUDY_OF_NIGHT_ZAG_WALL from './projects.study-of-night-zag-wall';

const PROJECTS: Record<ProjectId, Project> = {
  [ProjectId.DarkSoulsDarkroot]: DARK_SOULS_DARKROOT,
  [ProjectId.StudyOfNightZagWall]: STUDY_OF_NIGHT_ZAG_WALL,
};

export default PROJECTS;
