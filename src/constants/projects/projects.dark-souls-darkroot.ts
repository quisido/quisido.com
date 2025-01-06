import ItemId from '../../constants/item-id';
import ProjectType from '../../constants/project-type';
import artoriasBack240 from '../../images/dark-souls-darkroot/artorias--back--240.png';
import artoriasBack from '../../images/dark-souls-darkroot/artorias--back.jpg';
import artoriasFront240 from '../../images/dark-souls-darkroot/artorias--front--240.png';
import artoriasFront from '../../images/dark-souls-darkroot/artorias--front.jpg';
import artoriasSide24 from '../../images/dark-souls-darkroot/artorias--side--24.jpg';
import artoriasSide240 from '../../images/dark-souls-darkroot/artorias--side--240.png';
import artoriasSide from '../../images/dark-souls-darkroot/artorias--side.jpg';
import demonicFoliage24 from '../../images/dark-souls-darkroot/demonic-foliage--24.jpg';
import demonicFoliage240 from '../../images/dark-souls-darkroot/demonic-foliage--240.png';
import demonicFoliage from '../../images/dark-souls-darkroot/demonic-foliage.jpg';
import mushroomParentAndChildBack240 from '../../images/dark-souls-darkroot/mushroom-parent-and-child--back--240.png';
import mushroomParentAndChildBack from '../../images/dark-souls-darkroot/mushroom-parent-and-child--back.jpg';
import mushroomParentAndChildFront24 from '../../images/dark-souls-darkroot/mushroom-parent-and-child--front--24.jpg';
import mushroomParentAndChildFront240 from '../../images/dark-souls-darkroot/mushroom-parent-and-child--front--240.png';
import mushroomParentAndChildFront from '../../images/dark-souls-darkroot/mushroom-parent-and-child--front.jpg';
import plowScarecrow24 from '../../images/dark-souls-darkroot/plow-scarecrow--24.jpg';
import plowScarecrow240 from '../../images/dark-souls-darkroot/plow-scarecrow--240.png';
import plowScarecrow from '../../images/dark-souls-darkroot/plow-scarecrow.jpg';
import shearsScarecrow24 from '../../images/dark-souls-darkroot/shears-scarecrow--24.jpg';
import shearsScarecrow240 from '../../images/dark-souls-darkroot/shears-scarecrow--240.png';
import shearsScarecrow from '../../images/dark-souls-darkroot/shears-scarecrow.jpg';
import sifTheGreatGreyWolfFront240 from '../../images/dark-souls-darkroot/sif-the-great-grey-wolf--front--240.png';
import sifTheGreatGreyWolfFront from '../../images/dark-souls-darkroot/sif-the-great-grey-wolf--front.jpg';
import sifTheGreatGreyWolfLeft240 from '../../images/dark-souls-darkroot/sif-the-great-grey-wolf--left--240.png';
import sifTheGreatGreyWolfLeft from '../../images/dark-souls-darkroot/sif-the-great-grey-wolf--left.jpg';
import sifTheGreatGreyWolfRight24 from '../../images/dark-souls-darkroot/sif-the-great-grey-wolf--right--24.jpg';
import sifTheGreatGreyWolfRight240 from '../../images/dark-souls-darkroot/sif-the-great-grey-wolf--right--240.png';
import sifTheGreatGreyWolfRight from '../../images/dark-souls-darkroot/sif-the-great-grey-wolf--right.jpg';
import stoneGuardianFront240 from '../../images/dark-souls-darkroot/stone-guardian--front--240.png';
import stoneGuardianFront from '../../images/dark-souls-darkroot/stone-guardian--front.jpg';
import stoneGuardianSide24 from '../../images/dark-souls-darkroot/stone-guardian--side--24.jpg';
import stoneGuardianSide240 from '../../images/dark-souls-darkroot/stone-guardian--side--240.png';
import stoneGuardianSide from '../../images/dark-souls-darkroot/stone-guardian--side.jpg';
import stoneKnight24 from '../../images/dark-souls-darkroot/stone-knight--24.jpg';
import stoneKnight240 from '../../images/dark-souls-darkroot/stone-knight--240.png';
import stoneKnight from '../../images/dark-souls-darkroot/stone-knight.jpg';
import Project from '../../types/project';

const DARK_SOULS_DARKROOT: Project = {
  icon: artoriasSide240,
  type: ProjectType.Miniatures,
  items: [
    // Artorias
    {
      date: '2019-02-23',
      icon: artoriasSide24,
      id: ItemId.Artorias,
      images: [
        {
          height: 2752,
          src: artoriasFront,
          thumbnail: artoriasFront240,
          width: 3472,
        },
        {
          height: 2484,
          src: artoriasSide,
          thumbnail: artoriasSide240,
          width: 2704,
        },
        {
          height: 2620,
          src: artoriasBack,
          thumbnail: artoriasBack240,
          width: 3012,
        },
      ],
    },

    // Demonic Foliage
    {
      date: '2019-04-20',
      icon: demonicFoliage24,
      id: ItemId.DemonicFoliage,
      images: [
        {
          height: 2544,
          src: demonicFoliage,
          thumbnail: demonicFoliage240,
          width: 3768,
        },
      ],
    },

    // Mushroom Parent and Child
    {
      date: '2019-04-20',
      icon: mushroomParentAndChildFront24,
      id: ItemId.MushroomParentAndChild,
      images: [
        {
          height: 2592,
          src: mushroomParentAndChildFront,
          thumbnail: mushroomParentAndChildFront240,
          width: 3608,
        },
        {
          height: 2608,
          src: mushroomParentAndChildBack,
          thumbnail: mushroomParentAndChildBack240,
          width: 3772,
        },
      ],
    },

    // Plow Scararecrow
    {
      date: '2019-04-20',
      icon: plowScarecrow24,
      id: ItemId.PlowScarecrow,
      images: [
        {
          height: 1960,
          src: plowScarecrow,
          thumbnail: plowScarecrow240,
          width: 5056,
        },
      ],
    },

    // Shears Scarecrow
    {
      date: '2019-04-20',
      icon: shearsScarecrow24,
      id: ItemId.ShearsScarecrow,
      images: [
        {
          height: 2084,
          src: shearsScarecrow,
          thumbnail: shearsScarecrow240,
          width: 5116,
        },
      ],
    },

    // Sif, the Great Grey Wolf
    {
      date: '2019-04-20',
      icon: sifTheGreatGreyWolfRight24,
      id: ItemId.SifTheGreatGreyWolf,
      images: [
        {
          height: 2224,
          src: sifTheGreatGreyWolfFront,
          thumbnail: sifTheGreatGreyWolfFront240,
          width: 2172,
        },
        {
          height: 2752,
          src: sifTheGreatGreyWolfRight,
          thumbnail: sifTheGreatGreyWolfRight240,
          width: 3052,
        },
        {
          height: 2308,
          src: sifTheGreatGreyWolfLeft,
          thumbnail: sifTheGreatGreyWolfLeft240,
          width: 3740,
        },
      ],
    },

    // Stone Guardian
    {
      date: '2019-04-20',
      icon: stoneGuardianSide24,
      id: ItemId.StoneGuardian,
      images: [
        {
          height: 2248,
          src: stoneGuardianFront,
          thumbnail: stoneGuardianFront240,
          width: 3904,
        },
        {
          height: 2536,
          src: stoneGuardianSide,
          thumbnail: stoneGuardianSide240,
          width: 3720,
        },
      ],
    },

    // Stone Knight
    {
      date: '2019-04-20',
      icon: stoneKnight24,
      id: ItemId.StoneKnight,
      images: [
        {
          height: 2424,
          src: stoneKnight,
          thumbnail: stoneKnight240,
          width: 4356,
        },
      ],
    },
  ],
};

export default DARK_SOULS_DARKROOT;
