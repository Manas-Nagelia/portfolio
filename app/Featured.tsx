import {
  Badge,
  Button,
  Center,
  Grid,
  Group,
  MantineTheme,
  Title,
  createStyles,
  rem,
  Text,
} from "@mantine/core";
import { Project } from "./Project";
import {
  IconBrandNextjs,
  IconBrandSupabase,
  IconDatabase,
  IconBrandReact,
  IconApi,
  IconChartBar,
  IconBrandWix,
  IconSeo,
  IconBuilding,
} from "@tabler/icons-react";

const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    marginTop: "0.1%",
    marginLeft: "5%",
    marginRight: "5%",
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

  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },
}));

const Featured = () => {
  const { classes } = useStyles();
  return (
    <div id="feature">
      <Group position="center" mt={40}>
        <Badge
          variant="gradient"
          gradient={{ from: "grape", to: "violet" }}
          size="lg"
        >
          Stunning projects
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Portfolio
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Take a look at the best ones.
      </Text>
      <Group mt="xl" position="center" mb="sm">
        <Button size="md" radius="xl" component="a">
          See more projects
        </Button>
      </Group>
      <Grid gutter="xl" className={classes.grid}>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Garden Playhouse Daycare Website"
            desc="Made the website for a daycare located in Fremont, California. Built in Next.js. Ships with admin center to update content."
            label="Full Stack Website"
            imageName="Garden.webp"
            imageAlt="An image of the website, Garden Playhouse Daycare."
            data={[
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "Supabase and Postgres", icon: IconBrandSupabase },
              { label: "Admin Center", icon: IconChartBar },
            ]}
            linkName="Website"
            link="https://gardenplayhouse.net/"
            buttonColor="#0CA678"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Portal Bioscience"
            desc="Made the website for a pathology company, Portal Bioscience in Wix."
            label="Wix"
            imageName="Portal.webp"
            imageAlt="An image of the website, Portal Bioscience."
            data={[
              { label: "Wix", icon: IconBrandWix },
              { label: "SEO Optimized", icon: IconSeo },
              { label: "Business Website", icon: IconBuilding },
            ]}
            linkName="Website"
            link="https://portalbioscience.com/"
            buttonColor="#BA1E23"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="ChatMe"
            desc="Realtime chat app with stunning UI built with Next.js and Node.js. Lightning fast with Redis as a cache."
            label="Full Stack Website"
            imageName="Chat.webp"
            imageAlt="An image of the chat app, ChatMe."
            data={[
              { label: "Node", icon: IconApi },
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "Supabase", icon: IconBrandSupabase },
              { label: "Postgres and Redis", icon: IconDatabase },
            ]}
            linkName="GitHub"
            link="https://github.com/Manas-Nagelia/ChatMe"
            buttonColor="#1C7ED6"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Featured;
