import ProjectId from '../../constants/project-id';
import type Project from '../../types/project';
import CONFERENCE_TABLE from './projects.conference-table';
import DARK_SOULS_DARKROOT from './projects.dark-souls-darkroot';
import JABBA_THE_SLUT from './projects.jabba-the-slut';
import LAKE_COLLAGE from './projects.lake-collage';
import MISCELLANOUS_DRY_MEDIA from './projects.miscellaneous-dry-media';
import RESIN_RIVER_BOX from './projects.resin-river-box';
import STUDY_OF_NIGHT_ZAG_WALL from './projects.study-of-night-zag-wall';
import WOODEN_DECK_BOX from './projects.wooden-deck-box';

const PROJECTS: Record<ProjectId, Project> = {
  [ProjectId.ConferenceTable]: CONFERENCE_TABLE,
  [ProjectId.DarkSoulsDarkroot]: DARK_SOULS_DARKROOT,
  [ProjectId.JabbaTheSlut]: JABBA_THE_SLUT,
  [ProjectId.LakeCollage]: LAKE_COLLAGE,
  [ProjectId.MiscellaneousDryMedia]: MISCELLANOUS_DRY_MEDIA,
  [ProjectId.ResinRiverBox]: RESIN_RIVER_BOX,
  [ProjectId.StudyOfNightZagWall]: STUDY_OF_NIGHT_ZAG_WALL,
  [ProjectId.WoodenDeckBox]: WOODEN_DECK_BOX,
};

export default PROJECTS;
