import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center h={'25vh'}>
      <Spinner size='xl' thickness='4px' color='blue.800' />
    </Center>
  );
};

export default Loading;
