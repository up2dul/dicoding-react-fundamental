import { Heading, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatDate } from '@/lib/utils';

export default function Card({ id, title, createdAt, body }) {
  return (
    <Stack as='article'>
      <ChakraLink as={Link} to={`/detail/${id}`}>
        <Heading as='h1' size='lg' noOfLines={1}>
          {title}
        </Heading>
      </ChakraLink>

      <Heading as='h2' size='xs'>
        {formatDate(createdAt)}
      </Heading>

      <Text noOfLines={1}>{body}</Text>
    </Stack>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
};
