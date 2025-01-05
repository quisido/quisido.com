import ItemId from '../../constants/item-id';
import ProjectType from '../../constants/project-type';
import first24 from '../../images/jabba-the-slut/1--24.jpg';
import first240 from '../../images/jabba-the-slut/1--240.jpg';
import first from '../../images/jabba-the-slut/1.jpg';
import second240 from '../../images/jabba-the-slut/2--240.jpg';
import second from '../../images/jabba-the-slut/2.jpg';
import third240 from '../../images/jabba-the-slut/3--240.jpg';
import third from '../../images/jabba-the-slut/3.jpg';
import fourth24 from '../../images/jabba-the-slut/4--24.jpg';
import fourth240 from '../../images/jabba-the-slut/4--240.jpg';
import fourth from '../../images/jabba-the-slut/4.jpg';
import fifth240 from '../../images/jabba-the-slut/5--240.jpg';
import fifth from '../../images/jabba-the-slut/5.jpg';
import sixth240 from '../../images/jabba-the-slut/6--240.jpg';
import sixth from '../../images/jabba-the-slut/6.jpg';
import seventh240 from '../../images/jabba-the-slut/7--240.jpg';
import seventh from '../../images/jabba-the-slut/7.jpg';
import eighth240 from '../../images/jabba-the-slut/8--240.jpg';
import eighth from '../../images/jabba-the-slut/8.jpg';
import ninth240 from '../../images/jabba-the-slut/9--240.jpg';
import ninth from '../../images/jabba-the-slut/9.jpg';
import Project from '../../types/project';

const JABBA_THE_SLUT: Project = {
  icon: first240,
  type: ProjectType.Sculptures,
  items: [
    {
      date: '2024-06-05',
      icon: first24,
      id: ItemId.Index,
      images: [
        {
          height: 1600,
          src: first,
          thumbnail: first240,
          width: 2400,
        },
        {
          height: 2400,
          src: second,
          thumbnail: second240,
          width: 1600,
        },
        {
          height: 2400,
          src: third,
          thumbnail: third240,
          width: 1600,
        },
        {
          height: 2400,
          src: seventh,
          thumbnail: seventh240,
          width: 1600,
        },
        {
          height: 2400,
          src: eighth,
          thumbnail: eighth240,
          width: 1600,
        },
        {
          height: 1600,
          src: ninth,
          thumbnail: ninth240,
          width: 2400,
        },
      ],
    },

    {
      date: '2024-04-26',
      icon: fourth24,
      id: ItemId.Construction,
      images: [
        {
          height: 4032,
          src: fourth,
          thumbnail: fourth240,
          width: 3024,
        },
        {
          height: 4032,
          src: fifth,
          thumbnail: fifth240,
          width: 3024,
        },
        {
          height: 4032,
          src: sixth,
          thumbnail: sixth240,
          width: 3024,
        },
      ],
    },
  ],
};

export default JABBA_THE_SLUT;
