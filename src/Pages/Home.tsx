import { Center, Container, Loader, Title } from '@mantine/core';
import ExpenseCard from '../Components/Card';
import HistoryCardContainer from '../Components/HistoryCardContainer';
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
            <h2>{auth?.user.user?.name}</h2>
            <ExpenseCard token={auth.token} />
            <Title mt='lg'>History</Title>
            <HistoryCardContainer token={auth.token} />
          </>
        )}
      </Container>
    </>
  );
}
