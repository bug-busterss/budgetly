import { Button, Card, Group, Title, Tooltip } from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons';
import { useState } from 'react';
import ExpenseModal from './Modal';
import useSWR from 'swr';
import axios from 'axios';

async function fetchBalance(endpoint: string, token: string) {
  const { data } = await axios.get(`http://localhost:8000/${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export default function ExpenseCard({ token }: { token: string }) {
  const [opened, setOpened] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const { data } = useSWR(['balance', token], fetchBalance);

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
              transitionDuration={200}
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
              <Title>₹{!data ? 0 : data.balance}</Title>
            </div>
            {/* DEDUCT BUTTON */}
            <Tooltip
              label='Deduct Money'
              transition='slide-right'
              transitionDuration={200}
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
      <ExpenseModal
        opened={opened}
        setOpened={setOpened}
        isAdd={isAdd}
        token={token}
      />
    </>
  );
}
