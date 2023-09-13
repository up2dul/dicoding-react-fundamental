import { useEffect, useState } from 'react';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import ButtonDelete from '@/components/common/ButtonDelete';
import ButtonArchive from '@/components/common/ButtonArchive';
import Layout from '@/components/layout/Layout';
import { getNote } from '@/lib/api';
import { formatDate } from '@/lib/utils';

export default function Detail() {
  const { noteId } = useParams();
  const [{ title, createdAt, archived, body }, setNoteDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await getNote(noteId);
      setNoteDetail(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Spinner color='teal.400' size='xl' />
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading as='h1'>{title}</Heading>

      <Text>{formatDate(createdAt)}</Text>

      <Flex gap={5}>
        <ButtonArchive isArchived={archived} />
        <ButtonDelete />
      </Flex>

      <Text>{body}</Text>
    </Layout>
  );
}
