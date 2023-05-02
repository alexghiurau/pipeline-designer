export type Pipeline = {
  id: string;
  name: string;
  elements: Element[];
  links: Link[];
};

export type Element = (Origin | Filter | Destination) & {
  id: string;
  name: string;
};

export type Origin = {
  type: 'origin';
  path: string;
};

export type Filter = {
  type: 'filter';
  searchTerm: string;
  contains: boolean;
};

export type Destination = {
  type: 'destination';
  destinationType: 'file' | 'https';
  path: string;
};

export type Link = {
  to: string;
  from: string;
};

export type ResponseError = {
  message: string;
};
