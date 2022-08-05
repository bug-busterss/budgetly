import { TextInputProps } from '@mantine/core';
import { ChangeEvent, FC, useState } from 'react';
import { useFloatingInput } from '../hooks/useFloatingInput';

interface Props {
  input: FC<TextInputProps>;
  label: string;
  form: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

export default function AuthInput({ input: Input, form, label }: Props) {
  const [focused, setFocused] = useState(false);
  const { classes } = useFloatingInput({ floating: focused });
  return (
    <Input
      label={label}
      required
      classNames={classes}
      value={form.value}
      onChange={form.onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt='md'
    />
  );
}
