import { Button, Group, Stack, Tabs } from '@mantine/core';
import { IconList, IconMinus, IconPlus, IconX } from '@tabler/icons';

export default function Filtermain({
  setSelectedFilter,
}: {
  setSelectedFilter: (v: string | null) => void;
}) {
  return (
    <>
      <Group mt='xl'>
        <Stack>
          <Tabs color='#6E72FC' variant='pills' radius='xl' defaultValue='all'>
            <Tabs.List>
              <Tabs.Tab
                p='md'
                value='all'
                onClick={() => setSelectedFilter(null)}
                icon={<IconList size={14} />}
              >
                All
              </Tabs.Tab>
              <Tabs.Tab
                p='md'
                value='added'
                onClick={() => setSelectedFilter('added')}
                icon={<IconPlus size={14} />}
              >
                Added
              </Tabs.Tab>
              <Tabs.Tab
                p='md'
                value='deducted'
                onClick={() => setSelectedFilter('deducted')}
                icon={<IconMinus size={14} />}
              >
                Deducted
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Stack>
      </Group>
    </>
  );
}
