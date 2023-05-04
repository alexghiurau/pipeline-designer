import type { NextApiRequest, NextApiResponse } from 'next';
import { pipelines } from '../../../../data/pipelines';
import type { Pipeline, ResponseError } from '@/interfaces';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Pipeline[] | ResponseError>
) {
  return res.status(200).json(pipelines);
}
