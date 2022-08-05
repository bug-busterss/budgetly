import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Select,
  Header,
} from '@mantine/core';
import { FloatingLabelInput } from '../Components/FloatingInput';
import { useState } from 'react';
import { useFloatingInput } from '../hooks/useFloatingInput';
import axios from 'axios';
import DS_Header from '../Components/DS_Header';

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
    <>
      <Paper radius='md' p='xl' withBorder {...props}>
        <Text size='lg' weight={500}>
          Welcome to Budgetly
        </Text>

        <form
          onSubmit={form.onSubmit(async formData => {
            const { data } = await axios.post('http://localhost:8000/signup', {
              name: formData.name,
              username: formData.username,
              password: formData.password,
            });
            if (!data.user) return;
            console.log('USER SIGNED UP', data.user);
          })}
        >
          <Stack>
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
            <Anchor component='button' type='button' color='dimmed' size='xs'>
              Already have an account? Login
            </Anchor>
            <Button type='submit'>Register</Button>
          </Group>
        </form>
      </Paper>
    </>
  );
}
