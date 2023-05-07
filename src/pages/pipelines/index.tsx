import useSwr from 'swr';
import Link from 'next/link';
import Loading from '@/components/loading';
import LoadPipelinesError from '@/components/error/loadPipelinesError';
import type { Pipeline } from '@/interfaces';
import {
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';

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
            <Th>Destination Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((pipeline) => (
            <Tr key={pipeline.id}>
              <Td>✅</Td>
              <Td>
                <Link href={`/pipelines/${encodeURIComponent(pipeline.id)}`}>
                  {pipeline.name}
                </Link>
              </Td>
              <Td>
                <Text>
                  {
                    pipeline.elements.find(
                      (element) => element.type === 'origin'
                    )?.type
                  }
                </Text>
              </Td>
              <Td>
                <Text>
                  {
                    pipeline.elements.find(
                      (element) => element.type === 'destination'
                    )?.type
                  }
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
