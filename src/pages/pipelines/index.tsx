import useSwr from 'swr';
import NextLink from 'next/link';
import Loading from '@/components/loading';
import LoadPipelinesError from '@/components/error/loadPipelinesError';
import type { Pipeline } from '@/interfaces';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
} from '@chakra-ui/react';
import { getDestination, getOrigin } from '@/lib/pipeline';

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
    <TableContainer p={4}>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Name</Th>
            <Th>Origin Type</Th>
            <Th>Origin Path</Th>
            <Th>Destination Type</Th>
            <Th>Destination Path</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((pipeline) => {
            const origin = getOrigin(pipeline);
            const destination = getDestination(pipeline);
            return (
              <Tr key={pipeline.id}>
                <Td>✅</Td>
                <Td>
                  <Link
                    as={NextLink}
                    href={`/pipelines/${encodeURIComponent(pipeline.id)}`}
                    color={'teal'}>
                    {pipeline.name}
                  </Link>
                </Td>
                <Td>{origin.type}</Td>
                <Td>{origin.path}</Td>
                <Td>{destination.type}</Td>
                <Td>{destination.path}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
