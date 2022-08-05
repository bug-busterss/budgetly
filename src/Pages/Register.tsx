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
  Select,
  Header,
  Container,
  Center,
} from '@mantine/core';
import { FloatingLabelInput } from '../Components/FloatingInput';
import { useState } from 'react';
import { useFloatingInput } from '../hooks/useFloatingInput';
import axios from 'axios';
import DS_Header from '../Components/DS_Header';
import { Link } from 'react-router-dom';

export function RegisterForm(props: PaperProps) {
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
            })}
          >
            <Stack mt='xl'>
              <FloatingLabelInput
                label='Name'
                formData={{
                  value: form.values.name,
                  onChange(txt?) {
                    form.setFieldValue('name', txt as string);
                  },
                }}
              />

              <FloatingLabelInput
                label='Username'
                formData={{
                  value: form.values.username,
                  onChange(txt?) {
                    form.setFieldValue('username', txt as string);
                  },
                }}
              />

              <PasswordInput
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
              />
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
