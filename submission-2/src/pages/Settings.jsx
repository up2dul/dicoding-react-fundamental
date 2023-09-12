import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Stack,
} from '@chakra-ui/react';

import Layout from '@/components/layout/Layout';
import ButtonTheme from '@/components/common/ButtonTheme';

export default function Settings() {
  return (
    <Layout>
      <Heading as='h1'>Settings</Heading>

      <Stack spacing={10} w={[300, 400, 500]}>
        <FormControl>
          <FormLabel>UI theme</FormLabel>
          <ButtonTheme />
        </FormControl>

        <FormControl>
          <FormLabel>Account</FormLabel>
          <Button colorScheme='red'>Logout from account</Button>
        </FormControl>
      </Stack>
    </Layout>
  );
}
