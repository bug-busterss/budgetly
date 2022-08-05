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
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
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
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        0.1
      ),
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // const items = links.map(link => {

  //   if (menuItems) {
  //     return (
  //       <Menu>
  //         <Menu.Target>
  //           <a
  //             href={link.link}
  //             className={classes.link}
  //             onClick={event => event.preventDefault()}
  //           >
  //             <Center>
  //               <span className={classes.linkLabel}>{link.label}</span>
  //               <IconChevronDown size={12} stroke={1.5} />
  //             </Center>
  //           </a>
  //         </Menu.Target>
  //         <Menu.Dropdown>{menuItems}</Menu.Dropdown>
  //       </Menu>
  //     );
  //   }

  //   return (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={classes.link}
  //       onClick={event => event.preventDefault()}
  //     >
  //       {link.label}
  //     </a>
  //   );
  // });

  return (
    <Header height={56} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          {/* <MantineProvider theme={{ fontFamily: 'Poppins' }}> */}
          <Title style={{ fontFamily: 'Poppins' }}>Budgetly</Title>
          {/* </MantineProvider> */}
          {/* <MantineLogo size={28} inverted /> */}
          <Group spacing={5} className={classes.links}>
            {links.map(item => (
              <a key={item.label} href={item.link} className={classes.link}>
                {item.label}
              </a>
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
            <Menu.Item color='red' icon={<IconTrash size={14} stroke={1.5} />}>
              Delete account
            </Menu.Item>
            <Menu.Divider />
            <Menu.Divider>Theme</Menu.Divider>
            <Menu.Item>
              <SegmentedControl
                value={colorScheme}
                onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
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
