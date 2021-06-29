import ProjectType from '../../constants/project-type';
import blueprint from '../../images/wooden-deck-box/blueprint.jpg';
import blueprint24 from '../../images/wooden-deck-box/blueprint--24.jpg';
import blueprint240 from '../../images/wooden-deck-box/blueprint--240.jpg';
import index1 from '../../images/wooden-deck-box/1.jpg';
import index1_24 from '../../images/wooden-deck-box/1--24.jpg';
import index1_240 from '../../images/wooden-deck-box/1--240.jpg';
import index2 from '../../images/wooden-deck-box/2.jpg';
import index2_240 from '../../images/wooden-deck-box/2--240.jpg';
import index3 from '../../images/wooden-deck-box/3.jpg';
import index3_240 from '../../images/wooden-deck-box/3--240.jpg';
import index4 from '../../images/wooden-deck-box/4.jpg';
import index4_240 from '../../images/wooden-deck-box/4--240.jpg';
import index5 from '../../images/wooden-deck-box/5.jpg';
import index5_240 from '../../images/wooden-deck-box/5--240.jpg';
import index6 from '../../images/wooden-deck-box/6.jpg';
import index6_240 from '../../images/wooden-deck-box/6--240.jpg';
import Project from '../../types/project';
import ItemId from '../item-id';

const WOODEN_DECK_BOX: Project = {
  icon: index1_24,
  type: ProjectType.Fabrication,
  items: [
    {
      date: '2018-08-08',
      icon: index1_24,
      id: ItemId.Index,
      images: [
        {
          height: 229,
          src: index1,
          thumbnail: index1_240,
          width: 240,
        },
        {
          height: 221,
          src: index2,
          thumbnail: index2_240,
          width: 240,
        },
        {
          height: 266,
          src: index3,
          thumbnail: index3_240,
          width: 240,
        },
        {
          height: 325,
          src: index4,
          thumbnail: index4_240,
          width: 240,
        },
        {
          height: 236,
          src: index5,
          thumbnail: index5_240,
          width: 240,
        },
        {
          height: 109,
          src: index6,
          thumbnail: index6_240,
          width: 240,
        },
      ],
    },
    {
      date: '2018-08-08',
      icon: blueprint24,
      id: ItemId.Blueprint,
      images: [
        {
          height: 330,
          src: blueprint,
          thumbnail: blueprint240,
          width: 240,
        },
      ],
    },
  ],
};

export default WOODEN_DECK_BOX;
