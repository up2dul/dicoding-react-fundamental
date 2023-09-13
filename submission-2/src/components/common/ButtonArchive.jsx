import { Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { archiveNote, unarchiveNote } from '@/lib/api';
import { useSuccessToast } from '@/hooks/use-successtoast';

export default function ButtonArchive({ isArchived }) {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const toast = useSuccessToast();

  const handleArchive = () => {
    if (isArchived) {
      unarchiveNote(noteId);
      navigate('/');
      toast('Successfully unarchived note');
    } else {
      archiveNote(noteId);
      navigate('/archive');
      toast('Successfully archived note');
    }
  };

  return (
    <Button colorScheme='teal' onClick={handleArchive}>
      {isArchived ? 'Unarchive note' : 'Archive note'}
    </Button>
  );
}

ButtonArchive.propTypes = {
  isArchived: PropTypes.bool,
};
