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
      <Card
        shadow='xl'
        p='lg'
        radius='lg'
        withBorder
        mt='sm'
        sx={{
          borderWidth: 2,
          borderColor: 'purple',
          borderLeftWidth: 10,
          borderLeftColor: '#E03131',
          backgroundColor: 'rgba(255, 0,0, .1)',
        }}
      >
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
                size='xl'
                radius='xl'
                sx={{
                  ':hover': {
                    background: 'rgba(255, 0, 0, 0.7)',
                    color: 'azure',
                  },
                }}
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
