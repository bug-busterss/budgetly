import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Title,
  MantineProvider,
  SegmentedControl,
  Box,
  useMantineColorScheme,
  Avatar,
  Button,
  Text,
  Anchor,
  UnstyledButton,
} from '@mantine/core';
import { defaultFilter } from '@mantine/core/lib/TransferList/TransferList';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconLogout,
  IconMoon,
  IconSettings,
  IconSun,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: '#862E9C',
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: '#AE3EC9',
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
  }[];
}

export default function HeaderMenuColored({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { auth, setAuth, isLoading } = useAuth();
  const [authLinks, setAuthLinks] = useState(links);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      if (authLinks.at(-1)?.link === '/login') return;
      setAuthLinks(prevAuthLinks => [
        ...prevAuthLinks,
        {
          label: 'Signin/Signup',
          link: '/login',
        },
      ]);
      return;
    }
    setAuthLinks(authLinks.filter(item => item.link !== '/login'));
  }, []);

  function logoutUser() {
    setAuth(null);
    navigate('/login');
  }

  return (
    <Header height={76} className={classes.header} mb={120} p='10px'>
      <Container fluid>
        <div className={classes.inner}>
          <Title style={{ fontFamily: 'Poppins', color: 'white' }}>
            Budgetly
          </Title>
          <Group spacing={5} className={classes.links}>
            {authLinks.map(item => (
              <Link
                key={item.label}
                to={`${item.link}`}
                className={classes.link}
              >
                {`${item.label}`}
              </Link>
            ))}
            {auth !== null && (
              <>
                <UnstyledButton className={classes.link} onClick={logoutUser}>
                  Logout
                </UnstyledButton>
                <Avatar
                  src={`https://avatars.dicebear.com/api/initials/${auth?.user?.name}.svg`}
                  radius='xl'
                />
              </>
            )}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size='sm'
            color='#fff'
          />
        </div>
      </Container>
    </Header>
  );
}
function toggleColorScheme(value: string): void {
  throw new Error('Function not implemented.');
}

function setUserMenuOpened(arg0: boolean): void {
  throw new Error('Function not implemented.');
}
