import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { archiveNote, getNote, unarchiveNote } from '@/lib/local-data';

export default function ButtonArchive() {
  const { noteId } = useParams();
  const note = getNote(noteId);
  const [isArchived, setIsArchived] = useState(note.archived);

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(noteId);
      setIsArchived(false);
    } else {
      archiveNote(noteId);
      setIsArchived(true);
    }
  };

  return (
    <Button colorScheme='teal' onClick={handleArchive}>
      {isArchived ? 'Unarchive note' : 'Archive note'}
    </Button>
  );
}
