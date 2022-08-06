import { Button, Group, Stack, Tabs } from '@mantine/core';
import { IconMinus, IconPlus, IconX } from '@tabler/icons';

export default function Filtermain({
  setSelectedFilter,
}: {
  setSelectedFilter: (v: string | null) => void;
}) {
  return (
    <>
      <Group>
        <Stack>
          <Tabs color='#6E72FC' variant='pills'>
            <Tabs.List>
              <Tabs.Tab
                value='efgh'
                onClick={() => setSelectedFilter('added')}
                icon={<IconPlus size={14} />}
              >
                Added
              </Tabs.Tab>
              <Tabs.Tab
                value='abcd'
                onClick={() => setSelectedFilter('deducted')}
                icon={<IconMinus size={14} />}
              >
                Deducted
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Stack>
        <Button
          leftIcon={<IconX size={14} />}
          onClick={() => setSelectedFilter(null)}
        >
          Clear Filters
        </Button>
      </Group>
      <Group>
        <Stack></Stack>
      </Group>
    </>
  );
}
