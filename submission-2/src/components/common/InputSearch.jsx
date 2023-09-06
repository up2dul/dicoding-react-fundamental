import { Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function InputSearch({ initialNotes, onChange }) {
  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredNotes = initialNotes.filter((note) =>
      note.title.toLowerCase().includes(query)
    );
    onChange(filteredNotes);
  };

  return (
    <Input
      placeholder='Search notes...'
      w={['90%', '70%', '50%']}
      onChange={handleInputChange}
    />
  );
}

const noteShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
});

InputSearch.propTypes = {
  initialNotes: PropTypes.arrayOf(noteShape),
  onChange: PropTypes.func,
};
