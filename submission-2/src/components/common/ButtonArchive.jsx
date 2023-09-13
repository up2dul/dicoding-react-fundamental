import { Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { archiveNote, unarchiveNote } from '@/lib/api';

export default function ButtonArchive({ isArchived }) {
  const navigate = useNavigate();
  const { noteId } = useParams();

  const handleArchive = () => {
    if (isArchived) {
      unarchiveNote(noteId);
      navigate('/');
    } else {
      archiveNote(noteId);
      navigate('/archive');
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
