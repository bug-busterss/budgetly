import { Select } from '@mantine/core';

export function Category() {
  return (
    <Select
      label='Category'
      placeholder='Pick one'
      data={[
        { value: '1', label: 'Comfort' },
        { value: '2', label: 'Essential' },
      ]}
    />
  );
}
