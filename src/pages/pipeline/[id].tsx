import type { Pipeline } from '../../interfaces';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSwr from 'swr';
import { Text, Title } from '@mantine/core';

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
      <Title order={1}>{data.name}</Title>
      <Text ff={'monospace'}>{JSON.stringify(data)}</Text>
      <Text>
        <Link href='/pipelines'>Pipelines</Link>
      </Text>
    </>
  );
}
