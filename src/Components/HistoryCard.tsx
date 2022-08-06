import { ActionIcon, Card, Group, Text } from '@mantine/core';
import { Activity } from '../types';
import { format } from 'timeago.js';
import { IconTrash } from '@tabler/icons';
import { useState } from 'react';
import { openConfirmModal } from '@mantine/modals';
import axios from 'axios';
import { mutate } from 'swr';

export default function HistoryCard({
  activity,
  token,
  canDelete,
}: {
  activity: Activity;
  token: string;
  canDelete: boolean;
}) {
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
      onConfirm: async () => {
        const actId = activity.id;
        const { data } = await axios.delete(
          `http://localhost:8000/activity/${actId}?amount=${activity.amount}&isExpense=${activity.isExpense}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        await mutate(['activities', token]);
        await mutate(['balance', token]);
      },
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
        <Card.Section p='xs'>
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
              {canDelete && (
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
              )}
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </div>
  );
}
