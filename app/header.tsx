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
            <a href={link.link} className={classes.link}>
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
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} mb={1}>
      <Container>
        <div className={classes.inner}>
          <svg
            width={rem(230)}
            height={rem(230)}
            viewBox="0 0 477 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <a href="/">
              <path
                d="M126.56 14.8H117.6L106.96 32.216L96.32 14.8H87.36V54H96.32V31.208L106.456 47.84H107.464L117.6 31.208V54H126.56V14.8ZM153.346 26V28.632C151.498 26.504 148.754 25.216 145.002 25.216C137.666 25.216 131.618 31.656 131.618 40C131.618 48.344 137.666 54.784 145.002 54.784C148.754 54.784 151.498 53.496 153.346 51.368V54H161.746V26H153.346ZM146.682 46.832C142.818 46.832 140.018 44.2 140.018 40C140.018 35.8 142.818 33.168 146.682 33.168C150.546 33.168 153.346 35.8 153.346 40C153.346 44.2 150.546 46.832 146.682 46.832ZM184.316 25.216C180.62 25.216 177.82 26.56 176.308 28.632V26H167.908V54H176.308V38.712C176.308 34.736 178.436 32.944 181.516 32.944C184.204 32.944 186.388 34.568 186.388 38.04V54H194.788V36.808C194.788 29.248 189.972 25.216 184.316 25.216ZM220.885 26V28.632C219.037 26.504 216.293 25.216 212.541 25.216C205.205 25.216 199.157 31.656 199.157 40C199.157 48.344 205.205 54.784 212.541 54.784C216.293 54.784 219.037 53.496 220.885 51.368V54H229.285V26H220.885ZM214.221 46.832C210.357 46.832 207.557 44.2 207.557 40C207.557 35.8 210.357 33.168 214.221 33.168C218.085 33.168 220.885 35.8 220.885 40C220.885 44.2 218.085 46.832 214.221 46.832ZM243.126 34.176C243.126 33.168 244.022 32.608 245.478 32.608C247.326 32.608 248.446 33.616 249.23 35.072L256.398 31.208C254.046 27.232 250.014 25.216 245.478 25.216C239.654 25.216 234.502 28.296 234.502 34.4C234.502 44.088 248.278 42.464 248.278 45.544C248.278 46.664 247.27 47.28 245.254 47.28C242.79 47.28 241.222 46.104 240.494 43.976L233.214 48.12C235.398 52.656 239.654 54.784 245.254 54.784C251.302 54.784 256.902 52.04 256.902 45.6C256.902 35.24 243.126 37.368 243.126 34.176ZM297.489 14.8V36.08L282.369 14.8H275.649V54H284.609V32.72L299.729 54H306.449V14.8H297.489ZM333.213 26V28.632C331.365 26.504 328.621 25.216 324.869 25.216C317.533 25.216 311.485 31.656 311.485 40C311.485 48.344 317.533 54.784 324.869 54.784C328.621 54.784 331.365 53.496 333.213 51.368V54H341.613V26H333.213ZM326.549 46.832C322.685 46.832 319.885 44.2 319.885 40C319.885 35.8 322.685 33.168 326.549 33.168C330.413 33.168 333.213 35.8 333.213 40C333.213 44.2 330.413 46.832 326.549 46.832ZM368.327 26V28.856C366.479 26.56 363.791 25.216 360.151 25.216C352.199 25.216 346.375 31.712 346.375 39.44C346.375 47.168 352.199 53.664 360.151 53.664C363.791 53.664 366.479 52.32 368.327 50.024V52.6C368.327 56.576 365.919 58.592 361.999 58.592C358.303 58.592 356.679 57.024 355.615 55.064L348.447 59.208C351.023 63.8 355.895 65.984 361.719 65.984C369.167 65.984 376.503 62.008 376.503 52.6V26H368.327ZM361.551 45.936C357.575 45.936 354.775 43.304 354.775 39.44C354.775 35.576 357.575 32.944 361.551 32.944C365.527 32.944 368.327 35.576 368.327 39.44C368.327 43.304 365.527 45.936 361.551 45.936ZM390.17 43.36H410.05C410.274 42.296 410.386 41.176 410.386 40C410.386 31.544 404.338 25.216 396.162 25.216C387.314 25.216 381.266 31.656 381.266 40C381.266 48.344 387.202 54.784 396.778 54.784C402.098 54.784 406.242 52.824 408.986 49.016L402.266 45.152C401.146 46.384 399.186 47.28 396.89 47.28C393.81 47.28 391.234 46.272 390.17 43.36ZM390.002 37.088C390.786 34.232 392.914 32.664 396.106 32.664C398.626 32.664 401.146 33.84 402.042 37.088H390.002ZM415.15 54H423.55V13.12H415.15V54ZM433.897 23.536C436.641 23.536 438.937 21.24 438.937 18.496C438.937 15.752 436.641 13.456 433.897 13.456C431.153 13.456 428.857 15.752 428.857 18.496C428.857 21.24 431.153 23.536 433.897 23.536ZM429.697 54H438.097V26H429.697V54ZM464.572 26V28.632C462.724 26.504 459.98 25.216 456.228 25.216C448.892 25.216 442.844 31.656 442.844 40C442.844 48.344 448.892 54.784 456.228 54.784C459.98 54.784 462.724 53.496 464.572 51.368V54H472.972V26H464.572ZM457.908 46.832C454.044 46.832 451.244 44.2 451.244 40C451.244 35.8 454.044 33.168 457.908 33.168C461.772 33.168 464.572 35.8 464.572 40C464.572 44.2 461.772 46.832 457.908 46.832Z"
                fill="white"
              />
              <circle cx="34" cy="34" r="34" fill="#3A54FD" />
              <path
                d="M33.8078 22.9928H29.0062L23.3042 32.326L17.6023 22.9928H12.8006V44H17.6023V31.7858L23.0341 40.6989H23.5743L29.0062 31.7858V44H33.8078V22.9928ZM49.1224 22.9928V34.3967L41.0196 22.9928H37.4184V44H42.22V32.5961L50.3228 44H53.924V22.9928H49.1224Z"
                fill="#F9F9F9"
              />
            </a>
          </svg>

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
