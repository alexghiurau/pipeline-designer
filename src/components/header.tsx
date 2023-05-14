import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

const Header = () => (
  <>
    <Box
      bgColor='blue.800'
      h='60px'
      px='3rem'
      display='flex'
      justifyContent='space-between'
      alignItems='center'>
      <Link
        href='/'
        as={NextLink}
        color='whiteAlpha.900'
        fontSize='2xl'
        textAlign='left'>
        Reactive Pipelines
      </Link>
      <Box display='flex'>
        <Link href='/pipelines' as={NextLink} color='whiteAlpha.900'>
          Pipelines
        </Link>
        <Link
          href='/documentation'
          as={NextLink}
          ml='1rem'
          color='whiteAlpha.900'>
          Documentation
        </Link>
        <Link
          href='https://github.com/alexghiurau/reactive-pipelines/'
          as={NextLink}
          ml='1rem'
          color='whiteAlpha.900'>
          GitHub
        </Link>
      </Box>
    </Box>
  </>
);

export default Header;
