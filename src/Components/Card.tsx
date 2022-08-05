import { Button, Card, Group, Modal, Title } from '@mantine/core';
import { IconMinus, IconPlus, IconSwimming } from '@tabler/icons';
import { useState } from 'react';
import Demo from './Modal';

export default function ExpenseCard() {
  const [opened, setOpened] = useState(false);
  return (
    <Card shadow='md' p='lg' radius='lg' withBorder>
      <Card.Section>
        <Group position='apart' p='20px'>
          <Button
            styles={{ root: { width: '4rem', height: '4rem' } }}
            variant='gradient'
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            radius='xl'
          >
            <IconPlus />
          </Button>

          <div>
            <Title>$600</Title>
          </div>

          <Button
            styles={{ root: { width: '4rem', height: '4rem' } }}
            variant='gradient'
            gradient={{ from: '#FF3b00', to: '#EA5459', deg: 105 }}
            radius='xl'
            onClick={() => setOpened(true)}
          >
            <IconMinus />
          </Button>
        </Group>
      </Card.Section>
      <Demo opened={opened} setOpened={setOpened} />
    </Card>
  );
}
