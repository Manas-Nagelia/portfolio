import { Grid, MantineTheme, Title, createStyles, rem } from "@mantine/core";
import { Project } from "./Project";

const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    marginLeft: "5em",
    marginRight: "5em",
  },

  title: {
    color: theme.white,
    fontSize: rem(50),
    fontWeight: 800,
    textAlign: "center",
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(40),
    },
  },
}));

const Featured = () => {
  const { classes } = useStyles();
  return (
    <div id="feature">
      <Title className={classes.title} mt={40}>
        Portfolio
      </Title>
      <Grid mt="sm" gutter="xl" className={classes.grid}>
        <Grid.Col span={4}>
          <Project />
        </Grid.Col>
        <Grid.Col span={4}>
          <Project />
        </Grid.Col>
        <Grid.Col span={4}>
          <Project />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Featured;
