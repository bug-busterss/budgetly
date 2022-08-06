import { Dispatch, SetStateAction, useState } from 'react';
import { Modal, Button, Grid, useMantineTheme } from '@mantine/core';
import { FloatingLabelInput } from './FloatingInput';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { mutate } from 'swr';

type ModalProps = {
  opened: boolean;
  isAdd: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  token: string;
};

interface ActivityForm {
  name?: string;
  amount: number | null;
}

function ExpenseModal({ opened, isAdd, setOpened, token }: ModalProps) {
  const theme = useMantineTheme();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ActivityForm>({
    initialValues: {
      name: '',
      amount: null,
    },
  });

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
        title={`${isAdd ? 'Add' : 'Deduct'} Money`}
      >
        <form
          onSubmit={form.onSubmit(async formData => {
            setIsLoading(true);
            const { data } = await axios.post(
              'http://localhost:8000/activities',
              { ...formData, isExpense: !isAdd },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            form.reset();
            setIsLoading(false);
            setOpened(false);
            console.log(data);
            await mutate(['balance', token]);
            await mutate(['activities', token]);
          })}
        >
          <Grid p='lg'>
            <Grid.Col>
              <FloatingLabelInput
                label='Name'
                {...form.getInputProps('name')}
              />
            </Grid.Col>
            <Grid.Col>
              <FloatingLabelInput
                label='Amount'
                isNumber
                required
                {...form.getInputProps('amount')}
              />
            </Grid.Col>

            <Grid.Col>
              <Button
                variant='gradient'
                gradient={{ from: '#AD1DEB', to: '#6E72FC' }}
                type='submit'
                fullWidth
                size='lg'
                loading={isLoading}
              >
                {`${isAdd ? 'Add' : 'Deduct'} Money`}
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>
    </>
  );
}

export default ExpenseModal;
