import { useRouter } from 'next/router';
import useSwr from 'swr';
import Loading from '@/components/loading';
import LoadPipelineError from '@/components/error/loadPipelineError';
import type { Pipeline } from '@/interfaces';
import { Code, Container, Text } from '@chakra-ui/react';

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
      <Text>{data.name}</Text>
      <Code>{JSON.stringify(data)}</Code>
    </Container>
  );
}
