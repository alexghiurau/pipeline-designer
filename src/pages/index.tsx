import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link } from '@chakra-ui/react';
import {
  Card,
  CardBody,
  UnorderedList,
  ListItem,
  Button,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Flex h={'100vh'} flexDirection={'column'}>
        <Box bg={'red.200'} w={'100%'} flexGrow={1}>
          <Card backgroundColor={'green.200'} w={'50%'} mt={8}>
            <CardBody>
              <Text fontSize={'4xl'}>Pipeline Designer</Text>
              <Text>View and edit pipelines right in the browser.</Text>

              <Text>Features include:</Text>
              <UnorderedList>
                <ListItem>Viewing pipelines</ListItem>
                <ListItem>... and more to come!</ListItem>
              </UnorderedList>

              <Link as={NextLink} href='/pipelines'>
                <Button colorScheme='blue' size='lg' m={1}>
                  Pipelines
                </Button>
              </Link>
              <Link as={NextLink} href=''>
                <Button colorScheme='blue' size='lg' m={1}>
                  Docs
                </Button>
              </Link>
            </CardBody>
          </Card>
        </Box>

        <Box w={'100%'} flexGrow={0}>
          <Text
            w={'100%'}
            py={3}
            backgroundColor={'gray.200'}
            textAlign={'center'}>
            Alex Ghiurau © 2023 - {new Date().getFullYear()}.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
