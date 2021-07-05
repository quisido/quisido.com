import ItemId from '../../constants/item-id';
import ProjectType from '../../constants/project-type';
import pic1 from '../../images/conference-table/1.jpg';
import pic1_24 from '../../images/conference-table/1--24.jpg';
import pic1_240 from '../../images/conference-table/1--240.jpg';
import pic2 from '../../images/conference-table/2.jpg';
import pic2_240 from '../../images/conference-table/2--240.jpg';
import pic3 from '../../images/conference-table/3.jpg';
import pic3_240 from '../../images/conference-table/3--240.jpg';
import pic4 from '../../images/conference-table/4.jpg';
import pic4_240 from '../../images/conference-table/4--240.jpg';
import Project from '../../types/project';

const CONFERENCE_TABLE: Project = {
  icon: pic1_240,
  type: ProjectType.Fabrication,
  items: [
    {
      date: '2019-02-05',
      icon: pic1_24,
      id: ItemId.Index,
      images: [
        {
          height: 2322,
          src: pic1,
          thumbnail: pic1_240,
          width: 4128,
        },
        {
          height: 2322,
          src: pic2,
          thumbnail: pic2_240,
          width: 4128,
        },
        {
          height: 2322,
          src: pic3,
          thumbnail: pic3_240,
          width: 4128,
        },
        {
          height: 2322,
          src: pic4,
          thumbnail: pic4_240,
          width: 4128,
        },
      ],
    },
  ],
};

export default CONFERENCE_TABLE;
