import ItemId from '../../constants/item-id';
import ProjectType from '../../constants/project-type';
import brittanyWelsh from '../../images/miscellaneous-dry-media/brittany-welsh.jpg';
import brittanyWelsh24 from '../../images/miscellaneous-dry-media/brittany-welsh--24.jpg';
import brittanyWelsh240 from '../../images/miscellaneous-dry-media/brittany-welsh--240.jpg';
// import chiaroscuro from '../../images/miscellaneous-dry-media/chiaroscuro.jpg';
// import chiaroscuro24 from '../../images/miscellaneous-dry-media/chiaroscuro--24.jpg';
// import chiaroscuro240 from '../../images/miscellaneous-dry-media/chiaroscuro--240.jpg';
import girlInTheRedDress from '../../images/miscellaneous-dry-media/girl-in-the-red-dress.jpg';
import girlInTheRedDress24 from '../../images/miscellaneous-dry-media/girl-in-the-red-dress--24.jpg';
import girlInTheRedDress240 from '../../images/miscellaneous-dry-media/girl-in-the-red-dress--240.jpg';
import Project from '../../types/project';

const MISCELLANEOUS_DRY_MEDIA: Project = {
  type: ProjectType.DryMedia,
  items: [
    // Brittany Welsh
    {
      date: '2014',
      icon: brittanyWelsh24,
      id: ItemId.BrittanyWelsh,
      images: [
        {
          height: 690,
          src: brittanyWelsh,
          thumbnail: brittanyWelsh240,
          width: 1224,
        },
      ],
    },

    // Chiaroscuro
    /*
    {
      date: '2016-12-15',
      icon: chiaroscuro24,
      id: ItemId.Chiaroscuro,
      images: [
        {
          height: 3585,
          src: chiaroscuro,
          thumbnail: chiaroscuro240,
          width: 3879,
        },
      ],
    },
    */

    // Girl in the Red Dress
    {
      date: '2014',
      icon: girlInTheRedDress24,
      id: ItemId.GirlInTheRedDress,
      images: [
        {
          height: 541,
          src: girlInTheRedDress,
          thumbnail: girlInTheRedDress240,
          width: 837,
        },
      ],
    },
  ],
};

export default MISCELLANEOUS_DRY_MEDIA;
