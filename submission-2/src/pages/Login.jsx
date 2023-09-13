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
import PropTypes from 'prop-types';

import Layout from '@/components/layout/Layout';
import { initialLoginState, loginReducer } from '@/reducers/login';
import { login } from '@/lib/api';

export default function Login({ onLoginSuccess }) {
  const [form, dispatch] = useReducer(loginReducer, initialLoginState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, data } = await login(form);

    if (!error) onLoginSuccess(data);
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

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};
