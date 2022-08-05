import { Container, Title } from '@mantine/core';
import ExpenseCard from '../Components/Card';
import HistoryCard from '../Components/HistoryCard';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { auth, isLoading } = useAuth();
  return (
    <>
      <Container>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h2>{auth?.user?.id}</h2>
            <ExpenseCard />
            <Title mt='lg'>History</Title>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </>
        )}
      </Container>
    </>
  );
}
