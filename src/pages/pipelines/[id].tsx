import type { Pipeline } from '../../interfaces';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import { Container, Text, Title } from '@mantine/core';
import Loading from '@/components/loading';
import LoadPipelineError from '@/components/error/loadPipelineError';

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
    <Container>
      <Title order={1}>{data.name}</Title>
      <Text ff={'monospace'}>{JSON.stringify(data)}</Text>
    </Container>
  );
}
