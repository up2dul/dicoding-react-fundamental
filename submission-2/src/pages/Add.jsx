import { useState } from 'react';
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

export default function Add() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body });
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
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Note body</FormLabel>
            <Textarea
              value={body}
              onChange={({ target }) => setBody(target.value)}
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
