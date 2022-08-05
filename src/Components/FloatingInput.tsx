import { ChangeEventHandler, useState } from 'react';
import { TextInput, NumberInput } from '@mantine/core';
import { useFloatingInput } from '../hooks/useFloatingInput';

interface Props {
  label: string;
  isNumber?: boolean;
  formData?: {
    value: string | number;
    onChange: (txt?: string | number) => void;
  };
}

export function FloatingLabelInput({ label, isNumber, formData }: Props) {
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
          value={formData?.value as number}
          onChange={num => formData?.onChange(num)}
        />
      ) : (
        <TextInput
          label={label}
          required
          classNames={classes}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={formData?.value}
          onChange={e => formData?.onChange(e.target.value)}
          mt='md'
          autoComplete='nope'
        />
      )}
    </>
  );
}
