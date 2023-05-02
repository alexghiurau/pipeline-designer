import type { NextApiRequest, NextApiResponse } from 'next';
import { pipelines } from '../../../../data/pipelines';
import type { Pipeline, ResponseError } from '@/interfaces';

export default function pipelineHandler(
  req: NextApiRequest,
  res: NextApiResponse<Pipeline | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const pipeline = pipelines.find((p) => p.id === id);

  return pipeline
    ? res.status(200).json(pipeline)
    : res.status(404).json({ message: `Pipeline with id: ${id} not found.` });
}
