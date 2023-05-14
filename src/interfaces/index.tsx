export type Pipeline = {
  id: string;
  name: string;
  elements: Element[];
  links: Link[];
};

export type BaseElement = {
  id: string;
  name: string;
  type: ElementType;
};

export type Origin = BaseElement & {
  type: 'origin';
  path: string;
};

export type Filter = BaseElement & {
  type: 'filter';
  searchTerm: string;
  contains: boolean;
};

export type Destination = BaseElement & {
  type: 'destination';
  destinationType: DestinationType;
  path: string;
};

type Element = Origin | Filter | Destination;

type ElementType = 'origin' | 'filter' | 'destination';

type DestinationType = 'file' | 'https';

export type Link = {
  to: string;
  from: string;
};

export type ResponseError = {
  message: string;
};
