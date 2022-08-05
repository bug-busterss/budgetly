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
import { Link } from 'react-router-dom';
import AuthInput from '../Components/AuthInput';

export default function Login(props: PaperProps) {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      //   email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: val =>
        val.length <= 6
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
              console.log(data);
            })}
          >
            <Stack mt='xl'>
              <AuthInput
                input={TextInput}
                label='Username'
                form={{
                  value: form.values.username,
                  onChange(e) {
                    form.setFieldValue('username', e.target.value);
                  },
                }}
              />
              <AuthInput
                input={PasswordInput}
                label='Password'
                form={{
                  value: form.values.password,
                  onChange(e) {
                    form.setFieldValue('password', e.target.value);
                  },
                }}
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
