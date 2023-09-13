import { Box, Flex } from '@chakra-ui/react';
import { Bookmark, Home, Plus, Settings } from 'lucide-react';

import NavLink from '@/components/common/NavLink';

export default function Nav() {
  return (
    <Flex justifyContent='center'>
      <Box
        as='nav'
        pos='fixed'
        bottom={[0, 10]}
        borderRadius={[0, 10]}
        border='2px'
        display='inline-block'
        w={{ base: '100%', sm: '85%', md: '60%', xl: '40%' }}
      >
        <Flex justifyContent='space-between' gap={[3, 4, 6, 8]} w='100%'>
          <NavLink href='/' title='Active notes'>
            <Home />
          </NavLink>
          <NavLink href='/archive' title='Archived notes'>
            <Bookmark />
          </NavLink>
          <NavLink href='/add' title='Add note'>
            <Plus />
          </NavLink>
          <NavLink href='/settings' title='Settings'>
            <Settings />
          </NavLink>
        </Flex>
      </Box>
    </Flex>
  );
}
