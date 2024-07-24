interface Data {
  label: string;
  icon: any;
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
