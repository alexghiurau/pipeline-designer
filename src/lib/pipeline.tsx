import { Destination, Origin, Pipeline } from '@/interfaces';

export function getOrigin(pipeline: Pipeline): Origin {
  return pipeline.elements.find(
    (element) => element.type === 'origin'
  ) as Origin;
}
export function getDestination(pipeline: Pipeline): Destination {
  return pipeline.elements.find(
    (element) => element.type === 'destination'
  ) as Destination;
}
