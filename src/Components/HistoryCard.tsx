import { Card, Group, Text } from '@mantine/core';
import { Activity } from '../types';
import { format } from 'timeago.js';

export default function HistoryCard({ activity }: { activity: Activity }) {
  return (
    <div>
      <Card shadow='md' p='lg' radius='lg' withBorder mt='sm'>
        <Card.Section p='xl'>
          <Group position='apart'>
            <Group position='center' spacing={8}>
              <Text transform='capitalize' size='xl'>
                {activity.name}
              </Text>
              <Text size='xl' weight={700}>
                ₹{activity.amount}
              </Text>
            </Group>
            <Text size='xl'>{format(activity.createdAt)}</Text>
          </Group>
        </Card.Section>
      </Card>
    </div>
  );
}
