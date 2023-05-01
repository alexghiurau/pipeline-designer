import type { Pipeline } from '../../interfaces';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSwr from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PipelinePage() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr<Pipeline>(
    query.id ? `/api/pipelines/${query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load pipeline</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <div className='content'>
        <div>{data.name}</div>
        <div>{JSON.stringify(data)}</div>

        <Link href='/pipelines'>
          <button className='btn'>Pipelines</button>
        </Link>
      </div>
    </>
  );
}
