import type { Pipeline } from '../../interfaces';
import useSwr from 'swr';
import Link from 'next/link';
import { List, Text } from '@mantine/core';

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
      <List>
        {data.map((pipeline) => (
          <List.Item key={pipeline.id}>
            <Text>
              <Link href={`/pipeline/${encodeURIComponent(pipeline.id)}`}>
                {pipeline.name}
              </Link>
            </Text>
          </List.Item>
        ))}
      </List>

      <Text>
        <Link href='/'>Home</Link>
      </Text>
    </>
  );
}
