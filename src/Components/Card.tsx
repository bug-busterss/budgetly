import {
  Button,
  Card,
  Group,
  Modal,
  Title,
  Tooltip,
  Transition,
} from '@mantine/core';
import { IconMinus, IconPlus, IconSwimming } from '@tabler/icons';
import { useState } from 'react';
import Demo from './Modal';

export default function ExpenseCard({ balance }: { balance: number }) {
  const [opened, setOpened] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <>
      <Card shadow='md' p='lg' radius='lg' withBorder>
        <Card.Section>
          <Group position='apart' p='20px'>
            {/* ADD BUTTON */}
            <Tooltip
              label='Add Money'
              position='right'
              transition='slide-left'
              transitionDuration={100}
              withArrow
            >
              <Button
                styles={{ root: { width: '4rem', height: '4rem' } }}
                variant='gradient'
                gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                radius='xl'
                onClick={() => {
                  setOpened(true);
                  setIsAdd(true);
                }}
              >
                <IconPlus />
              </Button>
            </Tooltip>
            <div>
              <Title>₹{balance}</Title>
            </div>
            {/* DEDUCT BUTTON */}
            <Tooltip
              label='Deduct Money'
              transition='slide-right'
              transitionDuration={100}
              position='left'
              withArrow
            >
              <Button
                styles={{ root: { width: '4rem', height: '4rem' } }}
                variant='gradient'
                gradient={{ from: '#FF3b00', to: '#EA5459', deg: 105 }}
                radius='xl'
                onClick={() => {
                  setOpened(true);
                  setIsAdd(false);
                }}
              >
                <IconMinus />
              </Button>
            </Tooltip>
          </Group>
        </Card.Section>
      </Card>
      <Demo opened={opened} setOpened={setOpened} isAdd={isAdd} />
    </>
  );
}
