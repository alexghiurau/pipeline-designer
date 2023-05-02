import { Pipeline } from '@/interfaces';

export const pipelines: Pipeline[] = [
  {
    id: 'p1',
    name: 'Dev Pipeline 1',
    elements: [
      { id: 'o1', type: 'origin', name: 'Origin 1', path: '/mock_o1' },
      {
        id: 'f1',
        type: 'filter',
        name: 'Basic Filter 1',
        searchTerm: 'string1',
        contains: true,
      },
      {
        id: 'd1',
        type: 'destination',
        name: 'Destination 1',
        destinationType: 'file',
        path: '/mock_d1',
      },
    ],
    links: [
      { from: 'o1', to: 'f1' },
      { from: 'f1', to: 'd1' },
    ],
  },
  {
    id: 'p2',
    name: 'Dev Pipeline 2',
    elements: [
      { id: 'o2', type: 'origin', name: 'Origin 2', path: '/mock_o2' },
      {
        id: 'f2',
        type: 'filter',
        name: 'Basic Filter 2',
        searchTerm: 'string2',
        contains: false,
      },
      {
        id: 'd2',
        type: 'destination',
        name: 'Destination 2',
        destinationType: 'file',
        path: '/mock_d2',
      },
    ],
    links: [
      { from: 'o2', to: 'f2' },
      { from: 'f2', to: 'd2' },
    ],
  },
];
