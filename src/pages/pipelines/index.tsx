import type { Pipeline } from '../../interfaces';
import useSwr from 'swr';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Pipelines() {
  const { data, error, isLoading } = useSwr<Pipeline[]>(
    '/api/pipelines',
    fetcher
  );

  if (error) return <div>Failed to load pipelines</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      {data.map((pipeline) => (
        <div key={pipeline.id}>
          <Link as={NextLink} href={`/pipeline/${pipeline.id}`}>
            {pipeline.name}
          </Link>
        </div>
      ))}

      <Link as={NextLink} href='/'>
        Home
      </Link>
    </>
  );
}
