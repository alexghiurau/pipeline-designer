import type { NextApiRequest, NextApiResponse } from 'next';
import type { Pipeline } from '../../../interfaces';
import { pipelines } from '../pipelines';

export default function pipelineHandler(
  req: NextApiRequest,
  res: NextApiResponse<Pipeline>
) {
  const { query, method } = req;
  const id = query.id as string;

  switch (method) {
    case 'GET':
      const pipeline = pipelines.find((pipeline) => pipeline.id === id);
      if (!pipeline) {
        res.status(500);
        break;
      }
      res.status(200).json(pipeline);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
