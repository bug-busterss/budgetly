import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Title,
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} position='right' noWrap>
          <Title>Budgetly</Title>
          <ActionIcon size={40}>
            <IconBrandTwitter size={30} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size={30}>
            <IconBrandYoutube size={30} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size={30}>
            <IconBrandInstagram size={30} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
