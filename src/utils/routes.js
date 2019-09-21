import AboutMe from '../components/routes/about-me';
import DryMedia from '../components/routes/dry-media/dry-media';
import Fabrication from '../components/routes/fabrication/fabrication';
import Miniatures from '../components/routes/miniatures/miniatures';
import Portfolio from '../components/routes/portfolio/portfolio';

export default [
  {
    component: AboutMe,
    description: 'Portfolio of freelance artist Ace Quisido.',
    keywords: [
      'Ace Quisido',
      "Ace Quisido's portfolio",
      'freelance artist',
      'freelance designer',
      'freelance woodworker',
    ],
    path: '/',
    title: 'Ace Quisido',
  },

  {
    component: DryMedia,
    description: 'Dry media portfolio of freelance artist Ace Quisido.',
    keywords: [
      'Ace Quisido',
      "Ace Quisido's portfolio",
      'freelance artist',
      'freelance designer',
      'freelance woodworker',
    ],
    path: '/dry-media',
    title: 'Dry Media - Ace Quisido',
  },

  {
    component: Fabrication,
    description: 'Fabrication portfolio of freelance artist Ace Quisido.',
    keywords: [
      'Ace Quisido',
      "Ace Quisido's portfolio",
      'freelance artist',
      'freelance designer',
      'freelance woodworker',
    ],
    path: '/fabrication',
    title: 'Fabrication - Ace Quisido',
  },

  {
    component: Miniatures,
    description: 'Miniatures portfolio of freelance artist Ace Quisido.',
    keywords: [
      'Ace Quisido',
      "Ace Quisido's portfolio",
      'freelance artist',
      'freelance designer',
      'freelance woodworker',
    ],
    path: '/miniatures',
    title: 'Miniatures - Ace Quisido',
  },

  {
    component: Portfolio,
    description: 'Portfolio of freelance artist Ace Quisido.',
    keywords: [
      'Ace Quisido',
      "Ace Quisido's portfolio",
      'freelance artist',
      'freelance designer',
      'freelance woodworker',
    ],
    path: '/portfolio',
    title: 'Portfolio - Ace Quisido',
  },
];
