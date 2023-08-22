import {
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from '@chakra-ui/react';

import Layout from '@/components/layout/Layout';

export default function Add() {
  return (
    <Layout>
      <Heading as='h1'>Add new note</Heading>

      <form>
        <Stack spacing={10} w={[300, 400, 500]}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type='text' autoComplete='off' />
          </FormControl>

          <FormControl>
            <FormLabel>Note body</FormLabel>
            <Textarea />
          </FormControl>

          <Button type='submit' colorScheme='teal'>Add now</Button>
        </Stack>
      </form>
    </Layout>
  );
}
