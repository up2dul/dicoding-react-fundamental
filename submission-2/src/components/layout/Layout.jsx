import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Nav from './Nav';

export default function Layout({ isWithNav = true, children }) {
  return (
    <>
      {isWithNav ? <Nav /> : null}

      <Flex
        as='section'
        mx='auto'
        mt={isWithNav ? '20px' : '40px'}
        mb={isWithNav ? '120px' : '40px'}
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
  isWithNav: PropTypes.bool,
  children: PropTypes.any,
};
