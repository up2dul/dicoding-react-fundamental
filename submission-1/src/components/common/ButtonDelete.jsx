import { Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteNote } from '@/lib/local-data';

export default function ButtonDelete() {
  const navigate = useNavigate();
  const { noteId } = useParams();

  const handleDelete = () => {
    deleteNote(noteId);
    navigate('/');
  };

  return (
    <Button colorScheme='red' variant='outline' onClick={handleDelete}>
      Delete
    </Button>
  );
}
