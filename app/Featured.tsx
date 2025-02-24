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
  IconBrandTailwind,
  IconBrandFigma,
  IconFlask,
  IconPepper,
  IconAi,
  IconPackage,
  IconRecordMail,
  IconUserCircle,
  IconGraph,
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
            name="The Genuine Journal"
            desc="Building an independent journalist platform aimed at promoting free speech and reducing polarization via an AI political bias checker. Built with Next.js, Tailwind, and Supabase."
            label="Platform"
            imageName="TGJ.jpeg"
            imageAlt="Screenshot of the The Genuine Journal's platform."
            data={[
              { label: "AI", icon: IconAi },
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "Tailwind", icon: IconBrandTailwind },
              { label: "ShadCN", icon: IconPackage },
              { label: "Supabase", icon: IconBrandSupabase },
            ]}
            linkName="Website"
            link="https://thegenuinejournal.com/"
            buttonColor="#3C6AF6"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Financial Market Simulation"
            desc="Building a simulation where AI agents trade against each other in a financial market environment. Different AI agents have different strategies depending on their classification (i.e institional, retail, etc), and these strategies improve over time using reinforcement learning. Being build using Python."
            label="Simulation"
            imageName="FinSims.webp"
            imageAlt="Screenshot of the predicted buy/sell signals for a given stock."
            data={[
              { label: "AI", icon: IconAi },
              { label: "Python", icon: IconBrandPython },
              { label: "Finance", icon: IconGraph },
              { label: "Supabase", icon: IconBrandSupabase },
            ]}
            linkName="Description (PDF)"
            link="/FinSims_Description.pdf"
            buttonColor="#484a50"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="JHU Pancreas Pathology Quiz"
            desc="Built a quiz app for Johns Hopkins University's Pancreas Pathology department for a research study. Used Clerk for seamless magic link authentication."
            label="Web App"
            imageName="JHU.png"
            imageAlt="Screenshot of the JHU quiz app."
            data={[
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "Tailwind", icon: IconBrandTailwind },
              { label: "Supabase", icon: IconBrandSupabase },
              { label: "Clerk", icon: IconUserCircle },
            ]}
            linkName="Website"
            link="https://pickaxe-website-production.up.railway.app/"
            buttonColor="#6C47FF"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Pickaxe Sports"
            desc="Helped to design the website for Pickaxe Sports and create the cron job for the auto-update functionality of the backend data. Used Figma and Tailwind to design and Python for the cron job execution."
            label="Website"
            imageName="Pickaxe.png"
            imageAlt="Screenshot of the landing page of Pickaxe Sports."
            data={[
              { label: "Cron Job", icon: IconDatabase },
              { label: "Designed in Figma", icon: IconBrandFigma },
              { label: "Tailwind", icon: IconBrandTailwind },
              { label: "Supabase", icon: IconBrandSupabase },
            ]}
            linkName="Website"
            link="https://pickaxe-website-production.up.railway.app/"
            buttonColor="#12B981"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Project
            name="Sander Schulhoff Portfolio"
            desc="Designed and co-developed a portfolio website for Sander Schulhoff. Designed in Figma and built with Next.js and Tailwind. Website fully responsive and ranks #1 on Google."
            label="Website"
            imageName="Sander_Schulhoff.png"
            imageAlt="Screenshot of the Sander Schulhoff Portfolio website."
            data={[
              { label: "Designed in Figma", icon: IconBrandFigma },
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "React.js", icon: IconBrandReact },
              { label: "Tailwind", icon: IconBrandTailwind },
            ]}
            linkName="Website"
            link="https://trigaten.github.io/"
            buttonColor="#13BB02"
          />
        </Grid.Col>
        {/* <Grid.Col md={6} lg={4}>
          <Project
            name="The GPA Gym"
            desc="Developing an edtech website for a non-profit being built aimed to provide free education globally. Being built with Next.js and Tailwind."
            label="Website"
            imageName="TGG.png"
            imageAlt="Screenshot of the The GPA Gym's website."
            data={[
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "React.js", icon: IconBrandReact },
              { label: "Tailwind", icon: IconBrandTailwind },
            ]}
            linkName="Website"
            link="https://trigaten.github.io/"
            buttonColor="#057A55"
          />
        </Grid.Col> */}
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
              { label: "Flask", icon: IconPepper },
              { label: "Node.js", icon: IconApi },
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
              { label: "Next.js", icon: IconBrandNextjs },
              { label: "Node.js", icon: IconApi },
              { label: "Supabase", icon: IconBrandSupabase },
              { label: "Python", icon: IconBrandPython },
              { label: "Flask", icon: IconPepper },
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
