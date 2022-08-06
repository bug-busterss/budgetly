import {
  ActionIcon,
  Button,
  Card,
  Group,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { Activity } from '../types';
import { format } from 'timeago.js';
import { IconTrash } from '@tabler/icons';

export default function HistoryCard({ activity }: { activity: Activity }) {
  return (
    <div>
      <Card shadow='md' p='lg' radius='lg' withBorder mt='sm'>
        <Card.Section p='xl'>
          <Group position='apart'>
            <Group position='center' spacing={8}>
              <Text transform='capitalize' size='xl' mr='md'>
                {activity.name}
              </Text>
              <Text size='xl' weight={700}>
                ₹{activity.amount}
              </Text>
            </Group>
            <Group>
              <Text size='xl'>{format(activity.createdAt)}</Text>

              <ActionIcon
                variant='transparent'
                color='red'
                // sx={{ '&[data-loading]': { backgroundColor: 'red' } }}
              >
                <IconTrash />
              </ActionIcon>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </div>
  );
}
