import {
  createStyles,
  Header,
  Menu,
  Group,
  Burger,
  Container,
  Title,
  Avatar,
  UnstyledButton,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit, IconLogout, IconSettings } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles(theme => ({
  header: {
    background: theme.fn.variant({
      variant: 'gradient',
      gradient: { from: '#AD1DEB', to: '#6E72FC' },
    }).background,
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
      backgroundColor: '#6e40ff',
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
          <Group>
            <Image
              src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/banknote-with-dollar-sign_1f4b5.png'
              width={40}
            />
            <Title style={{ fontFamily: 'Poppins', color: 'white' }}>
              Budgetly
            </Title>
          </Group>
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
                <Menu shadow='md' width={400}>
                  <Menu.Target>
                    <UnstyledButton>
                      <Avatar
                        src={`https://avatars.dicebear.com/api/initials/${auth?.user?.name}.svg`}
                        radius='xl'
                      />
                    </UnstyledButton>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item icon={<IconEdit size={25} />}>
                      Update Profile
                    </Menu.Item>
                    <Menu.Item icon={<IconSettings size={25} />}>
                      Settings
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item icon={<IconLogout size={25} />}>
                      <UnstyledButton onClick={logoutUser}>
                        Logout
                      </UnstyledButton>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
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
function borderBottom(
  arg0: (theme: import('@mantine/core').MantineTheme) => any,
  borderBottom: any,
  arg2: number
) {
  throw new Error('Function not implemented.');
}
