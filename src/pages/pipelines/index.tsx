import type { Pipeline } from '../../interfaces';
import useSwr from 'swr';
import Link from 'next/link';
import { Anchor, Container, List } from '@mantine/core';

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
    <Container>
      <List>
        {data.map((pipeline) => (
          <List.Item key={pipeline.id}>
            <Anchor
              component={Link}
              href={`/pipelines/${encodeURIComponent(pipeline.id)}`}>
              {pipeline.name}
            </Anchor>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
