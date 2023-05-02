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
      {data.map((pipeline) => (
        <div key={pipeline.id}>
          <Link href={`/pipeline/${encodeURIComponent(pipeline.id)}`}>
            {pipeline.name}
          </Link>
        </div>
      ))}
      <Link href='/'>Home</Link>
    </>
  );
}
