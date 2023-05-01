export type Pipeline = {
  id: string;
  name: string;
  elements: Element[];
  links: Link[];
};

export type Element = (Origin | Filter | Destination) & {
  id: string;
  type: 'origin' | 'filter' | 'destination';
  name: string;
};

export type Origin = {
  path: string;
};

export type Filter = {
  searchTerm: string;
  contains: boolean;
};

export type Destination = {
  destinationType: 'file' | 'https';
  path: string;
};

export type Link = {
  to: string;
  from: string;
};
