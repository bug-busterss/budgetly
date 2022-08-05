import { createStyles, Avatar, Text, Group, Card, Grid } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons';

const useStyles = createStyles(theme => ({
  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export function UserInfoIcons({
  avatar,
  name,
  title,
  phone,
  email,
}: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Grid>
        <Grid.Col span={6}>
          <Card shadow='sm' p='lg' radius='md' withBorder>
            <Card.Section>
              <Group noWrap>
                <Avatar src='B_ava' size={94} radius='md' />
                <div>
                  <Text
                    size='xs'
                    sx={{ textTransform: 'uppercase' }}
                    weight={700}
                    color='dimmed'
                  >
                    Dev
                  </Text>

                  <Text size='lg' weight={500} className={classes.name}>
                    Tejash
                  </Text>

                  <Group noWrap spacing={10} mt={3}>
                    <IconAt stroke={1.5} size={16} className={classes.icon} />
                    <Text size='xs' color='dimmed'>
                      Tejash
                    </Text>
                  </Group>

                  <Group noWrap spacing={10} mt={5}>
                    <IconPhoneCall
                      stroke={1.5}
                      size={16}
                      className={classes.icon}
                    />
                    <Text size='xs' color='dimmed'>
                      55
                    </Text>
                  </Group>
                </div>
              </Group>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow='sm' p='lg' radius='md' withBorder>
            <Card.Section>
              <Group noWrap>
                <Avatar src='B_ava' size={94} radius='md' />
                <div>
                  <Text
                    size='xs'
                    sx={{ textTransform: 'uppercase' }}
                    weight={700}
                    color='dimmed'
                  >
                    Dev
                  </Text>

                  <Text size='lg' weight={500} className={classes.name}>
                    Tejash
                  </Text>

                  <Group noWrap spacing={10} mt={3}>
                    <IconAt stroke={1.5} size={16} className={classes.icon} />
                    <Text size='xs' color='dimmed'>
                      Tejash
                    </Text>
                  </Group>

                  <Group noWrap spacing={10} mt={5}>
                    <IconPhoneCall
                      stroke={1.5}
                      size={16}
                      className={classes.icon}
                    />
                    <Text size='xs' color='dimmed'>
                      55
                    </Text>
                  </Group>
                </div>
              </Group>
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
