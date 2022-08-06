import { ActionIcon, Avatar, Badge, Group, Stack, Tabs } from '@mantine/core';
import {
  IconBoxMultiple,
  IconCross,
  IconMinus,
  IconMultiplier1x,
  IconPlus,
  IconX,
} from '@tabler/icons';

export default function Filtermain() {
  const removeButton = (
    <ActionIcon size='xs' color='blue' radius='xl' variant='transparent'>
      <IconX size={10} />
    </ActionIcon>
  );

  return (
    <>
      <Group>
        <Stack>
          <Tabs color='#6E72FC' variant='pills' defaultValue='gallery'>
            <Tabs.List>
              <Tabs.Tab value='added' icon={<IconPlus size={14} />}>
                Added
              </Tabs.Tab>
              <Tabs.Tab value='deducted' icon={<IconMinus size={14} />}>
                Deducted
              </Tabs.Tab>
              <Tabs.Tab value='messages' icon={<IconX size={14} />}>
                Clear
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='added' pt='xs'>
              Added tab content
            </Tabs.Panel>

            <Tabs.Panel value='deducted' pt='xs'>
              Deducted tab content
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Group>
      <Group>
        <Stack></Stack>
      </Group>
    </>
  );
}
