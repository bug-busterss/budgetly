import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  PaperProps,
  Stack,
  Container,
  Center,
  Anchor,
  Group,
  Button,
} from '@mantine/core';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AuthInput from '../Components/AuthInput';
import { getCurentUser } from '../utils/getCurrentUser';
import { useAuth } from '../hooks/useAuth';

export default function Login(props: PaperProps) {
  const { auth, setAuth, isLoading } = useAuth();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      //   email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: val =>
        val.length <= 4
          ? 'Password should include at least 6 characters'
          : null,
    },
  });

  return (
    <Container>
      <Center>
        <Paper radius='md' p='xl' withBorder {...props}>
          <Text size='lg' weight={500}>
            Welcome back to Budgetly
          </Text>

          <form
            onSubmit={form.onSubmit(async formData => {
              const { data } = await axios.postForm(
                'http://localhost:8000/login',
                {
                  username: formData.username,
                  password: formData.password,
                }
              );
              const user = await getCurentUser(data['access_token']);
              // localStorage.setItem('user', JSON.stringify(user));
              setAuth(user);
              navigate('/');
            })}
          >
            <Stack mt='xl'>
              <AuthInput
                input={TextInput}
                label='Username'
                {...form.getInputProps('username')}
              />
              <AuthInput
                input={PasswordInput}
                label='Password'
                {...form.getInputProps('password')}
              />
            </Stack>
            <Group position='apart' mt='xl'>
              <Anchor
                component={Link}
                type='button'
                color='dimmed'
                size='xs'
                to='/register'
              >
                Don't have an account? Register
              </Anchor>
              <Button
                variant='gradient'
                gradient={{ from: '#AD1DEB', to: '#6E72FC' }}
                type='submit'
              >
                Login
              </Button>
            </Group>
          </form>
        </Paper>
      </Center>
    </Container>
  );
}
