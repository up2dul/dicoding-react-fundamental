import { Link as ChakraLink } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavLink({ href, title, children }) {
  return (
    <ChakraLink as={Link} to={href} title={title} px={[6, 8]} py={4}>
      {children}
    </ChakraLink>
  );
}

NavLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};
