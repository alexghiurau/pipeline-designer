import { NextApiRequest, NextApiResponse } from 'next';
import { pipelines } from '../../../../data/pipelines';
import type { Pipeline } from '@/interfaces';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Pipeline[]>
) {
  return res.status(200).json(pipelines);
}
