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
      color: floating
        ? theme.colorScheme === 'dark'
          ? theme.white
          : theme.black
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : 'none',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
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

  const [value, setValue] = useState('');
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
    floating1: value.trim().length !== 0 || focused1,
  });

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

          {/* <form onSubmit={form.onSubmit(() => {})}> */}
          <Stack>
            <TextInput
              label='Username'
              required
              classNames={classes}
              value={value}
              onChange={() => setValue(form.values.username)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt='md'
            />

            <PasswordInput
              required
              label='Password'
              classNames={classes}
              value={value}
              onChange={() => setValue(form.values.password)}
              onFocus={() => setFocused1(true)}
              onBlur={() => setFocused1(false)}
              mt='md'
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
            <Button type='submit'>Login</Button>
          </Group>
          {/* </form> */}
        </Paper>
      </Center>
    </Container>
  );
}
