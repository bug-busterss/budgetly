import { Center, Container, Loader, Title } from '@mantine/core';
import ExpenseCard from '../Components/Card';
import HistoryCard from '../Components/HistoryCard';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { auth, isLoading } = useAuth();
  return (
    <>
      <Container>
        {isLoading ? (
          <Center>
            <Loader color='grape' size='xl' mt={350} />
          </Center>
        ) : (
          <>
            {/* https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Usman */}
            <h2>{auth?.user.user?.name}</h2>
            <ExpenseCard balance={auth.user.balance} token={auth.token} />
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
