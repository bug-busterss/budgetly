import { useState } from 'react';
import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Text,
  Menu,
  Tabs,
  Burger,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import {
  IconSun,
  IconMoon,
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons';

// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles(theme => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
    borderBottom: `1px solid ${
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background
    }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        0.1
      ),
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      0.1
    ),
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    color: theme.white,
    backgroundColor: 'transparent',
    borderColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        0.1
      ),
    },

    '&[data-active]': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        0.1
      ),
      borderColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
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
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        0.1
      ),
    },
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string[];
}

export default function HeaderTabsColored({ user, tabs }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = tabs.map(tab => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position='apart'>
          <Title>Budgetly</Title>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size='sm'
            color={theme.white}
          />

          <a className={classes.link}>Register</a>
          <Menu
            width={260}
            position='bottom-end'
            transition='pop-top-right'
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            {/* <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group spacing={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius='xl'
                    size={20}
                  />
                  <Text
                    weight={500}
                    size='sm'
                    sx={{ lineHeight: 1, color: theme.white }}
                    mr={3}
                  >
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton> 
            </Menu.Target> */}
            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
                Logout
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                color='red'
                icon={<IconTrash size={14} stroke={1.5} />}
              >
                Delete account
              </Menu.Item>
              <Menu.Divider />
              <Menu.Divider>Theme</Menu.Divider>
              <Menu.Item>
                <SegmentedControl
                  value={colorScheme}
                  onChange={(value: 'light' | 'dark') =>
                    toggleColorScheme(value)
                  }
                  data={[
                    {
                      value: 'light',
                      label: (
                        <Center>
                          <IconSun size={16} stroke={1.5} />
                          <Box ml={10}>Light</Box>
                        </Center>
                      ),
                    },
                    {
                      value: 'dark',
                      label: (
                        <Center>
                          <IconMoon size={16} stroke={1.5} />
                          <Box ml={10}>Dark</Box>
                        </Center>
                      ),
                    },
                  ]}
                />
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          variant='outline'
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
