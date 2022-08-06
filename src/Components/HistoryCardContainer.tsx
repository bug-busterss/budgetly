import HistoryCard from './HistoryCard';
import useSWR from 'swr';
import axios from 'axios';
import { Activity } from '../types';
import { Card, Group, Skeleton } from '@mantine/core';

async function fetchActivities(endpoint: string, token: string) {
  const { data } = await axios.get<{ activities: Activity[] }>(
    `http://localhost:8000/${endpoint}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
}

export default function HistoryCardContainer({
  token,
  selectedFilter,
}: {
  token: string;
  selectedFilter: string | null;
}) {
  const { data } = useSWR(['activities', token], fetchActivities);

  return (
    <>
      {data ? (
        selectedFilter === 'added' ? (
          data?.activities
            .filter(act => act.isExpense === false)
            .map((activity, index) => (
              <HistoryCard
                token={token}
                key={activity.id}
                activity={activity}
              />
            ))
        ) : selectedFilter === 'deducted' ? (
          data?.activities
            .filter(act => act.isExpense)
            .map((activity, index) => (
              <HistoryCard
                token={token}
                key={activity.id}
                activity={activity}
              />
            ))
        ) : (
          data?.activities.map((activity, index) => (
            <HistoryCard
              token={token}
              key={activity.id}
              activity={activity}
              canDelete={index === 0}
            />
          ))
        )
      ) : (
        <>
          <Card shadow='md' p='lg' radius='lg' withBorder mt='sm'>
            <Group position='apart'>
              <Group>
                <Skeleton height={30} width={200} radius='xl' />
                <Skeleton height={30} width={150} radius='xl' />
              </Group>
              <Group>
                <Skeleton height={30} width={150} radius='xl' />
                <Skeleton height={30} width={30} radius='xl' />
              </Group>
            </Group>
          </Card>
          <Card shadow='md' p='lg' radius='lg' withBorder mt='sm'>
            <Group position='apart'>
              <Group>
                <Skeleton height={30} width={200} radius='xl' />
                <Skeleton height={30} width={150} radius='xl' />
              </Group>
              <Group>
                <Skeleton height={30} width={150} radius='xl' />
                <Skeleton height={30} width={30} radius='xl' />
              </Group>
            </Group>
          </Card>
          <Card shadow='md' p='lg' radius='lg' withBorder mt='sm'>
            <Group position='apart'>
              <Group>
                <Skeleton height={30} width={200} radius='xl' />
                <Skeleton height={30} width={150} radius='xl' />
              </Group>
              <Group>
                <Skeleton height={30} width={150} radius='xl' />
                <Skeleton height={30} width={30} radius='xl' />
              </Group>
            </Group>
          </Card>
        </>
      )}
    </>
  );
}
