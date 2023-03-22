"use client";

import { Inter } from "next/font/google";
import { Grid, Text, Title } from "@mantine/core";
import { HeroContentLeft } from "./hero";
import { Project } from "./Project";
import Featured from "./Featured";
import { Skills } from "./Skills";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroContentLeft />
      <Featured />
      <Skills />
    </>
  );
}
