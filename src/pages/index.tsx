import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Container>
      <Box p={4}>
        <Heading>Pipeline Designer</Heading>
        <Text fontSize='xl'>View and edit pipelines right in the browser.</Text>

        <Link as={NextLink} href='/pipelines'>
          <Button size='lg' colorScheme='teal' mt={4}>
            View pipelines
          </Button>
        </Link>

        <Text fontSize='xl' mt={4}>
          Features:
        </Text>

        <UnorderedList>
          <ListItem>Visualise data pipelines</ListItem>
          <ListItem>Configure data pipelines</ListItem>
          <ListItem>Fullscreen mode</ListItem>
          <ListItem>Cross platform</ListItem>
        </UnorderedList>

        <Text mt={4}>
          Found a bug? Raise an issue on{' '}
          <Link
            color={'teal'}
            as={NextLink}
            href='https://github.com/alexghiurau/pipeline-designer/issues'>
            GitHub
          </Link>
          .
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
