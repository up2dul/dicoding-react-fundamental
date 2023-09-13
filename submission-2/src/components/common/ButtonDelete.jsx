import { Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteNote } from '@/lib/api';
import { useSuccessToast } from '@/hooks/use-successtoast';

export default function ButtonDelete() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const toast = useSuccessToast();

  const handleDelete = () => {
    deleteNote(noteId);
    navigate('/');
    toast('Successfully deleted note');
  };

  return (
    <Button colorScheme='red' variant='outline' onClick={handleDelete}>
      Delete
    </Button>
  );
}
