"use client";

import { Grid, Text, Title } from "@mantine/core";
import { HeroContentLeft } from "./hero";
import { Project } from "./Project";
import Featured from "./Featured";
import { Skills } from "./Skills";
import "./styles.css";
import Blogs from "./Blogs";
import { Item } from "./Blog";
import { useEffect } from "react";
import { Contact } from "./Contact";

interface Props {
  items: Item[];
}

export default function HomePage(props: Props) {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <HeroContentLeft />
      <Featured />
      <Skills />
      <Blogs blogs={props.items} />
      <Contact />
    </>
  );
}
