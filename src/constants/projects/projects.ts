import ProjectId from '../../constants/project-id';
import type Project from '../../types/project';
import CONFERENCE_TABLE from './projects.conference-table';
import DARK_SOULS_DARKROOT from './projects.dark-souls-darkroot';
import MISCELLANOUS_DRY_MEDIA from './projects.miscellaneous-dry-media';
import STUDY_OF_NIGHT_ZAG_WALL from './projects.study-of-night-zag-wall';
import WOODEN_DECK_BOX from './projects.wooden-deck-box';

const PROJECTS: Record<ProjectId, Project> = {
  [ProjectId.ConferenceTable]: CONFERENCE_TABLE,
  [ProjectId.DarkSoulsDarkroot]: DARK_SOULS_DARKROOT,
  [ProjectId.MiscellaneousDryMedia]: MISCELLANOUS_DRY_MEDIA,
  [ProjectId.StudyOfNightZagWall]: STUDY_OF_NIGHT_ZAG_WALL,
  [ProjectId.WoodenDeckBox]: WOODEN_DECK_BOX,
};

export default PROJECTS;
