import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

const Header = () => {
  return (
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
          color='whiteAlpha.800'
          fontSize='2xl'
          textAlign='left'>
          Pipeline Designer
        </Link>
        <Box display='flex'>
          <Link href='/pipelines' as={NextLink} color='whiteAlpha.800'>
            Pipelines
          </Link>
          <Link
            href='/documentation'
            as={NextLink}
            ml='1rem'
            color='whiteAlpha.800'>
            Documentation
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Header;
