import { Card, Container, Group, Text, Title } from '@mantine/core';
import React from 'react';

export default function HistoryCard() {
  return (
    <div>
      <Card shadow='md' p='lg' radius='lg' withBorder mt='sm'>
        <Card.Section p='xl'>
          <Group position='apart'>
            <Group position='center' spacing={8}>
              <Text transform='capitalize' size='xl'>
                ICON
              </Text>
              <Text size='xl' weight={700}>
                ₹45
              </Text>
            </Group>
            <Text size='xl'>9min ago</Text>
          </Group>
        </Card.Section>
      </Card>
    </div>
  );
}
