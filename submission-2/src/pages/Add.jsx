import { useReducer } from 'react';
import {
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import { addNote } from '@/lib/local-data';
import { initialNoteState, noteReducer } from '@/reducers/note';

export default function Add() {
  const [form, dispatch] = useReducer(noteReducer, initialNoteState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(form);
    navigate('/');
  };

  return (
    <Layout>
      <Heading as='h1'>Add new note</Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing={10} w={[300, 400, 500]}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type='text'
              autoComplete='off'
              value={form.title}
              onChange={({ target }) =>
                dispatch({ type: 'SET_TITLE', payload: target.value })
              }
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Note body</FormLabel>
            <Textarea
              value={form.body}
              onChange={({ target }) =>
                dispatch({ type: 'SET_BODY', payload: target.value })
              }
              required
            />
          </FormControl>

          <Button type='submit' colorScheme='teal'>
            Add now
          </Button>
        </Stack>
      </form>
    </Layout>
  );
}
