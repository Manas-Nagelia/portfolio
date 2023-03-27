import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  rem,
} from "@mantine/core";
import { IconHeart, IconBookmark, IconShare } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardFooterProps {
  image: string;
  category: string;
  title: string;
  footer: string;
  desc: string;
  link: string;
}

export function Blog({
  image,
  category,
  title,
  footer,
  desc,
  link
}: ArticleCardFooterProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card} component="a" href={link} target="__blank">
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section px={20} style={{ height: "8em" }}>
        <Text fw={700} className={classes.title} mt="xs">
          {title}
        </Text>

        <Text fz="sm" color="dimmed" lineClamp={4}>
          {desc}
        </Text>
      </Card.Section>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Badge color="indigo">{category}</Badge>
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart
                size="1.2rem"
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark
                size="1.2rem"
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon>
              <IconShare
                size="1.2rem"
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
