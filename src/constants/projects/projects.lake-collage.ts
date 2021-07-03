import ItemId from '../../constants/item-id';
import ProjectType from '../../constants/project-type';
import collage from '../../images/lake-collage/piece.jpg';
import collage24 from '../../images/lake-collage/collage--24.jpg';
import collage240 from '../../images/lake-collage/collage--240.jpg';
import piece from '../../images/lake-collage/piece.jpg';
import piece24 from '../../images/lake-collage/piece--24.jpg';
import piece240 from '../../images/lake-collage/piece--240.jpg';
import source from '../../images/lake-collage/source.jpg';
import source24 from '../../images/lake-collage/source--24.jpg';
import source240 from '../../images/lake-collage/source--240.jpg';
import Project from '../../types/project';

const LAKE_COLLAGE: Project = {
  type: ProjectType.DryMedia,
  items: [
    {
      date: '2017-07-16',
      icon: piece24,
      id: ItemId.Index,
      images: [
        {
          height: 2322,
          src: piece,
          thumbnail: piece240,
          width: 2697,
        },
      ],
    },
    {
      date: '2017-07-16',
      icon: source24,
      id: ItemId.Source,
      images: [
        {
          height: 2322,
          src: source,
          thumbnail: source240,
          width: 4128,
        },
      ],
    },
    {
      date: '2017-07-16',
      icon: collage24,
      id: ItemId.Collage,
      images: [
        {
          height: 2322,
          src: collage,
          thumbnail: collage240,
          width: 3375,
        },
      ],
    },
  ],
};

export default LAKE_COLLAGE;
