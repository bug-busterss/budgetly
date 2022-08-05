import { HTMLInputTypeAttribute, useState } from 'react';
import { TextInput, createStyles, Grid, NumberInput } from '@mantine/core';
import { useFloatingInput } from '../hooks/useFloatingInput';

interface Props {
  label: string;
  isNumber?: boolean;
}

export function FloatingLabelInput({ label, isNumber }: Props) {
  const [focused, setFocused] = useState(false);
  const { classes } = useFloatingInput({
    floating: focused,
  });

  return (
    <>
      {isNumber ? (
        <NumberInput
          label={label}
          required
          classNames={classes}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt='md'
          autoComplete='nope'
        />
      ) : (
        <TextInput
          label={label}
          required
          classNames={classes}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt='md'
          autoComplete='nope'
        />
      )}
    </>
  );
}
