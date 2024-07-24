interface Data {
  label: string;
  icon: () => JSX.Element;
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
