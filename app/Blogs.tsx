import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  SimpleGrid,
  Container,
  rem,
  Button,
} from "@mantine/core";
import { convert } from "html-to-text";
import { Blog } from "./Blog.tsx";
import { Item } from "./Blog.ts";

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

interface Props {
  blogs: Item[];
}

export default function Blogs(props: Props) {
  const { classes, theme } = useStyles();

  const blogs = props.blogs.map((blog) => {
    const category = blog.categories[0];
    const subtitle = blog.content.split("<h4>")[1].split("</h4>")[0];
    const thumbnail = blog.content.split('<img alt=\"\" src=\"')[1].split('\">')[0];
    const desc = convert(blog.content.split("<p>")[1], {
      selectors: [
        { selector: "a", options: { linkBrackets: false, ignoreHref: true } },
        { selector: "h3", options: { uppercase: false } },
      ],
      preserveNewlines: true,
    });

    return (
      <Blog
        image={thumbnail}
        category={category.charAt(0).toUpperCase() + category.slice(1)}
        title={blog.title}
        footer={subtitle}
        key={blog.guid}
        link={blog.link}
        desc={desc}
      />
    );
  });

  blogs.pop();

  return (
    <Container size="lg" py="xl" mt={40} id="blogs">
      <Group position="center">
        <Badge
          variant="gradient"
          gradient={{ from: "teal", to: "brand" }}
          size="lg"
        >
          Blogs
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Recent Blogs
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Blogs on finance, stock market, business, entrepreneurship, crypto, and
        tech.
      </Text>

      <Group mt="xl" position="center" mb="xl">
        <Button
          size="md"
          radius="xl"
          component="a"
          href="https://medium.com/@manasnagelia"
          target="__blank"
        >
          Follow on Medium
        </Button>
      </Group>

      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {blogs}
      </SimpleGrid>
      <Group mt="xl" position="center" mb="xl">
        <Button
          variant="white"
          size="md"
          radius="xl"
          component="a"
          href="https://medium.com/@manasnagelia"
          target="__blank"
        >
          See more blogs on Medium
        </Button>
      </Group>
    </Container>
  );
}
