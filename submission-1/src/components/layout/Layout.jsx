import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />

      <Flex
        as='main'
        mt='64px'
        mx='auto'
        w='85%'
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
  children: PropTypes.element,
};
