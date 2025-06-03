import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'safety',
    {
      type: 'category',
      label: '3D Printing', // This label will be automatically translated
      collapsed: true,
      collapsible: true,
      items: [
        '3d_printing/bambulab',
        '3d_printing/filament',
        '3d_printing/orcaslicer',
      ],
    },
    {
      type: 'category',
      label: 'Laser and CNC',
      collapsed: true,
      collapsible: true,
      items: [
        'CNC/snapmaker',
      ],
    },
    {
      type: 'category',
      label: 'Electronic Hardware',
      collapsed: true,
      collapsible: true,
      items: [
        'electronics/test',
      ],
    },
    {
      type: 'category',
      label: 'Courses',
      collapsed: true,
      collapsible: true,
      items: [
        'courses/rust',
      ],
    },
  ],
};

export default sidebars;