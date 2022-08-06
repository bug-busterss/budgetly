import { TextInputProps } from '@mantine/core';
import { FC, useState } from 'react';
import { useFloatingInput } from '../hooks/useFloatingInput';

interface Props {
  input: FC<TextInputProps>;
  label: string;
}

export default function AuthInput({
  input: Input,
  label,
  ...formProps
}: Props & any) {
  const [focused, setFocused] = useState(false);
  const { classes } = useFloatingInput({ floating: focused });
  return (
    <Input
      label={label}
      required
      classNames={classes}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt='md'
      size='lg'
      {...formProps}
    />
  );
}
