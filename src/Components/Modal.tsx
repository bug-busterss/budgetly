import { useState, Dispatch, SetStateAction } from 'react';
import {
  Modal,
  Button,
  Group,
  Grid,
  useMantineTheme,
  Title,
} from '@mantine/core';
import { FloatingLabelInput } from './FloatingInput';
import { Category } from './Select';

type ModalProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

function Demo({ opened, setOpened }: ModalProps) {
  const theme = useMantineTheme();
  const [expense, setexpense] = useState(false);
  return (
    <>
      <Modal
        size='55%'
        opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        title='{expense} Money'
      >
        <Grid p='lg'>
          {/* <Title>Add Expense</Title> */}
          <Grid.Col>
            <FloatingLabelInput label='Name' />
          </Grid.Col>
          <Grid.Col>
            <FloatingLabelInput label='Amount' isNumber />
          </Grid.Col>
          {/* <Grid.Col>
            <Category />
          </Grid.Col> */}
        </Grid>
      </Modal>
    </>
  );
}

export default Demo;
