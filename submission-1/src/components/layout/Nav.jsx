import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Flex justifyContent='center'>
      <Box
        as='nav'
        pos='fixed'
        bottom={20}
        borderRadius={10}
        bg='gray.800'
        color='white'
        display='inline-block'
      >
        <Flex justifyContent='center' gap={8}>
          <ChakraLink as={Link} to='/' px={8} py={4}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} to='/archive' px={8} py={4}>
            Archive
          </ChakraLink>
        </Flex>
      </Box>
    </Flex>
  );
}
