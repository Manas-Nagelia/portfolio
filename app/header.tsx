"use client";

import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
  Transition,
  Paper,
  Accordion,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import { useState } from "react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropdown: {
    position: "absolute",
    top: rem(56),
    left: 0,
    right: 0,
    zIndex: 50,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors.dark[3], 0.35)
          : theme.colors.gray[1],
    },
    [theme.fn.smallerThan("sm")]: {
      padding: `${rem(16)} ${rem(24)}`,
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: "#F8F8FD",
    },
  },

  iconDown: {
    transform: "rotate(0deg)",
    transition: "transform 0.2s linear",
  },

  iconUp: {
    transform: "rotate(180deg)",
    transition: "transform 0.2s linear",
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [linksOpened, setLinks] = useState<any | undefined>(undefined);
  const { classes, cx } = useStyles();

  const burgerItems = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link
        key={item.label}
        href={item.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
        style={{ textIndent: "25px" }}
        onClick={(event) => {
          setActive(item.link);
          toggle();
          close();
        }}
      >
        {item.label}
      </Link>
    ));
    if (menuItems) {
      return (
        <>
          <a
            href={link.link}
            className={classes.link}
            onClick={(event) => {
              event.preventDefault();
              if (linksOpened == undefined || link.link != linksOpened) {
                setLinks(link.link);
              } else {
                setLinks(undefined);
              }
            }}
          >
            <Group position="apart">
              <span className={classes.linkLabel}>{link.label}</span>
              <IconChevronDown
                size="0.9rem"
                stroke={1.5}
                className={
                  linksOpened != link.link ? classes.iconDown : classes.iconUp
                }
              />
            </Group>
          </a>
          <Collapse in={linksOpened == link.link}>{menuItems}</Collapse>
        </>
      );
    } else {
      return (
        <Link
          key={link.label}
          href={link.link}
          className={cx(classes.link, {
            [classes.linkActive]: active === link.link,
          })}
          onClick={(event) => {
            setActive(link.link);
            toggle();
            close();
          }}
        >
          {link.label}
        </Link>
      );
    }
  });

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} mb={1}>
      <Container>
        <div className={classes.inner}>
          <MantineLogo size={28} />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => {
              toggle();
              setLinks(undefined);
            }}
            className={classes.burger}
            size="sm"
          />
          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {burgerItems}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Header>
  );
}
