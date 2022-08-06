import { ActionIcon, Card, Group, Skeleton, Text } from '@mantine/core';
import { Activity } from '../types';
import { format } from 'timeago.js';
import { IconTrash } from '@tabler/icons';
import { useState } from 'react';
import { openConfirmModal } from '@mantine/modals';

export default function HistoryCard({ activity }: { activity: Activity }) {
  const [loading, setLoading] = useState(true);
  const openDeleteModal = () =>
    openConfirmModal({
      title: 'Delete Activity',
      centered: true,
      children: (
        <Text size='sm'> Are You Certain That You Want to Remove It?</Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });
  return (
    <div>
      <Card
        shadow='xl'
        p='lg'
        radius='lg'
        withBorder
        mt='sm'
        sx={{
          // borderWidth: 2,
          // borderColor: 'purple',
          borderLeftWidth: 10,
          borderLeftColor: activity.isExpense ? '#E03131' : '#74B816',
          backgroundColor: activity.isExpense
            ? 'rgba(255, 0,0, .1)'
            : 'rgba(116, 184, 22, .1)',
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
                onClick={openDeleteModal}
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
