import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';

import Card from '@/components/common/Card';
import Layout from '@/components/layout/Layout';
import { getActiveNotes } from '@/lib/local-data';

export default function Home() {
  const notes = getActiveNotes();

  return (
    <Layout>
      <Heading as='h1'>Active notes</Heading>

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
          No notes are active.
        </Heading>
      )}
    </Layout>
  );
}
