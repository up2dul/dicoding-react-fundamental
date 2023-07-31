import { Box, Flex, Link } from '@chakra-ui/react';

export default function Nav() {
  return (
    <Box as='nav' pos='fixed'>
      <Flex gap={20}>
        <Link href='/'>Home</Link>
        <Link href='/archive'>Archive</Link>
      </Flex>
    </Box>
  );
}
