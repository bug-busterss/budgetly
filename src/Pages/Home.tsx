import { Container, Title } from '@mantine/core';
import ExpenseCard from '../Components/Card';
import HistoryCard from '../Components/HistoryCard';

export default function Home() {
  return (
    <>
      <Container>
        <ExpenseCard />
        <Title mt='lg'>History</Title>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </Container>
    </>
  );
}
