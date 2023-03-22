import { TablerIconsProps } from "@tabler/icons-react";

interface Data {
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
}

export interface Portfolio {
  name: string;
  desc: string;
  label: string;
  imageName: string;
  imageAlt: string;
  data: Data[];
  linkName: string;
  link: string;
  buttonColor?: string;
}
