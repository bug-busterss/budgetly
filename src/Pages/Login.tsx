import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  PaperProps,
  Stack,
  createStyles,
  Container,
  Center,
  Anchor,
  Group,
  Button,
} from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthInput from '../Components/AuthInput';

const useStyles = createStyles(
  (
    theme,
    { floating, floating1 }: { floating: boolean; floating1: boolean }
  ) => ({
    root: {
      position: 'relative',
    },

    label: {
      position: 'absolute',
      zIndex: 2,
      top: 7,
      left: theme.spacing.sm,
      pointerEvents: 'none',
      color:
        floating || floating1
          ? theme.colorScheme === 'dark'
            ? theme.white
            : theme.black
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[5],
      transition:
        'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform:
        floating || floating1
          ? `translate(-${theme.spacing.sm}px, -28px)`
          : 'none',
      fontSize: floating || floating1 ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating || floating1 ? 500 : 400,
    },

    required: {
      transition: 'opacity 150ms ease',
      opacity: floating ? 1 : 0,
    },

    input: {
      '&::placeholder': {
        transition: 'color 150ms ease',
        color: !floating ? 'transparent' : undefined,
      },
    },
  })
);

export default function Login(props: PaperProps) {
  const [focused, setFocused] = useState(false);
  const [focused1, setFocused1] = useState(false);

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
  const { classes } = useStyles({
    floating: form.values.username.trim() !== '' || focused,
    floating1: form.values.password.trim() !== '' || focused1,
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
            <Stack>
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
