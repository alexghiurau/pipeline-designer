import { Box, Grid, GridItem, Heading, VStack, Text } from '@chakra-ui/react';

export default function Documentation() {
  return (
    <>
      <Box h={'calc(100vh - 60px)'}>
        <Grid h={'100%'} templateRows='1fr' templateColumns='1fr 6fr' gap={1}>
          <GridItem bg='gray.100'>
            <VStack p={'1rem'}>
              <Text>Introduction</Text>
              <Text>Installation</Text>
              <Text>Usage</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Box p={'1rem'}>
              <Heading>Documentation</Heading>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
