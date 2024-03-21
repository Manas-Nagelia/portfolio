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
  IconBrandWordpress,
  IconApi,
  IconBrandReact,
  IconBrandReactNative,
  IconChartBar,
  IconBrandWix,
  IconBrandPython,
  IconServer,
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
    <div id="portfolio">
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
      {/* <Group mt="xl" position="center" mb="sm">
        <Button size="md" radius="xl" component="a">
          See more projects
        </Button>
      </Group> */}
      <Grid gutter="xl" className={classes.grid}>
        
        <Grid.Col md={6} lg={4}>
          <Project
            name="Backboard Stats Mobile App"
            desc="Helped to program and UI design mobile app for Backboard Stats. Built in React Native with clean animations. Runs on a Flask & Node.js serverless backend API. Currently work in progress."
            label="Mobile App"
            imageName="BBMobile.webp"
            imageAlt="Three images of the mobile app of Backboard Stats."
            data={[
              { label: "React Native", icon: IconBrandReactNative },
              { label: "Supabase", icon: IconBrandSupabase },
              { label: "Python", icon: IconBrandPython },
              { label: "Serverless", icon: IconServer },
            ]}
            linkName="Main Website"
            link="https://www.backboardstats.com/"
            buttonColor="#FA8855"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Backboard Stats Website"
            desc="Co-founder of BackBoard Stats. UI Designed, programmed, and deployed the frontend and backend for a NBA stats web app. Runs on a Flask & Node.js serverless backend and React as frontend using Next.js. Features include authentication, following, and NBA stats."
            label="FULL STACK WEBSITE"
            imageName="BBWebsite.webp"
            imageAlt="An image of the website, Backboard Stats."
            data={[
              { label: "Node.js", icon: IconApi },
              { label: "React.js", icon: IconBrandReact },
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "Supabase", icon: IconBrandSupabase },
              { label: "Python", icon: IconBrandPython },
              { label: "Serverless", icon: IconServer },
            ]}
            linkName="Website"
            link="https://www.backboardstats.com/"
            buttonColor="#FA8855"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Kidney Plate Mobile App"
            desc="Programmed and designed a prototype idea for a nutrional tracker for kidney patients. Current features implemented is a search to filter on all foods coming from USDA Foods API with a modal and passwordless code authentication"
            label="Mobile App"
            imageName="KidneyPlate.webp"
            imageAlt="Three images of the mobile app of Kidney Plate."
            data={[
              { label: "React Native", icon: IconBrandReactNative },
              { label: "Supabase", icon: IconBrandSupabase },
            ]}
            linkName="GitHub Code"
            link="https://github.com/Kidney-Plate/app"
            buttonColor="#4f46e5"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Navdanya Group"
            desc="Designed and built the website for a rice milling company based in India using Wordpress. Stunning, minimalistic design with clean animations"
            label="Wordpress"
            imageName="Navdanya.webp"
            imageAlt="An image of the website, Navdanya Group."
            data={[
              { label: "Wordpress", icon: IconBrandWordpress },
              { label: "SEO Optimized", icon: IconSeo },
              { label: "Business Website", icon: IconBuilding },
            ]}
            linkName="Website"
            link="https://navdanya.in/"
            buttonColor="#7BB52B"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="PSC Houston Oilfield Supplies LLC"
            desc="Designed and built the website for a Houston startup trading company based in Houston, Texas using Wordpress"
            label="Wordpress"
            imageName="Houston.webp"
            imageAlt="An image of the website, PSC Houston Oilfield Supplies."
            data={[
              { label: "Wordpress", icon: IconBrandWordpress },
              { label: "SEO Optimized", icon: IconSeo },
              { label: "Business Website", icon: IconBuilding },
            ]}
            linkName="Website"
            link="https://www.pschoustonllc.com/"
            buttonColor="#1B488B"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="PSC Hand Safety LLP"
            desc="Redesigned and created the website for a multi-millionaire dollar oil rig company based in India, PSC Hand Safety LLP."
            label="Wix"
            imageName="PSC.webp"
            imageAlt="An image of the website, PSC Hand Safety."
            data={[
              { label: "Wix", icon: IconBrandWix },
              { label: "SEO Optimized", icon: IconSeo },
              { label: "Business Website", icon: IconBuilding },
            ]}
            linkName="Website"
            link="https://www.pschandsafety.com/"
            buttonColor="#ED1C24"
          />
        </Grid.Col>
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
            desc="Made a business website for a pathology company, Portal Bioscience in Wix. SEO Optimized with contact form."
            label="Wix"
            imageName="Portal.webp"
            imageAlt="An image of the website, Portal Bioscience."
            data={[
              { label: "Wix", icon: IconBrandWix },
              { label: "SEO Optimized", icon: IconSeo },
              { label: "Business Website", icon: IconBuilding },
            ]}
            linkName="Website"
            link="https://www.portalbioscience.com/"
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
