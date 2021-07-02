import ItemId from '../../constants/item-id';
import ProjectType from '../../constants/project-type';
import pic1 from '../../images/resin-river-box/1.jpg';
import pic1_240 from '../../images/resin-river-box/1--240.jpg';
import pic2 from '../../images/resin-river-box/2.jpg';
import pic2_240 from '../../images/resin-river-box/2--240.jpg';
import pic3 from '../../images/resin-river-box/3.jpg';
import pic3_240 from '../../images/resin-river-box/3--240.jpg';
import pic4 from '../../images/resin-river-box/4.jpg';
import pic4_240 from '../../images/resin-river-box/4--240.jpg';
import pic5 from '../../images/resin-river-box/5.jpg';
import pic5_240 from '../../images/resin-river-box/5--240.jpg';
import pic6 from '../../images/resin-river-box/6.jpg';
import pic6_240 from '../../images/resin-river-box/6--240.jpg';
import pic7 from '../../images/resin-river-box/7.jpg';
import pic7_24 from '../../images/resin-river-box/7--24.jpg';
import pic7_240 from '../../images/resin-river-box/7--240.jpg';
import Project from '../../types/project';

const RESIN_RIVER_BOX: Project = {
  type: ProjectType.Fabrication,
  items: [
    {
      date: '2018-08-08',
      icon: pic7_24,
      id: ItemId.Index,
      images: [
        {
          height: 2464,
          src: pic1,
          thumbnail: pic1_240,
          width: 3304,
        },
        {
          height: 2780,
          src: pic2,
          thumbnail: pic2_240,
          width: 3916,
        },
        {
          height: 3096,
          src: pic3,
          thumbnail: pic3_240,
          width: 3624,
        },
        {
          height: 3096,
          src: pic4,
          thumbnail: pic4_240,
          width: 4128,
        },
        {
          height: 3096,
          src: pic5,
          thumbnail: pic5_240,
          width: 4128,
        },
        {
          height: 2988,
          src: pic6,
          thumbnail: pic6_240,
          width: 3216,
        },
        {
          height: 2924,
          src: pic7,
          thumbnail: pic7_240,
          width: 3032,
        },
      ],
    },
  ],
};

export default RESIN_RIVER_BOX;
