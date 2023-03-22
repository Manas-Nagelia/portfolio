import {
  Card,
  Image as MantineImage,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
  MantineTheme,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import { Portfolio } from "./PortfolioInterface";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation },
];

export function Project(props: Portfolio) {
  const { classes, theme } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  const features = props.data.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={`/${props.imageName}`}
          alt={props.imageAlt}
          width="0"
          height="0"
          sizes={!mobile ? "15vw" : "80vw"}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={900}>{props.name}</Text>
          <Text fz="xs" c="dimmed">
            {props.desc}
          </Text>
        </div>
        <Badge variant="gradient">{props.label}</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Features and Technologies
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <Button
            radius="xl"
            style={{ flex: 1 }}
            styles={(theme: MantineTheme) => ({
              root: {
                backgroundColor: props.buttonColor ?? undefined,

                "&:not([data-disabled])": theme.fn.hover({
                  backgroundColor: theme.fn.darken(`${props.buttonColor ?? undefined}`, 0.05),
                }),
              },
            })}
            component="a"
            href={props.link}
            target="__blank"
          >
            {props.linkName}
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
