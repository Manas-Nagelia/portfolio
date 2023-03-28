import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  List,
  Button,
} from "@mantine/core";
import {
  IconDeviceDesktop,
  IconServer2,
  IconDatabase,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    backgroundColor: "#24262F",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function Skills() {
  const { classes, theme } = useStyles();

  return (
    <Container size="lg" py="xl" mt={40} id="skills">
      <Group position="center">
        <Badge
          variant="gradient"
          gradient={{ from: "indigo", to: "brand" }}
          size="lg"
        >
          Full Stack
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        My Skills
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        My skills in the programming space including frontend, backend, and
        database management.
      </Text>

      <Group mt="xl" position="center" mb="xl">
        <Button size="md" radius="xl" component="a">
          See my services
        </Button>
      </Group>

      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        <Card
          key="Frontend"
          shadow="md"
          radius="md"
          className={classes.card}
          padding="xl"
        >
          <IconDeviceDesktop
            size={rem(50)}
            stroke={2}
            color={theme.fn.primaryColor()}
          />
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            Frontend
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            <List>
              <List.Item>HTML/CSS</List.Item>
              <List.Item>JavaScript</List.Item>
              <List.Item>React</List.Item>
              <List.Item>Figma</List.Item>
              <List.Item>Tailwind</List.Item>
              <List.Item>UI Libraries</List.Item>
              <List.Item>Next.js</List.Item>
              <List.Item>Website Builders (Wix, Weebly, Squarespace)</List.Item>
            </List>
          </Text>
        </Card>
        <Card
          key="Backend"
          shadow="md"
          radius="md"
          className={classes.card}
          padding="xl"
        >
          <IconServer2
            size={rem(50)}
            stroke={2}
            color={theme.fn.primaryColor()}
          />
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            Backend
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            <List>
              <List.Item>JavaScript</List.Item>
              <List.Item>TypeScript</List.Item>
              <List.Item>Node.js</List.Item>
              <List.Item>MERN Stack</List.Item>
              <List.Item>Rest APIs</List.Item>
              <List.Item>Python</List.Item>
            </List>
          </Text>
        </Card>
        <Card
          key="Database"
          shadow="md"
          radius="md"
          className={classes.card}
          padding="xl"
        >
          <IconDeviceDesktop
            size={rem(50)}
            stroke={2}
            color={theme.fn.primaryColor()}
          />
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            Database
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            <List>
              <List.Item>MongoDB</List.Item>
              <List.Item>MySQL</List.Item>
              <List.Item>PostgreSQL</List.Item>
              <List.Item>Redis</List.Item>
              <List.Item>SQL</List.Item>
              <List.Item>JSON</List.Item>
              <List.Item>Rest APIs</List.Item>
            </List>
          </Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
