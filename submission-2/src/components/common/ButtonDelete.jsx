import { Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteNote } from '@/lib/api';
import { useCustomToast } from '@/hooks/use-customtoast';

export default function ButtonDelete() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const { successToast } = useCustomToast();

  const handleDelete = () => {
    deleteNote(noteId);
    navigate('/');
    successToast('Successfully deleted note');
  };

  return (
    <Button colorScheme='red' variant='outline' onClick={handleDelete}>
      Delete
    </Button>
  );
}
