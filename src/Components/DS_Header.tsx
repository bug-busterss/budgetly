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
import { Link } from 'react-router-dom';
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

  return (
    <Header height={56} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Title style={{ fontFamily: 'Poppins', color: 'white' }}>
            Budgetly
          </Title>
          <Group spacing={5} className={classes.links}>
            {links.map(item => (
              // <a key={item.label} href={item.link} className={classes.link}>
              //   {item.label}
              // </a>
              <Link to={`${item.link}`} className={classes.link}>
                {`${item.label}`}
              </Link>
            ))}
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
