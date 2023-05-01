import type { Pipeline } from '../../interfaces';
import useSwr from 'swr';
import Link from 'next/link';

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
      <ul>
        {data.map((pipeline) => (
          <li key={pipeline.id}>
            <Link href='/pipeline/[id]' as={`/pipeline/${pipeline.id}`}>
              {pipeline.name ?? `Pipeline ${pipeline.id}`}
            </Link>
          </li>
        ))}
      </ul>

      <br />
      <Link href='/'>Back home</Link>
    </>
  );
}
