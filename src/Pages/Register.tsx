import { useForm } from '@mantine/form';
import {
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Anchor,
  Stack,
  Container,
  Center,
  TextInput,
} from '@mantine/core';
import { FloatingLabelInput } from '../Components/FloatingInput';
import { useState } from 'react';
import { useFloatingInput } from '../hooks/useFloatingInput';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AuthInput from '../Components/AuthInput';

export function RegisterForm(props: PaperProps) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      password: '',
      name: '',
      username: '',
    },

    validate: {
      password: val =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });
  const [focused, setFocused] = useState(false);
  const { classes } = useFloatingInput({
    floating: focused,
  });

  return (
    <Container>
      <Center>
        <Paper radius='md' p='xl' withBorder {...props}>
          <Text size='lg' weight={500}>
            Welcome to Budgetly
          </Text>

          <form
            onSubmit={form.onSubmit(async formData => {
              const { data } = await axios.post(
                'http://localhost:8000/signup',
                {
                  name: formData.name,
                  username: formData.username,
                  password: formData.password,
                }
              );
              if (!data.user) return;
              console.log('USER SIGNED UP', data.user);
              navigate('/login');
            })}
          >
            <Stack mt='xl'>
              <AuthInput
                label='Name'
                input={TextInput}
                {...form.getInputProps('name')}
              />
              <AuthInput
                label='Username'
                input={TextInput}
                {...form.getInputProps('username')}
              />
              <AuthInput
                label='Password'
                input={PasswordInput}
                {...form.getInputProps('password')}
              />
              {/* <PasswordInput
                required
                label='Password'
                value={form.values.password}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                mt='md'
                classNames={classes}
                onChange={event =>
                  form.setFieldValue('password', event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  'Password should include at least 6 characters'
                }
              /> */}
            </Stack>

            <Group position='apart' mt='xl'>
              <Anchor
                component={Link}
                type='button'
                color='dimmed'
                size='xs'
                to='/login'
              >
                Already have an account? Login
              </Anchor>
              <Button
                variant='gradient'
                gradient={{ from: '#AD1DEB', to: '#6E72FC' }}
                type='submit'
              >
                Register
              </Button>
            </Group>
          </form>
        </Paper>
      </Center>
    </Container>
  );
}
