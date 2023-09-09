import { useReducer } from 'react';
import {
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import { initialLoginState, loginReducer } from '@/reducers/login';

export default function Login() {
  const [form, dispatch] = useReducer(loginReducer, initialLoginState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted', form);
  };

  return (
    <Layout isWithNav={false}>
      <Heading as='h1'>Login to your account</Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing={10} w={[300, 400, 500]}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              autoComplete='off'
              value={form.email}
              onChange={({ target }) =>
                dispatch({ type: 'SET_EMAIL', payload: target.value })
              }
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              value={form.password}
              onChange={({ target }) =>
                dispatch({ type: 'SET_PASSWORD', payload: target.value })
              }
              required
            />
          </FormControl>

          <Button type='submit' colorScheme='teal'>
            Login now
          </Button>
        </Stack>
      </form>

      <Text>
        Don't have an account?{' '}
        <ChakraLink as={Link} to='/register' color='teal.500'>
          register here
        </ChakraLink>
        .
      </Text>
    </Layout>
  );
}
