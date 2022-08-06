import HistoryCard from './HistoryCard';
import useSWR from 'swr';
import axios from 'axios';
import { Activity } from '../types';

async function fetchActivities(endpoint: string, token: string) {
  const { data } = await axios.get<{ activities: Activity[] }>(
    `http://localhost:8000/${endpoint}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
}

export default function HistoryCardContainer({ token }: { token: string }) {
  const { data } = useSWR(['activities', token], fetchActivities);
  return (
    <>
      {data &&
        data.activities.map(activity => (
          <HistoryCard key={activity.id} activity={activity} />
        ))}
    </>
  );
}
