import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />

      <Flex
        as='section'
        mx='auto'
        mb={['40px', '60px']}
        w={['90%', '85%']}
        alignItems='center'
        flexDirection='column'
        gap='24px'
      >
        {children}
      </Flex>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
