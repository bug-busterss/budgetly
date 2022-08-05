import { Card, Title } from '@mantine/core';

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string;
}

export default function ExpenseCard({ user, tabs }: HeaderTabsProps) {
  return (
    <Card>
      <Card shadow='sm' p='lg' radius='md' withBorder>
        <Title>Expense </Title>
        <Title order={2}>$600</Title>
      </Card>

      <Card.Section></Card.Section>
    </Card>
  );
}
