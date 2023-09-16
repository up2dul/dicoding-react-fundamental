import { Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { archiveNote, unarchiveNote } from '@/lib/api';
import { useCustomToast } from '@/hooks/use-customtoast';

export default function ButtonArchive({ isArchived }) {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const { successToast } = useCustomToast();

  const handleArchive = () => {
    if (isArchived) {
      unarchiveNote(noteId);
      navigate('/');
      successToast('Successfully unarchived note');
    } else {
      archiveNote(noteId);
      navigate('/archive');
      successToast('Successfully archived note');
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
