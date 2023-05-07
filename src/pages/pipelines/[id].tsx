import { useRouter } from 'next/router';
import useSwr from 'swr';
import Loading from '@/components/loading';
import LoadPipelineError from '@/components/error/loadPipelineError';
import type { Pipeline } from '@/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PipelinePage() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr<Pipeline>(
    query.id ? `/api/pipelines/${query.id}` : null,
    fetcher
  );

  if (error) return <LoadPipelineError />;
  if (isLoading) return <Loading />;
  if (!data) return <LoadPipelineError />;

  return (
    <>
      <p>{data.name}</p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
