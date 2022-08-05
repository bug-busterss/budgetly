import { Card, Group, Title } from '@mantine/core';
import { IconSwimming } from '@tabler/icons';

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string;
}

export default function ExpenseCard({ user, tabs }: HeaderTabsProps) {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder>
      <Card.Section>
        <Group position='apart'>
          <div>
            <Title>Expense </Title>
            <Title order={2}>$600</Title>
          </div>

          <IconSwimming />
        </Group>
      </Card.Section>
    </Card>
  );
}
