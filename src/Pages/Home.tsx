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
            {/* https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Usman */}
            <h2>{auth?.user.user?.name}</h2>
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
