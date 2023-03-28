import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  rem,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: rem(600),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: `calc(${theme.spacing.xl} * 8.5)`,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(45),
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.md,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl})`,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(7, 8, 9, 0.25) 0%, rgba(7, 8, 9, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Manas Nagelia.</Title>
        <Text className={classes.description} size="xl" mt="sm">
          Investor, Entrepreneur, Developer, and Blogger.
        </Text>

        <Button
          variant="gradient"
          gradient={{ from: "#3a92fd", to: "brand" }}
          size="lg"
          radius="xl"
          className={classes.control}
          rightIcon={<IconChevronDown style={{ marginTop: "2px" }} size={25} />}
          component="a"
          href="#feature"
        >
          See my portfolio
        </Button>
      </Container>
    </div>
  );
}
