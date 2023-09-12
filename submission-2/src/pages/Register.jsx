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
import { Link, useNavigate } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import { initialRegisterState, registerReducer } from '@/reducers/register';
import { register } from '@/lib/api';

export default function Register() {
  const navigate = useNavigate();
  const [form, dispatch] = useReducer(registerReducer, initialRegisterState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await register(form);

    if (!error) navigate('/login');
  };

  return (
    <Layout isWithNav={false}>
      <Heading as='h1'>Register your account</Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing={10} w={[300, 400, 500]}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type='text'
              autoComplete='off'
              value={form.name}
              onChange={({ target }) =>
                dispatch({ type: 'SET_NAME', payload: target.value })
              }
              required
            />
          </FormControl>

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

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type='password'
              value={form.confirmPassword}
              onChange={({ target }) =>
                dispatch({
                  type: 'SET_CONFIRM_PASSWORD',
                  payload: target.value,
                })
              }
              required
            />
          </FormControl>

          <Button type='submit' colorScheme='teal'>
            Register now
          </Button>
        </Stack>
      </form>

      <Text>
        Already have an account?{' '}
        <ChakraLink as={Link} to='/login' color='teal.500'>
          login here
        </ChakraLink>
        .
      </Text>
    </Layout>
  );
}
