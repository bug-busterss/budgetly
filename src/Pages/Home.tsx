import {
  ActionIcon,
  Anchor,
  Center,
  Container,
  Group,
  Image,
  Loader,
  Paper,
  Stack,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import ExpenseCard from '../Components/Card';
import HistoryCardContainer from '../Components/HistoryCardContainer';
import { UseAuthReturn } from '../hooks/useAuth';
import Undraw from 'react-undraw';
import { IconFilter } from '@tabler/icons';
import Filtermain from '../Components/Filter';

Undraw.defaultProps.primaryColor = '#862E9C';

export default function Home({ authData }: { authData: UseAuthReturn }) {
  return (
    <>
      <Container>
        {authData.isLoading ? (
          <Center>
            <Loader color='grape' size='xl' mt={350} />
          </Center>
        ) : authData.isLoggedIn ? (
          <>
            {/* https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Usman */}
            <h2>{authData.auth?.user.user?.name}</h2>
            <ExpenseCard token={authData.auth.token} />
            <Group position='apart'>
              <Title mt='xl'>History</Title>
              <Filtermain />
            </Group>

            <HistoryCardContainer token={authData.auth.token} />
          </>
        ) : (
          <Stack mt='xl' spacing='xl' align='center'>
            <Image
              src='/login.svg'
              style={{ width: 500, marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Title sx={{ fontWeight: 500 }}>
              You are not signed in.{' '}
              <Anchor component={Link} to='/login'>
                Sign in
              </Anchor>{' '}
              or{' '}
              <Anchor component={Link} to='/register'>
                Register
              </Anchor>{' '}
              to continue
            </Title>
          </Stack>
        )}
      </Container>
    </>
  );
}
