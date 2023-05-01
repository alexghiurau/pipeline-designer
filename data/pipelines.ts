import { Pipeline } from '@/interfaces';

export const pipelines: Pipeline[] = [
  {
    id: 'p1',
    name: 'Dev Pipeline 1',
    elements: [
      { id: 's1', type: 'origin', name: 'Origin', path: '/origin' },
      {
        id: 'f1',
        type: 'filter',
        name: 'Basic Filter',
        searchTerm: 'text',
        contains: true,
      },
      {
        id: 'd1',
        type: 'destination',
        name: 'Destination',
        destinationType: 'file',
        path: '/destination',
      },
    ],
    links: [
      { from: 's1', to: 'f1' },
      { from: 'f1', to: 'd1' },
    ],
  },
  {
    id: 'p2',
    name: 'Dev Pipeline 2',
    elements: [
      { id: 's2', type: 'origin', name: 'Origin', path: '/origin' },
      {
        id: 'f2',
        type: 'filter',
        name: 'Basic Filter',
        searchTerm: 'text',
        contains: true,
      },
      {
        id: 'd2',
        type: 'destination',
        name: 'Destination',
        destinationType: 'file',
        path: '/destination',
      },
    ],
    links: [
      { from: 's2', to: 'f2' },
      { from: 'f2', to: 'd2' },
    ],
  },
];
