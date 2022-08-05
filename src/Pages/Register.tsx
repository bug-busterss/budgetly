import { useToggle, upperFirst } from '@mantine/hooks';
import { Category } from '../Components/Select';
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
} from '@mantine/core';
import { FloatingLabelInput } from '../Components/FloatingInput';
import { useState } from 'react';
import { useFloatingInput } from '../hooks/useFloatingInput';

export function RegisterForm(props: PaperProps) {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
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

  const type = 'register';

  return (
    <Paper radius='md' p='xl' withBorder {...props}>
      <Text size='lg' weight={500}>
        Welcome to Budegtly
      </Text>

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && <FloatingLabelInput label='User Name' />}

          <FloatingLabelInput label='User Name' />

          <PasswordInput
            required
            label='Password'
            // placeholder='Your password'
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

          {type === 'register' && (
            <Checkbox
              label='I accept terms and conditions'
              checked={form.values.terms}
              onChange={event =>
                form.setFieldValue('terms', event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position='apart' mt='xl'>
          <Anchor component='button' type='button' color='dimmed' size='xs'>
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type='submit'>{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
  );
}
