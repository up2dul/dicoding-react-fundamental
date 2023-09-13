import { useEffect, useState } from 'react';
import { Heading, ListItem, Spinner, UnorderedList } from '@chakra-ui/react';

import Card from '@/components/common/Card';
import InputSearch from '@/components/common/InputSearch';
import Layout from '@/components/layout/Layout';
import { getArchivedNotes } from '@/lib/api';

export default function Archive() {
  const [initialNotes, setInitialNotes] = useState(null);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await getArchivedNotes();
      setInitialNotes(data);
      setNotes(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Layout>
      <Heading as='h1'>Archived notes</Heading>

      <InputSearch
        initialNotes={initialNotes}
        onChange={(filteredNotes) => setNotes(filteredNotes)}
      />

      {isLoading ? (
        <Spinner color='teal.400' size='xl' />
      ) : (
        <>
          {notes.length > 0 ? (
            <UnorderedList
              w={['90%', '70%', '50%']}
              spacing={5}
              styleType='none'
            >
              {notes.map((note) => (
                <ListItem key={note.id}>
                  <Card {...note} />
                </ListItem>
              ))}
            </UnorderedList>
          ) : (
            <Heading as='h1' size='md'>
              No archived notes found.
            </Heading>
          )}
        </>
      )}
    </Layout>
  );
}
