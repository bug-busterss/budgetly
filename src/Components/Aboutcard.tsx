import {
  createStyles,
  Avatar,
  Text,
  Group,
  Card,
  Grid,
  Container,
} from '@mantine/core';
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
      <Container>
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
                      Frontend Dev
                    </Text>

                    <Text size='lg' weight={500} className={classes.name}>
                      Tejash Patel
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                      <IconAt stroke={1.5} size={16} className={classes.icon} />
                      <Text size='xs' color='dimmed'>
                        pateltejash49@gmail.com
                      </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                      <IconPhoneCall
                        stroke={1.5}
                        size={16}
                        className={classes.icon}
                      />
                      <Text size='xs' color='dimmed'>
                        7016930134
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
                      FRONTEND DEV
                    </Text>

                    <Text size='lg' weight={500} className={classes.name}>
                      Faizan Lal
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                      <IconAt stroke={1.5} size={16} className={classes.icon} />
                      <Text size='xs' color='dimmed'>
                        faizanlal563@gmail.com
                      </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                      <IconPhoneCall
                        stroke={1.5}
                        size={16}
                        className={classes.icon}
                      />
                      <Text size='xs' color='dimmed'>
                        9313157929
                      </Text>
                    </Group>
                  </div>
                  <Card></Card>
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
                      FULLSTRACK DEV
                    </Text>

                    <Text size='lg' weight={500} className={classes.name}>
                      Usman Sabuwala
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                      <IconAt stroke={1.5} size={16} className={classes.icon} />
                      <Text size='xs' color='dimmed'>
                        ui.sabuwala@gmail.com
                      </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                      <IconPhoneCall
                        stroke={1.5}
                        size={16}
                        className={classes.icon}
                      />
                      <Text size='xs' color='dimmed'>
                        8238892763
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
                      .Dev
                    </Text>

                    <Text size='lg' weight={500} className={classes.name}>
                      Bhavesh Patil
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                      <IconAt stroke={1.5} size={16} className={classes.icon} />
                      <Text size='xs' color='dimmed'>
                        BhaveshPatil8000@gmail.com
                      </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                      <IconPhoneCall
                        stroke={1.5}
                        size={16}
                        className={classes.icon}
                      />
                      <Text size='xs' color='dimmed'>
                        9427527473
                      </Text>
                    </Group>
                  </div>
                </Group>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
