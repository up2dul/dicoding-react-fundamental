import { useState } from 'react';
import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';

import Card from '@/components/common/Card';
import InputSearch from '@/components/common/InputSearch';
import Layout from '@/components/layout/Layout';
import { getArchivedNotes } from '@/lib/local-data';

export default function Archive() {
  const initialNotes = getArchivedNotes();
  const [notes, setNotes] = useState(initialNotes);

  return (
    <Layout>
      <Heading as='h1'>Archived notes</Heading>

      <InputSearch
        initialNotes={initialNotes}
        onChange={(filteredNotes) => setNotes(filteredNotes)}
      />

      {notes.length > 0 ? (
        <UnorderedList spacing={5} styleType='none'>
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
    </Layout>
  );
}
