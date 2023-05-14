export type Pipeline = {
  id: string;
  name: string;
  elements: Element[];
  links: Link[];
};

export type Element = {
  id: string;
  name: string;
  type: ElementType;
};

export type Origin = Element & {
  type: 'origin';
  path: string;
};

export type Filter = Element & {
  type: 'filter';
  searchTerm: string;
  contains: boolean;
};

export type Destination = Element & {
  type: 'destination';
  destinationType: DestinationType;
  path: string;
};

type ElementType = 'origin' | 'filter' | 'destination';

type DestinationType = 'file' | 'https';

export type Link = {
  to: string;
  from: string;
};

export type ResponseError = {
  message: string;
};
