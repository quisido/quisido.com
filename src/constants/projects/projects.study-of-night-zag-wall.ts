import ItemId from '../../constants/item-id';
import ProjectType from '../../constants/project-type';
import elevation from '../../images/study-of-night-zag-wall/elevation.jpg';
import elevation24 from '../../images/study-of-night-zag-wall/elevation--24.jpg';
import elevation240 from '../../images/study-of-night-zag-wall/elevation--240.jpg';
import pieces from '../../images/study-of-night-zag-wall/pieces--240.jpg';
import pieces24 from '../../images/study-of-night-zag-wall/pieces--24.jpg';
import pieces240 from '../../images/study-of-night-zag-wall/pieces--240.jpg';
import portions from '../../images/study-of-night-zag-wall/portions.jpg';
import portions24 from '../../images/study-of-night-zag-wall/portions--24.jpg';
import portions240 from '../../images/study-of-night-zag-wall/portions--240.jpg';
import Project from '../../types/project';

const STUDY_OF_NIGHT_ZAG_WALL: Project = {
  icon: pieces240,
  type: ProjectType.Abstract,
  items: [
    {
      date: '2016-10-11',
      icon: pieces24,
      id: ItemId.Pieces,
      images: [
        {
          height: 240,
          src: pieces,
          thumbnail: pieces240,
          width: 240,
        },
      ],
    },
    {
      date: '2016-10-11',
      icon: elevation24,
      id: ItemId.Elevation,
      images: [
        {
          height: 144,
          src: elevation,
          thumbnail: elevation240,
          width: 240,
        },
      ],
    },
    {
      date: '2016-12-14',
      icon: portions24,
      id: ItemId.Portions,
      images: [
        {
          height: 240,
          src: portions,
          thumbnail: portions240,
          width: 240,
        },
      ],
    },
  ],
};

export default STUDY_OF_NIGHT_ZAG_WALL;
