import useSwr from 'swr';
import Link from 'next/link';
import Loading from '@/components/loading';
import LoadPipelinesError from '@/components/error/loadPipelinesError';
import type { Pipeline } from '@/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Pipelines() {
  const { data, error, isLoading } = useSwr<Pipeline[]>(
    '/api/pipelines',
    fetcher
  );

  if (error) return <LoadPipelinesError />;
  if (isLoading) return <Loading />;
  if (!data) return <LoadPipelinesError />;

  return (
    <>
      <ul>
        {data.map((pipeline) => (
          <li key={pipeline.id}>
            <Link href={`/pipelines/${encodeURIComponent(pipeline.id)}`}>
              {pipeline.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
